import React from "react";

export default function Image({ src, alt, onClick }) {
  return <img src={src} alt={alt} onClick={onClick} />;
}
