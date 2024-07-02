import React from "react";

import { FaLightbulb } from "react-icons/fa";
import ThemeToggleButton from "../Theme/ThemeToggleButton";

export default function Navbar() {
  return (
    <div className="relative z-[3]  w-full">
      <div className="flex justify-end w-full">
        <ThemeToggleButton />
      </div>
    </div>
  );
}
