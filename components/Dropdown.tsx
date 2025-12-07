"use client";

import { useState } from "react";
import Image from "next/image";

export default function GlacierDropdown({ selectedGlacier, setSelectedGlacier }: { selectedGlacier: string, setSelectedGlacier: (glacier: string) => void }) {

  const glaciers = ["gangotri", "pindari", "zemu", "milam", "barashigri", "siachen"];

  return (
    <div className="p-5">
      <p className="font-bold mb-2 text-[#6e99b0] text-xl pb-3">Select the Glacier to view it's Satellite Image and Analyze Shrinkage</p>
      {/* Dropdown */}
      <select
        value={selectedGlacier}
        onChange={(e) => setSelectedGlacier(e.target.value)}
        className="box-border relative z-30 inline-flex items-center justify-center w-auto px-10 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-indigo-900 rounded-md cursor-pointer group ring-offset-2 ring-2 ring-indigo-300 ring-offset-indigo-200 hover:ring-offset-indigo-500 ease focus:outline-none"
      >
        <option value="">Select a Glacier</option>

        {glaciers.map((g) => (
          <option key={g} value={g}>
            {g.charAt(0).toUpperCase() + g.slice(1)}
          </option>
        ))}
      </select>

      {/* Display images once a glacier is selected */}
      {selectedGlacier && (
        <div className="flex gap-10 mt-8">
          {/* Year 2000 */}
          <div>
            <p className="font-bold mb-2">Year 2000</p>
            <Image
              src={`/glaciers/${selectedGlacier}/2000.png`}
              alt="2000 glacier image"
              width={400}
              height={400}
            />
          </div>

          {/* Year 2025 */}
          <div>
            <p className="font-bold mb-2">Year 2025</p>
            <Image
              src={`/glaciers/${selectedGlacier}/2025.png`}
              alt="2025 glacier image"
              width={400}
              height={400}
            />
          </div>
        </div>
      )}
    </div>
  );
}