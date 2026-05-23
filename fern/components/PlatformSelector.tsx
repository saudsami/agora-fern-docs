"use client";

import { useEffect, useState } from "react";

interface Platform {
  label: string;
  value: string;
}

interface PlatformSelectorProps {
  platforms: Platform[];
  basePath: string;
}

export const PlatformSelector = ({ platforms, basePath }: PlatformSelectorProps) => {
  const [selected, setSelected] = useState<string>("");

  useEffect(() => {
    // Check if we're already on a platform page
    const current = window.location.pathname.split("/").pop() ?? "";
    const match = platforms.find((p) => p.value === current);

    if (match) {
      // We're on a platform page, sync the dropdown to current platform
      setSelected(match.value);
      localStorage.setItem("selectedPlatform", match.value);
    } else {
      // We're on the index page, restore last selection or default to first
      const stored = localStorage.getItem("selectedPlatform") ?? "";
      const storedMatch = platforms.find((p) => p.value === stored);
      setSelected(storedMatch ? storedMatch.value : "");
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelected(value);
    localStorage.setItem("selectedPlatform", value);
    window.location.href = `${basePath}/${value}`;
  };

  return (
    <div style={{ marginBottom: "1.5rem" }}>
      <label
        htmlFor="platform-select"
        style={{ marginRight: "0.5rem", fontWeight: 500 }}
      >
        Select platform:
      </label>
      <select
        id="platform-select"
        value={selected}
        onChange={handleChange}
        style={{
          padding: "0.4rem 0.75rem",
          borderRadius: "6px",
          border: "1px solid var(--border-default)",
          backgroundColor: "var(--background-default)",
          color: "var(--text-default)",
          fontSize: "0.9rem",
          cursor: "pointer",
        }}
      >
        <option value="" disabled>Select a platform</option>
        {platforms.map((p) => (
          <option key={p.value} value={p.value}>
            {p.label}
          </option>
        ))}
      </select>
    </div>
  );
};