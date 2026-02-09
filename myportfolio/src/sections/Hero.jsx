import AnimatedSection from '../components/AnimatedSection';
import Container from '../components/Container';
import GradientDivider from '../components/GradientDivider';

export default function Hero() {
  return (
    <section className="py-20 bg-white dark:bg-slate-950" id="hero">

        <AnimatedSection>
      <Container>
        <h1 className="text-5xl font-bold text-slate-900 dark:text-slate-200  leading-tight">
          Lead Frontend Engineer
        </h1>

        <p className="mt-6 max-w-3xl text-lg text-slate-600 dark:text-slate-200">
          Frontend Engineering Leader with 11+ years of experience delivering
          enterprise-scale digital solutions across insurance, higher education,
          telecommunications, automobile, and consulting sectors.
          Specialized in React, JavaScript (ES6+), NodeJS, and modern frontend
          architecture.
        </p>

        <div className="mt-10 flex gap-4">
          <button className="px-6 py-3 bg-indigo-600 text-white rounded-md font-medium hover:bg-indigo-700">
            View Case Studies
          </button>
          <button className="px-6 py-3 border border-slate-300 rounded-md font-medium hover:border-slate-400">
            <a className="dark:text-slate-300" href="../utils/MyResume.pdf" download="NareshResume.pdf">Download Resume</a>
          </button>
        </div>
      </Container>
      </AnimatedSection>
    </section>
  );
}
