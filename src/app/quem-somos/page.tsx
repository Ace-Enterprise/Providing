import React from "react";

import "./style.scss";
import { Top } from "@/container/AboutUs/Top";
import { Mission } from "@/container/AboutUs/Mission";
import { Unique } from "@/container/AboutUs/Unique";

export default function AboutUsPage() {
  return (
    <main>
      <Top />
      <Mission />
      <Unique />
    </main>
  );
}
