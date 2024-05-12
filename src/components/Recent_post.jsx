import React from "react";

// Pass the child props
export default function Layout({ children }) {
  return (
    <div>
      <div class="font-bold text-2xl py-10">Scholarship</div>
      <br/>
      {children}

    </div>
  );
}