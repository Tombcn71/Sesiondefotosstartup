"use client";
import React from "react";
import first from "/public/first.png";
import second from "/public/second.png";

import {
  ReactCompareSlider,
  ReactCompareSliderImage,
  useReactCompareSliderRef,
} from "react-compare-slider";

export default function props() {
  return (
    <div style={{ width: "100%", height: "100%", flexGrow: 1 }}>
      <ReactCompareSlider
        itemOne={<ReactCompareSliderImage src="/first.png" alt="Image one" />}
        itemTwo={<ReactCompareSliderImage src="/second.png" alt="Image two" />}
        style={{ width: "100%", height: "50vh" }}
      />
    </div>
  );
}
