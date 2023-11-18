import ScrollUp from "@/components/Common/ScrollUp";
import Features from "@/components/Features";
import { Metadata } from "next";
import Hero from "@/components/Hero";
export const metadata: Metadata = {
  title: "NSG PoS App",
  description: "Website for NSG PoS and Billing App",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
    </>
  );
}
