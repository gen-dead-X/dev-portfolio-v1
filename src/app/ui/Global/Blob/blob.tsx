"use client";

import React, { useEffect } from "react";
import "./_blob.module.scss";

export default function Blob() {
  useEffect(() => {
    const blob = document.createElement("div");
    blob.className = "blob";
    document.body.appendChild(blob);

    console.log("Rendered");
  }, []);

  return <></>;
}
