import React from "react";
import img from "./img/blog.png";
// Pass the child props
export default function Layout() {
  return (
    <div className="md:relative md:h-full">
      <img className="md:bottom-0 md:absolute" src={img.src} alt="m" />
    </div>
  );
}
