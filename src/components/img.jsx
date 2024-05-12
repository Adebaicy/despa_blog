import React from "react";
import img from "./img/blog.png";
// Pass the child props
export default function Layout() {
  return (
    <div className="relative h-full">
      <img className="bottom-0 absolute" src={img.src} alt="m" />
    </div>
  );
}
