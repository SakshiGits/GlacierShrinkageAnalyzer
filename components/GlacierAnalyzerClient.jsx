"use client";

export default function GlacierAnalyzerClient({ selectedGlacier }) {
  async function handleAnalyze() {
    const formData = new FormData();
    formData.append("glacier", selectedGlacier);

    const image2000 = await fetch(`/glaciers/${selectedGlacier}/2000.png`);
    const blob2000 = await image2000.blob();
    formData.append("image_2000", blob2000, `${selectedGlacier}_2000.png`);

    const image2025 = await fetch(`/glaciers/${selectedGlacier}/2025.png`);
    const blob2025 = await image2025.blob();
    formData.append("image_2025", blob2025, `${selectedGlacier}_2025.png`);

    const response = await fetch("http://127.0.0.1:8000/analyze", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    console.log("Result:", data);
  }

  return (
    <div className="mt-8">
      <button
        onClick={handleAnalyze}
        disabled={!selectedGlacier}
        className="bg-blue-600 text-white px-4 py-2 rounded disabled:bg-gray-400"
      >
        Analyze Shrinkage
      </button>
    </div>
  );
}