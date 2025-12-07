"use client";

export default function GlacierAnalyzerClient({ selectedGlacier }) {
  const handleAnalyze = () => {
    console.log("Analyzing shrinkage for glacier:", selectedGlacier);

    // later this will POST to FastAPI
  };

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