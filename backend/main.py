from fastapi import FastAPI, UploadFile, Form
from fastapi.middleware.cors import CORSMiddleware
import shutil
import os
from analyze import analyze_glacier

app = FastAPI()


# Allow frontend to talk to backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.post("/analyze")
async def analyze_endpoint(
    glacier: str = Form(...),
    image_2000: UploadFile = Form(...),
    image_2025: UploadFile = Form(...),
):
    # Create temp folder if not exists
    os.makedirs("temp", exist_ok=True)

    # Save images
    path_2000 = f"temp/{glacier}_2000.png"
    path_2025 = f"temp/{glacier}_2025.png"

    with open(path_2000, "wb") as buffer:
        shutil.copyfileobj(image_2000.file, buffer)
    with open(path_2025, "wb") as buffer:
        shutil.copyfileobj(image_2025.file, buffer)

    # Call analysis function
    result = analyze_glacier(path_2000, path_2025)

    return {"glacier": glacier,
            "mask_2000": result["mask_2000"],
            "mask_2025": result["mask_2025"],
            "stats_2000": result["stats_2000"],
            "stats_2025": result["stats_2025"],
            "shrinkage": result["shrinkage"]
            }
