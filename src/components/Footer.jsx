import React from "react";
import "./App.css";

// Pass the child props
export default function Layout() {
  return (
    <div className="">
      {/* <div className="grid grid-cols-2 gap-4"> */}
      <div className="flow-root">
        <div className="md:float-right">
          <p className="pref1">Categories</p>
          <p className="pref3"> Job</p>
          <p className="pref3">Health</p>
          <p className="pref3">Education</p>
        </div>

        <div className="pref1 md:float-left">
          <p>Contact us</p>
          <p className="pref text-3xl">hello@despablog.com</p>
          <br />
        </div>
      </div>

      <div className="w-full">
        {/* <p className="pref2 tracking-[.4em] text-justify text-9xl">
          #despablog
        </p> */}
      </div>
    </div>
  );
}
