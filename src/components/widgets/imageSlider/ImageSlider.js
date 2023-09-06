import React, { useState } from "react";

export default function ImageSlider() {
  const [sliderValue, setSliderValue] = useState(0);

  const handleMouseMove = (e) => {
    const slider = e.target;
    const sliderWidth = slider.offsetWidth;
    const offsetX = e.nativeEvent.offsetX;
    const newValue = Math.round((offsetX / sliderWidth) * 100);
    setSliderValue(newValue);
  };

  return (
    <div className="image-slider-container">
      <div className="widget-info-wrapper">
        <h2>Image Slider</h2>
        <h4>Hover mouse over image from one side to another</h4>
      </div>

      <div className="image-slider-wrapper">
        <div className="img background-img"></div>
        <div
          className="img foreground-img"
          style={{ width: `${sliderValue}%` }}
        ></div>

        <input
          id="slider"
          type="range"
          min="0"
          max="100"
          value={sliderValue}
          onMouseMove={handleMouseMove}
        />
      </div>
    </div>
  );
}
