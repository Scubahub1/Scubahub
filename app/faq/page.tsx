import React from "react";
import SectionTitle from "../../components/ui/SectionTitle";
import FAQAccordion from "../../components/FAQAccordion";
import { faqs } from "../../data/mockData";

export const metadata = {
  title: "FAQ | Scuba Hub Adventures",
  description: "Frequently asked questions about diving at Netrani Island.",
};

export default function FAQPage() {
  return (
    <div className="pt-32 pb-20 container mx-auto px-4 min-h-screen">
      <SectionTitle
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about your upcoming dive trip."
      />
      <div className="max-w-3xl mx-auto">
        <FAQAccordion faqs={faqs} />
      </div>
    </div>
  );
}
