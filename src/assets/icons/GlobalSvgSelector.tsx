import React from "react";

interface GlobalSvgSelectorProps {
  id: string;
}

const GlobalSvgSelector: React.FC<GlobalSvgSelectorProps> = ({ id }) => {
  switch (id) {
    case "x":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
          <rect width="100%" height="100%" fill="none" />
          <g className="currentLayer">
            <path
              fill="none"
              stroke="#000"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1.164 4.506 4.55 1.083 8.144 4.72l3.595-3.637 3.384 3.423-3.595 3.638 3.595 3.637-3.384 3.424-3.595-3.637-3.595 3.637-3.385-3.424L4.76 8.144 1.164 4.506z"
              color="#000"
            />
          </g>
        </svg>
      );
    case "check":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <g data-name="Layer 2">
            <path
              fill="#000000"
              d="M9.86 18a1 1 0 0 1-.73-.32l-4.86-5.17a1 1 0 1 1 1.46-1.37l4.12 4.39 8.41-9.2a1 1 0 1 1 1.48 1.34l-9.14 10a1 1 0 0 1-.73.33Z"
            />
          </g>
        </svg>
      );
    case "plus":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlSpace="preserve"
          viewBox="0 0 60.364 60.364"
        >
          <path d="m54.454 23.18-18.609-.002-.001-17.268a5.91 5.91 0 1 0-11.819 0v17.269L5.91 23.178a5.91 5.91 0 0 0 0 11.819h18.115v19.457a5.91 5.91 0 0 0 11.82.002V34.997h18.611a5.908 5.908 0 0 0 5.908-5.907 5.906 5.906 0 0 0-5.91-5.91z" />
        </svg>
      );
    default:
      return null;
  }
};

export default GlobalSvgSelector;
