import Home from "@/components/Home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "G3 | G3-PC E-commerce",
  description: "This is Home for G3 PC",
  // other metadata
};

export default function HomePage() {
  return (
    <>
      <Home />
    </>
  );
}
