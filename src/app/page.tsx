import { AboutCompany } from "@/components/AboutCompany";
import { About } from "@/components/Home";
import { OurService } from "@/components/OurService";

export default function Home() {
  return (
    <div>
      <About />
      <AboutCompany />
      <OurService />
    </div>
  );
}
