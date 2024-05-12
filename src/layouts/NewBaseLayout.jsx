import React from "react";

// Pass the child props
export default function Layout({ children }) {
  return (
    <div>
      <div>This is the page housing all "scholarships" related content</div>
      <br/>
      {children}

    </div>
  );
}