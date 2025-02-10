import { AboutSchool } from "@/container/Home/AboutSchool";
import { AboutUs } from "@/container/Home/AboutUs";
import { Accomodations } from "@/container/Home/Accomodations";
import { Contact } from "@/container/Home/Contact";
import { Courses } from "@/container/Home/Courses";
import { Download } from "@/container/Home/Download";
import { HomeTop } from "@/container/Home/Top";

export default function Home() {
  return (
    <main>
      <HomeTop />
      <AboutUs />
      <AboutSchool />
      <Courses />
      <Accomodations />
      <Download />
      <Contact />
    </main>
  );
}