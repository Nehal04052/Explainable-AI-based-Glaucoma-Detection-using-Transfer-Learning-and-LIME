// src/components/RenderResult.jsx
import React from 'react';
import safe from "../../assets/img/safe.png";
import warning from "../../assets/img/warning.png";
import danger from "../../assets/img/danger.png";
import detection from "../../assets/img/detection.png";
import loading from "../../assets/img/loading.png";

// eslint-disable-next-line react/prop-types
function RenderResult({ result, images, isLoading }) {
  if (!result || isNaN(result)) {
    if (isLoading) return <img src={loading} alt="loading" id="loader" />;
    return (
      <img src={detection} alt='detection image' style={{ width: "100%" }} />
    );
  }

  let img, description;
  const floatResult = parseFloat(result);

  if (floatResult <= 0.4) img = { name: "Safe", src: safe };
  else if (floatResult <= 0.7) img = { name: "Warning", src: warning };
  else img = { name: "Danger", src: danger };

  switch (img.name) {
    case "Safe":
      description = `Your eye is in good condition. You are safe. Keep it up.`;
      break;
    case "Warning":
      description = `Your eye is in warning condition. Please consult with a doctor as soon as possible.`;
      break;
    case "Danger":
      description = `Your eye is in danger condition. Please consult with a doctor immediately.`;
      break;
    default:
      description = `Something went wrong. Please try again.`;
  }

  return (
    <>
      <img src={img.src} alt={`${img.name} image`} />
      <h2>
        Status: <b>{img.name}</b>
      </h2>
      <h2>
        Probability of Glaucoma: <b>{Math.round(floatResult * 1000) / 10}%</b>
      </h2>
      <p>{description}</p>
      <h3>LIME Explanations:</h3>
      {images && (
        <div>
          <h4>Original Image</h4>
          <img src={images.original_image} alt="Original" style={{ width: "100%" }} />
          <h4>Superpixels Image</h4>
          <img src={images.superpixels_image} alt="Superpixels" style={{ width: "100%" }} />
          <h4>LIME Explanation</h4>
          <img src={images.lime_explanation} alt="LIME Explanation" style={{ width: "100%" }} />
          <h4>LIME Positive Contributions</h4>
          <img src={images.lime_positive} alt="LIME Positive Contributions" style={{ width: "100%" }} />
        </div>
      )}
    </>
  );
}

export default RenderResult;
