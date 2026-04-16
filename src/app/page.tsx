import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Certificates } from "@/components/sections/certificates";
import { Projects } from "@/components/sections/projects";
import { AIAgents } from "@/components/sections/ai-agents";
import { Services } from "@/components/sections/services";
import { Blog } from "@/components/sections/blog";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/footer";
import { CustomCursor } from "@/components/ui/custom-cursor";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { Preloader } from "@/components/ui/preloader";

export default function Home() {
  return (
    <main className="relative selection:bg-cyan selection:text-navy">
      <Preloader />
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      
      <div className="flex flex-col gap-0 md:gap-32">
        <Hero />
        <About />
        <AIAgents />
        <Experience />
        <Certificates />
        <Projects />
        <Services />
        <Blog />
        <Contact />
      </div>

      <Footer />
    </main>
  );
}
