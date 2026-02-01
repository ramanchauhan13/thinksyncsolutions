import Hero from "@/component/Hero";
import Services from "@/component/Services";
import Process from "@/component/Process";
import Stats from "@/component/Stats";
import WhyUs from "@/component/WhyUs";
import ContactUs from "@/component/ContactUs";
import Testimonials from "@/component/Testimonials";
import OurClients from "@/component/OurClients";

export default function Home() {
  return (
    <>
    {/* <Navbar /> */}
    <Hero />
    <Services />
    <Process />
    <Stats />
    <WhyUs />
    <OurClients />
    <Testimonials />
    <ContactUs />
    {/* <Footer /> */}
    </>
  );
}
