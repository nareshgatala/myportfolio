import { EnvelopeIcon } from '@heroicons/react/24/solid';
import Container from '../components/Container';
import AnimatedSection from '../components/AnimatedSection';
import SectionHeader from '../components/SectionHeader';

export default function Contact() {
  return (
    <section className="py-20 bg-slate-100  dark:bg-slate-900 transition-colors" id="contact">
      <Container>

        {/* Section Header with Icon */}
        <SectionHeader icon={EnvelopeIcon} title="Contact Me" className="text-slate-200"/>

        {/* Animated Content */}
        <AnimatedSection>
          <p className="max-w-3xl mb-8 leading-relaxed dark:text-slate-300">
            I’m always open to discussing new projects, opportunities, or collaboration. 
            Feel free to reach out via email or using the contact form below.
          </p>

                    <p className="max-w-3xl mb-8 leading-relaxed dark:text-slate-300">
            I’m always open to discussing new projects, opportunities, or collaboration. 
            Feel free to reach out via email or using the contact form below.
          </p>

                    <p className="max-w-3xl mb-8 leading-relaxed dark:text-slate-300">
            I’m always open to discussing new projects, opportunities, or collaboration. 
            Feel free to reach out via email or using the contact form below.
          </p>

        <p className="max-w-3xl mb-8 leading-relaxed dark:text-slate-300">
            I’m always open to discussing new projects, opportunities, or collaboration. 
            Feel free to reach out via email or using the contact form below.
          </p>

                    <p className="max-w-3xl mb-8 leading-relaxed dark:text-slate-300">
            I’m always open to discussing new projects, opportunities, or collaboration. 
            Feel free to reach out via email or using the contact form below.
          </p>

          {/* Contact Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:nareshghatalla@gmail.com"
              className="px-6 py-3 bg-indigo-600 cursor-pointer hover:bg-indigo-500 text-white rounded-md font-medium text-center transition-colors"
            >
              Email Me
            </a>

            <a
              href="https://www.linkedin.com/in/naresh-gatala/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border cursor-pointer border-slate-400 rounded-md font-medium dark:text-slate-100  hover:bg-slate-500 text-center transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
