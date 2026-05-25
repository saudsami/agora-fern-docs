"use client";

import { useEffect, useState } from "react";
import globalMap from "./variables/global-map";
import products from "./variables/product";
import platforms from "./variables/platform";
import { getDefaultPlatform, KNOWN_PRODUCTS } from "./data/products";

const KNOWN_PLATFORMS = [
  "android", "flutter", "ios", "web", "macos", "windows",
  "unity", "electron", "react-native", "react-js", "unreal", "blueprint",
  "linux-cpp", "linux-c", "linux-java", "python", "go"
];

function useCurrentProduct(): string {
  const [product, setProduct] = useState("");
  useEffect(() => {
    const segments = window.location.pathname.split("/").filter(Boolean);
    const match = segments.find(s => KNOWN_PRODUCTS.includes(s));
    setProduct(match ?? "");
  }, []);
  return product;
}

function useCurrentPlatform(): string {
  const [platform, setPlatform] = useState("");
  useEffect(() => {
    const segments = window.location.pathname.split("/").filter(Boolean);
    const foundProduct = segments.find(s => KNOWN_PRODUCTS.includes(s)) ?? "";
    const foundPlatform = segments.find(s => KNOWN_PLATFORMS.includes(s));
    setPlatform(foundPlatform ?? getDefaultPlatform(foundProduct));
  }, []);
  return platform;
}

export const Vg = ({ k }: { k: string }) => {
  const value = globalMap[k] ?? k;
  return <span dangerouslySetInnerHTML={{ __html: value }} />;
};

export const Vpd = ({ k }: { k: string }) => {
  const product = useCurrentProduct();
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;
  return <>{products[product]?.[k] ?? ""}</>;
};

export const Vpl = ({ k }: { k: string }) => {
  const platform = useCurrentPlatform();
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;
  return <>{platforms[platform]?.[k] ?? ""}</>;
};