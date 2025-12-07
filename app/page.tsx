'use client';

import React from 'react'
import { useState } from 'react'
import './globals.css'
import Dropdown from '@/components/Dropdown'
import GlacierAnalyzerClient from '@/components/GlacierAnalyzerClient'


const page = () => {
  const [selectedGlacier, setSelectedGlacier] = useState("");
  return (
    <div>
      <div className="flex flex-col justify-center items-justify p-7">
        <h1 className="gradient-text text-[3rem] font-extrabold tracking-tight">Satellite images of himalayan glaciers <br /></h1><h2 className='text-[1rem] font-extrabold tracking-tight text-[#556f7d]'> have revealed alarming recession over the past 25 years. <br /> Use this tool to analyze the glacier area retreat between 2000 and 2025.</h2>
      </div >
      <Dropdown selectedGlacier={selectedGlacier} setSelectedGlacier={setSelectedGlacier} />
      <GlacierAnalyzerClient selectedGlacier={selectedGlacier} />
    </div>
  )
}

export default page