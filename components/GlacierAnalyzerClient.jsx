"use client";
import Image from "next/image";
import { useState } from "react";

export default function GlacierAnalyzerClient({ selectedGlacier }) {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  async function handleAnalyze() {
    setLoading(true);
    const formData = new FormData();
    formData.append("glacier", selectedGlacier);

    // Load images from public/glaciers
    const image2000 = await fetch(`/glaciers/${selectedGlacier}/2000.png`);
    const blob2000 = await image2000.blob();
    formData.append("image_2000", blob2000, `${selectedGlacier}_2000.png`);

    const image2025 = await fetch(`/glaciers/${selectedGlacier}/2025.png`);
    const blob2025 = await image2025.blob();
    formData.append("image_2025", blob2025, `${selectedGlacier}_2025.png`);

    // Send to backend
    const response = await fetch("https://huggingface.co/spaces/Sakshishaw/glacier-backend/analyze", {
      method: "POST",
      body: formData
    });

    if (!response.ok) {
      console.error(`HTTP error! Status: ${response.status}`);
      setResult(null);
      setLoading(false);
      return;
    }

    const data = await response.json();
    setResult(data);
    setLoading(false);
  }

  return (
    <div className="mt-8 pb-8 px-6">
      {/* Analyze Button */}
      {selectedGlacier && (
        <button
          onClick={handleAnalyze}
          disabled={loading || !selectedGlacier}
          className="box-border relative z-30 inline-flex items-center justify-center px-10 py-3 
                     font-bold text-white bg-indigo-900 rounded-md cursor-pointer 
                     ring-offset-2 ring-2 ring-indigo-300 hover:ring-offset-indigo-500 
                     transition-all duration-300"
        >
          Analyze Shrinkage
        </button>
      )}

      {/* Results Section */}
      {loading && <p className="mt-10 text-gray-700">Analyzing... Please wait.</p>}

      {result && !loading && (
        <div className="mt-10 flex flex-col gap-8">
          {/* Masks */}
          <div className="flex flex-row gap-10">
            <div className="flex flex-col">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Year 2000</h3>
              <Image
                src={`data:image/png;base64,${result.mask_2000}`}
                alt="Mask 2000"
                width={400}
                height={400}
              />
            </div>

            <div className="flex flex-col">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Year 2025</h3>
              <Image
                src={`data:image/png;base64,${result.mask_2025}`}
                alt="Mask 2025"
                width={400}
                height={400}
              />
            </div>
          </div>

          {/* Stats */}
          <div className="w-full bg-white p-6 rounded-lg shadow max-w-lg">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">
              Glacier Statistics
            </h2>

            <p className="text-gray-700 mb-1">
              <span className="font-medium">Coverage (2000):</span>{" "}
              {result.stats_2000.glacier_percentage.toFixed(2)}%
            </p>

            <p className="text-gray-700 mb-4">
              <span className="font-medium">Coverage (2025):</span>{" "}
              {result.stats_2025.glacier_percentage.toFixed(2)}%
            </p>

            <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg text-center">
              <p className="text-lg font-semibold text-blue-700">
                Shrinkage: {result.shrinkage.toFixed(2)}%
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}