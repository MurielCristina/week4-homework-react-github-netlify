import React from "react";

import Designer from "./images/Designer.png";

export default function Header() {
  return (
    <div className="logo">
      <img src={Designer} alt="Muri logo" />
      <h1>Muri</h1>
    </div>
  );
}
