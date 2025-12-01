import React from "react";

interface SchemaMarkupProps {
  type?: "Organization" | "LocalBusiness" | "WebSite";
  pageUrl?: string;
}

const SchemaMarkup: React.FC<SchemaMarkupProps> = ({
  type = "LocalBusiness",
  pageUrl = "https://scubahub.com",
}) => {
  const organizationSchema: any = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Scuba Hub Adventures",
    url: "https://scubahub.com",
    logo: "https://scubahub.com/logo.png",
    description:
      "Premium scuba diving operators specializing in Netrani Island adventures. Safety, fun, and marine conservation are our core values.",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-98765-43210",
      contactType: "Customer Service",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi", "Kannada"],
    },
    sameAs: [
      "https://www.instagram.com/scubahub",
      // Add your social media links here
    ],
  };

  const localBusinessSchema: any = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://scubahub.com",
    name: "Scuba Hub Adventures",
    image: "https://scubahub.com/og-image.jpg",
    description:
      "Experience world-class scuba diving at Netrani Island with Scuba Hub Adventures. PADI certified courses, fun dives, and underwater exploration in Karnataka, India.",
    url: "https://scubahub.com",
    telephone: "+91-98765-43210",
    email: "dive@scubahub.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Temple Road",
      addressLocality: "Murudeshwar",
      addressRegion: "Karnataka",
      postalCode: "581350",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "14.0167",
      longitude: "74.4833",
    },
    priceRange: "$$",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "06:00",
      closes: "18:00",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "127",
    },
    areaServed: {
      "@type": "City",
      name: "Netrani Island",
    },
  };

  const websiteSchema: any = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Scuba Hub Adventures",
    url: "https://scubahub.com",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://scubahub.com/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  const serviceSchema: any = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Scuba Diving Tours",
    provider: {
      "@type": "LocalBusiness",
      name: "Scuba Hub Adventures",
    },
    areaServed: {
      "@type": "Place",
      name: "Netrani Island, Karnataka, India",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Scuba Diving Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Discover Scuba Diving",
            description: "Introduction to scuba diving for beginners",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "PADI Open Water Course",
            description: "PADI certified scuba diving course",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Fun Dives",
            description: "Recreational scuba diving for certified divers",
          },
        },
      ],
    },
  };

  let schema: any = organizationSchema;
  if (type === "LocalBusiness") {
    schema = localBusinessSchema;
  } else if (type === "WebSite") {
    schema = websiteSchema;
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  );
};

export default SchemaMarkup;
