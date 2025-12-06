import type { Metadata } from "next";
import PackagesClient from "./PackagesClient";

export const metadata: Metadata = {
  title: "Dive Packages | Scuba Hub Adventures",
  description:
    "All-inclusive dive packages at Netrani Island including accommodation and gear.",
};

export default function PackagesPage() {
  return <PackagesClient />;
}
