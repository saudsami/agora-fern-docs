"use client";

import { useEffect, useState } from "react";

interface PlatformWrapperProps {
  platform?: string[];
  notAllowed?: string[];
  children: React.ReactNode;
  [key: string]: unknown;
}

export const PlatformWrapper = ({
  platform = [],
  notAllowed = [],
  children,
  ...props
}: PlatformWrapperProps) => {
  const [selectedPlatform, setSelectedPlatform] = useState<string>("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("selectedPlatform") ?? "";
    setSelectedPlatform(stored);
    setMounted(true);
  }, []);

  if (!mounted) return null;

  if (platform.length && !platform.includes(selectedPlatform)) return null;
  if (notAllowed.includes(selectedPlatform)) return null;

  return <div {...props}>{children}</div>;
};