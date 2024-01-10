import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h2>header for Harshit</h2>
      {children}
      <h3>Footer for harshit</h3>
    </div>
  );
}
