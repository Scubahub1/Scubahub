import React, { useEffect } from "react";
import { usePathname } from "../../lib/next-shim";

const CanonicalUrl: React.FC = () => {
  const pathname = usePathname();
  const baseUrl = "https://scubahub.com";
  const canonicalUrl = `${baseUrl}${pathname === "/" ? "" : pathname}`;

  useEffect(() => {
    // Remove existing canonical link if any
    const existingCanonical = document.querySelector('link[rel="canonical"]');
    if (existingCanonical) {
      existingCanonical.remove();
    }

    // Add new canonical link
    const link = document.createElement("link");
    link.rel = "canonical";
    link.href = canonicalUrl;
    document.head.appendChild(link);
  }, [canonicalUrl]);

  return null;
};

export default CanonicalUrl;
