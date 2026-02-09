import { CheckBadgeIcon } from "@heroicons/react/24/solid";
import AnimatedSection from "../components/AnimatedSection";
import Container from "../components/Container";
import GradientDivider from "../components/GradientDivider";
import SectionHeader from "../components/SectionHeader";

export default function Certifications() {
  return (
         
    <section className="py-20 bg-indigo-100/40 dark:bg-slate-800 transition-colors" id="certifications">

      <AnimatedSection>
        <Container>
      <div className="max-w-6xl mx-auto px-6">
         <SectionHeader icon={CheckBadgeIcon} title="Certifications" />

        <ul className="space-y-3 text-slate-600">

          <li>Adobe Certified Expert – AEM Developer</li>
          <li>Adobe Certified Expert – AEM  Business Practitioner</li>
          <li>Adobe Certified Expert – Adobe Analytics Business Practitioner</li>
          <li>Adobe Certified Expert – Adobe Campaign Standard Developer</li>
          <li>Adobe Certified Expert – Adobe Campaign classic Business Practitioner</li>
          <li>Professional Scrum Master - PSM II & PSM I – Scrum.org</li>
          <li>SAFe Advanced Scrum Master (SASM) – Scaled Agile</li>
          <li>SAFe Agilist (SA) – Scaled Agile</li>
          <li>Leveraging Generative AI for Project Management – LinkedIn Learning, 2025</li>
          <li>Everyday AI Concepts – LinkedIn Learning, 2025</li>
        </ul>
      </div>
      </Container>
      </AnimatedSection>
    </section>
    
   
  );
}
