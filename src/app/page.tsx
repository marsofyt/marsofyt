import { AboutCompany } from "@/components/AboutCompany";
import Footer from "@/components/Footer";
import { About } from "@/components/Home";
import { OurService } from "@/components/OurService";
import { SendMessage } from "@/components/SendMessage";
import { Technology } from "@/components/Technology";

export default function Home() {
  return (
    <div>
      <About />
      <AboutCompany />
      <OurService />
      <Technology />
      <SendMessage />
      <Footer />
    </div>
  );
}
