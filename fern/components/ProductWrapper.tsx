"use client";

import { useEffect, useState } from "react";

interface ProductWrapperProps {
  notAllowed?: string[];
  product?: string[];
  children: React.ReactNode;
}

export const ProductWrapper = ({
  notAllowed = [],
  product = [],
  children,
}: ProductWrapperProps) => {
  const [productName, setProductName] = useState<string | undefined>(undefined);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const match = window.location.pathname.match(/^\/([^/]+)/);
    setProductName(match ? match[1] : undefined);
    setMounted(true);
  }, []);

  // Render nothing until mounted to avoid SSR mismatch
  if (!mounted) return null;

  if (product.length && !product.includes(productName ?? "")) return null;
  if (notAllowed.includes(productName ?? "")) return null;

  return <>{children}</>;
};