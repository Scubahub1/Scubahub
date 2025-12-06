// app/courses/page.tsx
import type { Metadata } from "next";
import CoursesClient from "./CoursesClient";

export const metadata: Metadata = {
  title: "Scuba Certification Courses | Scuba Hub Adventures",
  description:
    "Become a certified PADI diver at Netrani Island. Open Water, Advanced, and Rescue courses available.",
};

export default function CoursesPage() {
  // This is a Server Component that just renders the client one
  return <CoursesClient />;
}
