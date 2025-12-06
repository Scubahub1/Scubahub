"use client";

import React, { useEffect } from "react";
import { usePathname } from "next/navigation";

const CanonicalUrl: React.FC = () => {
  const pathname = usePathname();
  const baseUrl = "https://scubahub.com";
  const canonicalUrl = `${baseUrl}${pathname === "/" ? "" : pathname}`;

  useEffect(() => {
    // Update canonical link
    const existingCanonical = document.querySelector('link[rel="canonical"]');
    if (existingCanonical) {
      existingCanonical.setAttribute("href", canonicalUrl);
    } else {
      const link = document.createElement("link");
      link.rel = "canonical";
      link.href = canonicalUrl;
      document.head.appendChild(link);
    }
  }, [canonicalUrl, pathname]);

  return null;
};

export default CanonicalUrl;
