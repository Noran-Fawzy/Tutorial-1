import React, { useState } from "react";
import step1Img from "../assets/tutorial-1.png";
import step2Img from "../assets/tutorial-2.png";
import step3Img from "../assets/tutorial-3.png";
import step4Img from "../assets/tutorial-4.png";
import step5Img from "../assets/tutorial-5.png";
import "./Tutorial.css";

export default function Tutorial() {
  const steps = [
    { image: step1Img },
    { image: step2Img },
    { image: step3Img },
    { image: step4Img },
    { image: step5Img },
  ];

  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < steps.length - 1) setCurrentStep(prev => prev + 1);
    else window.location.href = "/game";
  };

  const handlePrev = () => {
    if (currentStep > 0) setCurrentStep(prev => prev - 1);
  };

  const { image } = steps[currentStep];

  return (
    <div className="tutorial-page">
      <div className="tutorial-content">
        <div className="tutorial-image-container">
          <img src={image} alt="Tutorial step" className="tutorial-image" />
        </div>
      </div>

      <div className="tutorial-controls">
        <button onClick={handlePrev} disabled={currentStep === 0}>Previous</button>
        <button onClick={handleNext}>
          {currentStep === steps.length - 1 ? "Start Game " : "Next "}
        </button>
      </div>
    </div>
  );
}