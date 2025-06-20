import { AboutCompany } from "@/components/AboutCompany";
import { About } from "@/components/Home";
import { OurService } from "@/components/OurService";
import { Technology } from "@/components/Technology";

export default function Home() {
  return (
    <div>
      <About />
      <AboutCompany />
      <OurService />
      <Technology />
    </div>
  );
}
