import React from "react";
import Dropdown from "./components/Dropdown";

export default function App() {
  const options = [
    { label: "red", value: "red" },
    { label: "green", value: "green" },
    { label: "blue", value: "blue" },
  ];

  return (
    <div>
      <Dropdown options={options} />
    </div>
  );
}
