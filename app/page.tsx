import ProgressBar from "@/components/ProgressBar";
import Hero from "@/components/Hero";
import ProjectCards from "@/components/ProjectCards";
import OtherWorks from "@/components/OtherWorks";
import About from "@/components/About";
import FooterSection from "@/components/FooterSection";

export default function Home() {
  return (
    <main className="w-full">
      <ProgressBar />
      <Hero />
      <ProjectCards />
      <OtherWorks />
      <About />
      <FooterSection />
    </main>
  );
}
