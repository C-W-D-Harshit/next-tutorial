import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <div>
      Page
      {/* <a href="/harshit">Click me to go back to harshit</a> */}
      <Link href="/harshit">Click me to go back to harshit</Link>
    </div>
  );
}
