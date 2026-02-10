import Container from '../components/Container';
import AnimatedSection from '../components/AnimatedSection';
import GradientDivider from '../components/GradientDivider';
import SectionHeader from '../components/SectionHeader';
import { UserIcon } from '@heroicons/react/24/solid';

export default function About() {
  return (  
    <section className="py-20 bg-slate-50 dark:bg-slate-900 transition-colors" id="about">
    <AnimatedSection>
      <Container>
        <SectionHeader icon={UserIcon} title="About Me" />

        <p className="max-w-4xl dark:text-slate-50 leading-relaxed">
          I am a Lead Frontend Engineer and Frontend Engineering Manager with
          extensive experience designing, building, and leading delivery of
          enterprise-scale web applications. I specialize in modern React
          ecosystems, component-driven development, and scalable frontend
          architectures.
          <br /><br />
          Throughout my career, I’ve led cross-functional teams, mentored
          engineers, defined frontend standards, and partnered closely with
          UX, product, and backend stakeholders to translate complex business
          requirements into robust technical solutions using Agile and SAFe
          methodologies.
        </p>
      </Container>
      </AnimatedSection>
    </section>
  );
}
