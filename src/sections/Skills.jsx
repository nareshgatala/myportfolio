import AnimatedSection from "../components/AnimatedSection";
import Container from "../components/Container";
import GradientDivider from "../components/GradientDivider";
import { CodeBracketIcon } from "@heroicons/react/24/solid";
import SectionHeader from "../components/SectionHeader";

const skillGroups = [
  {
    title: 'Frontend Technologies',
    skills: [
      'React.js',
      'Redux',
      'JavaScript (ES6+)',
      'HTML5',
      'CSS3 (SASS, PostCSS)',
      'Tailwind CSS',
      'Vite',
      'NodeJS',
      'jQuery',
      'Jest',
    ],
  },
  {
    title: 'Adobe Experience Cloud',
    skills: [
      'AEM 6.5',
      'Dynamic Media',
      'Dispatcher',
      'Experience Fragments',
      'Adobe Analytics',
      'Adobe Target',
    ],
  },
  {
    title: 'DevOps & Tools',
    skills: [
      'Git',
      'GitHub',
      'Jenkins',
      'SonarCloud',
      'JIRA',
      'Confluence',
      'AWS',
    ],
  },
  {
    title: 'Leadership & Delivery',
    skills: [
      'Agile / SAFe',
      'Sprint Planning',
      'Estimation',
      'Architecture Design',
      'Stakeholder Management',
      'Risk Mitigation',
    ],
  },
];

export default function Skills() {
  return (
    <section className="py-20 bg-indigo-50 dark:bg-slate-800 dark:text-slate-50 transition-colors" id="skills">

    <AnimatedSection>
        <Container>
      <div className="max-w-6xl mx-auto px-6">
      <SectionHeader icon={CodeBracketIcon} title="Core Skills" />

        <div className="grid gap-10">
          {skillGroups.map(group => (
            <div key={group.title}>
              <h3 className="font-semibold dark:text-slate-50 text-slate-900 mb-4">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {group.skills.map(skill => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm rounded-md bg-white/80 dark:bg-slate-700 border border-slate-200 dark:border-slate-600"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      </Container>
      </AnimatedSection>
    </section>
  );
}
