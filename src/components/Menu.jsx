

import React from "react";
import cry from "./img/cry.png";
import health from "./img/health.png";
import job from "./img/job.png";
import test from "./img/test.png";

// Pass the child props
export default function Layout() {
  return (
    <div>
      <div className="grid py-4 gap-4 grid-cols-3">
        <img src={cry.src} alt="m" />
        <img src={health.src} alt="m" />
        <img src={job.src} alt="m" />
      </div>
      <div className="grid gap-4 grid-cols-3">
        <img src={test.src} alt="m" />
        <img src={job.src} alt="m" />
        <img src={test.src} alt="m" />
      </div>
      <div>
      <p className="pt-8">04 Academic</p>
    <p className="pt-8">05 Entertainment</p>
      <p className="pt-8">06 Scholarship</p>
      </div>
    </div>
  );
}