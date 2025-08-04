import { HeroSection } from "@/components/sections/hero"
import { AboutSection } from "@/components/sections/about"
import { PortfolioSection } from "@/components/sections/portfolio"
import { TeamSection } from "@/components/sections/team"
import { CollaboratorsSection } from "@/components/sections/collaborators"
import { ContactSection } from "@/components/sections/contact"

export default function Home() {
  return (
    <div className="font-sans">
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      <TeamSection />
      <CollaboratorsSection />
      <ContactSection />
    </div>
  );
}
