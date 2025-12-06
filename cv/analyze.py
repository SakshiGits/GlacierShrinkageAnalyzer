# cv/analyze.py
import cv2
import numpy as np
import os
import sys
import json

def ensure_dir(p):
    os.makedirs(p, exist_ok=True)

def load_gray(path):
    img = cv2.imread(path)
    if img is None:
        raise FileNotFoundError(f"Image not found: {path}")
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    return img, gray

def threshold_image(gray, mode="otsu", manual_val=128):
    # blur to reduce noise (helps Otsu)
    blurred = cv2.GaussianBlur(gray, (5,5), 0)

    if mode == "otsu":
        # Otsu automatically finds a threshold
        _, mask = cv2.threshold(blurred, 0, 255, cv2.THRESH_BINARY + cv2.THRESH_OTSU)
        used_thr = int(_)
    else:
        # manual numeric threshold
        thr = int(manual_val)
        _, mask = cv2.threshold(blurred, thr, 255, cv2.THRESH_BINARY)
        used_thr = thr

    return mask, used_thr

def save_mask(mask, out_path):
    # mask is 0/255 single channel
    cv2.imwrite(out_path, mask)

def compute_stats(mask):
    total = int(mask.size)  # total number of pixels
    white = int(np.count_nonzero(mask == 255))
    black = total - white
    white_pct = (white / total) * 100.0
    black_pct = (black / total) * 100.0
    return {"total_pixels": total, "white_pixels": white, "black_pixels": black,
            "white_pct": white_pct, "black_pct": black_pct}

def main():
    # args: glacier img1 img2 mode(optional) manual_thr(optional)
    # We'll expect: python3 cv/analyze.py public/glaciers/gangotri/2000.jpg public/glaciers/gangotri/2025.jpg gangotri otsu
    if len(sys.argv) < 4:
        print(json.dumps({"error":"usage: analyze.py <img1> <img2> <glacier_name> [mode] [manual_thr]"}))
        sys.exit(1)

    img1_path = sys.argv[1]
    img2_path = sys.argv[2]
    glacier = sys.argv[3]

    
    if len(sys.argv) >= 5:
        mode = sys.argv[4]
    else:
        mode = "otsu"
    if len(sys.argv) >= 6:
        manual_thr = sys.argv[5]  
    else: 
        manual_thr = "128"

    out_folder = os.path.join("public", "analysis", glacier)
    ensure_dir(out_folder)

    try:
        orig1, gray1 = load_gray(img1_path)
        orig2, gray2 = load_gray(img2_path)
    except FileNotFoundError as e:
        print(json.dumps({"error": str(e)}))
        sys.exit(1)

    mask1, used1 = threshold_image(gray1, mode=mode, manual_val=manual_thr)
    mask2, used2 = threshold_image(gray2, mode=mode, manual_val=manual_thr)

    mask1_path = os.path.join(out_folder, "2000_mask.png")
    mask2_path = os.path.join(out_folder, "2025_mask.png")

    save_mask(mask1, mask1_path)
    save_mask(mask2, mask2_path)

    stats1 = compute_stats(mask1)
    stats2 = compute_stats(mask2)

    # shrinkage: relative to image1 (2000)
    if stats1["white_pct"] == 0:
        shrinkage_relative = None
    else:
        shrinkage_relative = ((stats1["white_pct"] - stats2["white_pct"]) / stats1["white_pct"]) * 100.0

    result = {
        "glacier": glacier,
        "method": {
            "threshold_mode": mode,
            "used_threshold_img1": used1,
            "used_threshold_img2": used2,
            "note": "mask: 255 = glacier (white), 0 = background (black)."
        },
        "image1": {
            "path": f"/analysis/{glacier}/2000_mask.png",
            "stats": stats1
        },
        "image2": {
            "path": f"/analysis/{glacier}/2025_mask.png",
            "stats": stats2
        },
        "shrinkage": {
            "absolute_pct_points": stats1["white_pct"] - stats2["white_pct"],
            "relative_shrinkage_percent": shrinkage_relative
        }
    }

    print(json.dumps(result))

if __name__ == "__main__":
    main()