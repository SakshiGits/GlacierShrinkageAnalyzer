"use client";

import { useState } from "react";
import Image from "next/image";

export default function GlacierDropdown() {
  const [selectedGlacier, setSelectedGlacier] = useState("");

  const glaciers = ["gangotri", "pindari", "zemu", "milam", "barashigri", "siachen"];

  return (
    <div className="p-5">
      <p className="font-bold mb-2 text-xl">Select the Glacier to view it's Satellite Image</p>
      {/* Dropdown */}
      <select
        value={selectedGlacier}
        onChange={(e) => setSelectedGlacier(e.target.value)}
        className="border pr-16 pl-3.5 py-3 font-bold text-black bg-blue-200 rounded-md"
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