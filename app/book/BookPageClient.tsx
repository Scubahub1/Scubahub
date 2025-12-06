import type { Metadata } from "next";
import BookPageClient from "./BookPageClient";

export const metadata: Metadata = {
  title: "Book Your Dive | Scuba Hub Adventures",
  description:
    "Send a booking request for scuba diving at Netrani Island via WhatsApp. Quick, simple, and secure.",
};

export default function BookPage() {
  return <BookPageClient />;
}
