"use client";

import { useState } from "react";
import Image from "next/image";

export default function GlacierAnalyzerClient() {
  const glaciers = ["gangotri", "siachen", "zemu"]; // lowercase folders
  const [selectedGlacier, setSelectedGlacier] = useState("");
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(false);
  const [mode, setMode] = useState("otsu"); // "otsu" or "manual"
  const [manualThr, setManualThr] = useState(128);

  const analyze = async () => {
    if (!selectedGlacier) return alert("Select a glacier first");
    setLoading(true);
    setAnalysis(null);

    const res = await fetch("/api/analyze", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ glacier: selectedGlacier, mode, manual_thr: String(manualThr) })
    });

    const data = await res.json();
    setAnalysis(data);
    setLoading(false);
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-3">Select the Glacier to analyze the Shrinkage</h2>

      <div className="mb-4">
        <select value={selectedGlacier} onChange={(e) => setSelectedGlacier(e.target.value)} className="border pr-16 pl-3.5 py-3 font-bold text-black bg-blue-200 rounded-md">
          <option value="">Select a glacier</option>
          {glaciers.map(g => <option key={g} value={g}>{g.charAt(0).toUpperCase() + g.slice(1)}</option>)}
        </select>
      </div>

      <div className="mb-4 flex items-center gap-4">
        <label>
          <input type="radio" checked={mode === "otsu"} onChange={() => setMode("otsu")} /> Otsu (auto)
        </label>
        <label>
          <input type="radio" checked={mode === "manual"} onChange={() => setMode("manual")} /> Manual
        </label>
        {mode === "manual" && (
          <input type="number" value={manualThr} onChange={(e) => setManualThr(Number(e.target.value))} className="border p-1 w-20" />
        )}
      </div>

      <div className="mb-6">
        <button onClick={analyze} className="border pr-16 pl-3.5 py-3 font-bold text-black bg-blue-200 rounded-md" disabled={loading || !selectedGlacier}>
          {loading ? "Analyzing..." : "Analyze Shrinkage"}
        </button>
      </div>

      {analysis && analysis.error && (
        <div className="text-red-600">Error: {analysis.error}</div>
      )}

      {analysis && !analysis.error && (
        <div className="mt-6">
          <h3 className="font-semibold">Methodology & Results</h3>

          <div className="mt-3">
            <strong>Thresholding method:</strong> {analysis.method.threshold_mode} <br />
            <strong>Used thresholds:</strong> img1={analysis.method.used_threshold_img1}, img2={analysis.method.used_threshold_img2}
            <p className="text-sm text-gray-600 mt-1">{analysis.method.note}</p>
          </div>

          <div className="mt-4 flex gap-8">
            <div>
              <p className="font-semibold">Year 2000 mask</p>
              <img src={analysis.image1.path} alt="2000 mask" width={400} height={400} />
              {/* <p className="text-gray-500">White pixels: {analysis.image1.stats.white_pixels}</p> */}
              <p className="pt-3">Glacier area %: {analysis.image1.stats.white_pct.toFixed(4)}%</p>
            </div>

            <div>
              <p className="font-semibold">Year 2025 mask</p>
              <img src={analysis.image2.path} alt="2025 mask" width={400} height={400} />
              {/* <p>White pixels: {analysis.image2.stats.white_pixels}</p> */}
              <p className="pt-3">Glacier area %: {analysis.image2.stats.white_pct.toFixed(4)}%</p>
            </div>
          </div>

          <div className="mt-4 p-4 border rounded ">
            <h4 className="font-semibold pb-2">Shrinkage calculation</h4>
            <p className="pr-3">
              Absolute change in white percentage
              {/* <br />
              Δ = white_pct(2000) - white_pct(2025)
              <br /> */}
              {/* = {analysis.image1.stats.white_pct.toFixed(4)} - {analysis.image2.stats.white_pct.toFixed(4)}
              <br /> */}
              = {(analysis.image1.stats.white_pct - analysis.image2.stats.white_pct).toFixed(4)}%
            </p>

            <p className="mt-2 pr-3">
              Relative shrinkage
              {/* <br />
              shrinkage% = (Δ / white_pct(2000)) × 100
              <br /> */}
              = {((analysis.image1.stats.white_pct - analysis.image2.stats.white_pct) / analysis.image1.stats.white_pct * 100).toFixed(4)}%
            </p>
          </div>
        </div>
      )}
    </div>
  );
}