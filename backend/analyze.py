import cv2
import numpy as np
import base64


def load_gray(path: str):
    img = cv2.imread(path)
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    blurred = cv2.GaussianBlur(gray, (5, 5), 0)
    return blurred


def threshold_otsu(blurred):
    _, mask = cv2.threshold(
        blurred, 0, 255, cv2.THRESH_BINARY + cv2.THRESH_OTSU)
    return mask


def compute_stats(mask):
    total = int(mask.size)  # total number of pixels
    white = cv2.countNonZero(mask)
    black = total - white
    glacier_percentage = (white / total) * 100.0
    black_percentage = (black / total) * 100.0
    return {
        "glacier_percentage": glacier_percentage}


def mask_as_base64(mask):
    _, buffer = cv2.imencode('.png', mask)
    return base64.b64encode(buffer).decode('utf-8')


def analyze_glacier(path_2000: str, path_2025: str):
    img_2000 = load_gray(path_2000)
    img_2025 = load_gray(path_2025)

    mask_2000 = threshold_otsu(img_2000)
    mask_2025 = threshold_otsu(img_2025)

    stats_2000 = compute_stats(mask_2000)
    stats_2025 = compute_stats(mask_2025)

    shrinkage = stats_2000["glacier_percentage"] - \
        stats_2025["glacier_percentage"]

    return {"shrinkage": shrinkage,
            "mask_2000": mask_as_base64(mask_2000),
            "mask_2025": mask_as_base64(mask_2025),
            "stats_2000": stats_2000,
            "stats_2025": stats_2025
            }
