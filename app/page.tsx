import { About } from "@/components/about";
import { AcquisitionPipeline } from "@/components/acquisition-pipeline";
import { AIGrowth } from "@/components/ai-growth";
import { Contact } from "@/components/contact";
import { CRM } from "@/components/crm";
import { Education } from "@/components/education";
import { Experience } from "@/components/experience";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { KpiDashboard } from "@/components/kpi-dashboard";
import { Leadership } from "@/components/leadership";
import { Navbar } from "@/components/navbar";
import { Platforms } from "@/components/platforms";
import { Projects } from "@/components/projects";
import { Responsibilities } from "@/components/responsibilities";
import { Resume } from "@/components/resume";
import { Testimonials } from "@/components/testimonials";
import { ToolsSection } from "@/components/tools-section";

export default function Home() {
  return (
    <main className="bg-white text-slate-900">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Responsibilities />
      <AcquisitionPipeline />
      <Platforms />
      <Leadership />
      <CRM />
      <KpiDashboard />
      <ToolsSection />
      <AIGrowth />
      <Projects />
      <Experience />
      <Resume />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
