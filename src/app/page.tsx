import { AboutSchool } from "@/container/Home/AboutSchool";
import { AboutUs } from "@/container/Home/AboutUs";
import { Accomodations } from "@/container/Home/Accomodations";
import { Courses } from "@/container/Home/Courses";
import { HomeTop } from "@/container/Home/Top";

export default function Home() {
  return (
    <main>
      <HomeTop />
      <AboutUs />
      <AboutSchool />
      <Courses />
      <Accomodations />
    </main>
  );
}