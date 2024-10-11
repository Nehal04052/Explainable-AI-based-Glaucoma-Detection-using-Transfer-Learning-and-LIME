// src/components/ResultsPage.jsx
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import RenderResult from "./RenderResult"; // Make sure this path is correct

const ResultsPage = () => {
  const location = useLocation();
  const { result, images, isLoading } = location.state || { result: null, images: null, isLoading: false };

  useEffect(() => {
    if (!result) {
      // Redirect to the main page if there's no result
      window.location.href = '/'; // Adjust this to your main page route if needed
    }
  }, [result]);

  return (
    <div>
      <h1>Prediction Results</h1>
      <RenderResult result={result} images={images} isLoading={isLoading} />
    </div>
  );
};

export default ResultsPage;
