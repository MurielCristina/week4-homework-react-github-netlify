import React from "react";

import Designer from "./images/Designer.png";

import "@fontsource/lily-script-one";

export default function Header() {
  return (
    <div className="header">
      <img src={Designer} alt="Muri logo" />
      <h1>Muri</h1>
    </div>
  );
}
