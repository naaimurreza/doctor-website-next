import { About } from "./components/About";
import { Appointment } from "./components/Appointment";
import { Chamber } from "./components/Chamber";
import { Conditions } from "./components/Conditions";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Services } from "./components/Services";
import { WhyChoose } from "./components/WhyChoose";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <Conditions />
        <WhyChoose />
        <Chamber />
        <Appointment />
      </main>
      <Footer />
    </>
  );
}
