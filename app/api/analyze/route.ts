import { NextResponse } from "next/server";
import { spawn } from "child_process";
import path from "path";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const glacier = body.glacier;
    const mode = body.mode || "otsu"; // always Otsu for simplicity

    if (!glacier) {
      return NextResponse.json({ error: "Glacier not specified" }, { status: 400 });
    }

    // Construct image paths
    const img1 = path.join(process.cwd(), "public", "glaciers", glacier, "2000.png");
    const img2 = path.join(process.cwd(), "public", "glaciers", glacier, "2025.png");

    // Spawn Python script
    const pythonCmd = process.platform === "win32" ? "py" : "python3"; // Windows or Linux/Mac
    const py = spawn(pythonCmd, ["cv/analyze.py", img1, img2, glacier, mode], {
      cwd: process.cwd(),
    });

    let stdout = "";
    let stderr = "";

    py.stdout.on("data", (data) => {
      stdout += data.toString();
    });

    py.stderr.on("data", (data) => {
      stderr += data.toString();
      console.error("Python error:", data.toString());
    });

    const exitCode: number = await new Promise((resolve, reject) => {
      py.on("close", resolve);
      py.on("error", reject);
    });

    if (exitCode !== 0) {
      return NextResponse.json(
        { error: "Python script failed", details: stderr },
        { status: 500 }
      );
    }

    // Parse Python JSON output
    const result = JSON.parse(stdout);
    return NextResponse.json(result);
  } catch (err: any) {
    console.error("API error:", err);
    return NextResponse.json(
      { error: "Internal server error", details: err.message },
      { status: 500 }
    );
  }
}