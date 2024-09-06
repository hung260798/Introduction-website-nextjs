import React from "react";

export default function RotateBox({icon, title, desc}) {
  return (
    <a
      className="rotate-box-2 square-icon text-center wow zoomIn animated"
      data-wow-delay="0"
      style={{
        visibility: "visible",
        animationName: "zoomIn",
      }}
      href="#"
    >
      <span className="rotate-box-icon">
        <i className="fa fa-pie-chart"></i>
      </span>
      <div className="rotate-box-info">
        <h4>{title}</h4>  {/* *title */}
        <p>{desc}</p>  {/* description */}

      </div>
    </a>
  );
}
