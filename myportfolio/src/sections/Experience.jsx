import { BriefcaseIcon } from "@heroicons/react/24/solid";
import AnimatedSection from "../components/AnimatedSection";
import Container from "../components/Container";
import GradientDivider from "../components/GradientDivider";
import SectionHeader from "../components/SectionHeader";

export default function Experience() {
  return (
    <section className="py-20 bg-slate-100 dark:bg-slate-850 transition-colors" id="experience">

        <AnimatedSection>
            <Container>
      <div className="max-w-6xl mx-auto px-6">
         <SectionHeader icon={BriefcaseIcon} title="Professional Experience" />

        <div className="space-y-12">
          <div>
            <h3 className="font-bold text-slate-900">
              Lead Frontend Engineer — Natsoft Corporation (Guardian Life)
            </h3>
            <p className="text-sm text-slate-500 mb-3">
              New Jersey, USA | Apr 2025 – Present
            </p>
            <ul className="list-disc pl-5 text-slate-600 space-y-2">
              <li>Design and develop enterprise-level React applications with modern frontend architecture.</li>
              <li>Build and optimize applications using Next.js, NodeJS, and component-driven development.</li>
              <li>Implement SSR and CSR strategies and optimize web vitals.</li>
              <li>Integrate REST APIs using JWT / OAuth2 authentication.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-slate-900">
              Frontend Engineering Lead (Manager) — Victoria University
            </h3>
            <p className="text-sm text-slate-500 mb-3">
              Melbourne, Australia | Jul 2023 – Mar 2025
            </p>
            <ul className="list-disc pl-5 text-slate-600 space-y-2">
              <li>Led scalable React-based platforms and frontend architecture standards.</li>
              <li>Defined reusable component libraries and performance best practices.</li>
              <li>Mentored developers and led code/design reviews.</li>
              <li>Owned sprint planning, estimations, delivery timelines, and risk mitigation.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-slate-900">
              Front End Lead — RMIT University
            </h3>
            <p className="text-sm text-slate-500 mb-3">
              Melbourne, Australia | Sep 2021 – Jul 2023
            </p>
            <ul className="list-disc pl-5 text-slate-600 space-y-2">
              <li>Built responsive React applications using hooks and reusable components.</li>
              <li>Integrated NodeJS REST APIs and implemented Jest unit testing.</li>
              <li>Optimized performance and cross-browser compatibility.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-slate-900">
              AEM Technical Lead / Front-End Lead — Capgemini Consulting
            </h3>
            <p className="text-sm text-slate-500 mb-3">
              Melbourne, Australia | Jun 2016 – Sep 2021
            </p>
            <ul className="list-disc pl-5 text-slate-600 space-y-2">
             <li>Develop front end and Backend AEM components using HTML5, CSS and JQuery/Java Script by Agile methodologies working in sprints for HIGHER EDUCATION INSTITUTE.</li>
             <li>Integrating the frontend HTML with components into AEM using TOUCH-UI dialogs and templates of AEM 6.1</li>
             <li>Collaborated with DevOps and backend teams on Dispatcher configurations, including cache rules, filters, and invalidation strategies to support UI performance.</li> 
             <li>Optimized UI performance through Dispatcher caching, minification, and responsive images.</li> 
             <li>Develop the responsive web pages using above technologies as per the designs adhering to Client’s style guide and branding.</li>                                        
             <li>Working closely with the business and the designers to get the designs correct which helps business take right decisions from a UX/UI perspective.</li> 
             <li>Led UI development for a 17-member Adobe team, managing a 5-person UI squad; established a new UI repository and standardized CSS/JS frameworks, enabling reusable UI components and long-term business value.</li> 
             <li>Played end-to-end roles across discovery and build phases—from requirements to technical go-live—partnering with client BAs and engaging business and technical stakeholders to define functional and technical requirements.</li>
             <li>Drove sprint execution through close collaboration and hands-on mentoring, consistently delivering committed scope using Agile best practices; squad recognized as “Squad of the Sprint” for exemplary delivery metrics.</li>
            </ul>
          </div>
        </div>
      </div>
      </Container>
      </AnimatedSection>
    </section>
  );
}
