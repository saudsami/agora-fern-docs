"use client";

import { useEffect, useState } from "react";

const KNOWN_PLATFORMS = [
  "android", "flutter", "ios", "web",
  "macos", "windows", "unity", "electron",
  "react-native", "react-js"
];

type PlatformProp = string | string[];

interface PlatformWrapperProps {
  platform?: PlatformProp;
  notAllowed?: PlatformProp;
  children: React.ReactNode;
}

const toArray = (val: PlatformProp | undefined): string[] => {
  if (!val) return [];
  return Array.isArray(val) ? val : [val];
};

export const PlatformWrapper = ({
  platform,
  notAllowed,
  children,
}: PlatformWrapperProps) => {
  const [selectedPlatform, setSelectedPlatform] = useState<string | undefined>(undefined);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const segments = window.location.pathname.split("/").filter(Boolean);
    const match = segments.find(seg =>
      KNOWN_PLATFORMS.includes(seg.toLowerCase())
    );
    setSelectedPlatform(match ?? "");
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const platformList = toArray(platform);
  const notAllowedList = toArray(notAllowed);

  if (platformList.length && !platformList.includes(selectedPlatform ?? "")) return null;
  if (notAllowedList.includes(selectedPlatform ?? "")) return null;

  return <>{children}</>;
};