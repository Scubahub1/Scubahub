import type { Metadata } from "next";
import GalleryClient from "./GalleryClient";

export const metadata: Metadata = {
  title: "Underwater Gallery | Scuba Hub Adventures",
  description:
    "Dive into our underwater photo gallery from Netrani Island dives.",
};

export default function GalleryPage() {
  return <GalleryClient />;
}
