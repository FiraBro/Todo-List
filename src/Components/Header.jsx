import React from "react";

const body = document.querySelector(".body");
console.log(body);
function ChangeColor() {
  body.classList.toggle("background");
}

export default function Header() {
  return (
    <div className="header">
      <h1 className="header-head">
        THIS THE TODO LIST WEB APP THAT HAVE MANY FUNCTIONALITY THAT YOU NEED 💪
      </h1>
      <button className="back-btn" onClick={ChangeColor}>Change Background Color 🌙🗣️</button>
    </div>
  );
}
