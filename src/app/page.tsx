import { AboutSchool } from "@/container/Home/AboutSchool";
import { AboutUs } from "@/container/Home/AboutUs";
import { HomeTop } from "@/container/Home/Top";

export default function Home() {
  return (
    <main>
      <HomeTop />
      <AboutUs />
      <AboutSchool />
    </main>
  );
}