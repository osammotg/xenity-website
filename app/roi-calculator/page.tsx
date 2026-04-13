import type { Metadata } from "next";
import ROIClient from "./ROIClient";

export const metadata: Metadata = {
  title: "AI Cost Savings Calculator — Cloud AI vs Sovereign AI ROI",
  description:
    "Calculate how much you could save by switching from cloud AI APIs to Xinity's on-premise sovereign AI. Most enterprises save 3-5x.",
  alternates: { canonical: "https://xinity.ai/roi-calculator" },
};

export default function ROICalculatorPage() {
  return <ROIClient />;
}
