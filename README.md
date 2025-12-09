## Demo

https://github.com/user-attachments/assets/9aeb57fa-03d1-47dd-9196-539b7045d6df

## Introduction

The Glacier Shrinkage Analyzer - GlacierTrack is a webapp that calculates the shrinkage of Himalayan Glacier over year 2000 and 2025. Users can select Glacier, view its Satellite (Landsat 7, Landsat 9, Sentinel-2 L2A) image, and find shrinkage stats by clicking on Analyze Shrinkage button.
The shrinkage is calculated by thresholding(otsu) and other image processing techniques to make it more precise. 

## [Frontend](https://glacier-shrinkage-analyzer.vercel.app/)

The frontend([source code](https://github.com/SakshiGits/GlacierShrinkageAnalyzer)) is built completely on Next.js, styled with Tailwind.css, deployed on [vercel](https://glacier-shrinkage-analyzer.vercel.app/). The frontend takes the user input of glacier selected, outputs the satellite images of that glacier from 2000 and 2025, sends the data of glacier and image data in post request to our backend ([source code](https://github.com/SakshiGits/GlacierShrinkageAnalyzer-backend)), then outputs the response generated from it.

## [Backend](https://glaciershrinkageanalyzer-backend.onrender.com)

The backend([source code](https://github.com/SakshiGits/GlacierShrinkageAnalyzer-backend)) is written on OpenCV-python for image processing and shrinkage analysis, the API is built on FastAPI, has been dockerized and deployed on [render](https://glaciershrinkageanalyzer-backend.onrender.com). The API recieves the glacier and images raw data in formData, saves them in a temporary file to be used by opencv, applies the analyze dhrinkage function, and returns the response back to the frontend. The Analyze function written in opencv takes two images, turns then into grayscale, applies gaussian blur and then applies threshold using otsu algorithm. The white pixels are calulated in both images to determine the glacier coverage in both years 2000 and 2025, they are then changed to percentages and the shrinkage percentage is found by substraction the percentages from both years. This functions returns the shrinkage data, the mask from thresholding and the coverage of glacier in both images.
