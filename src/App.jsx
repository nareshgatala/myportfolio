
import './App.css';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Certifications from './sections/Certifications';
import Footer from './components/Footer';
import useScrollColor from './utils/hooks/useScrollColor';
import SectionIndicator from './components/SectionIndicator';
import Contact from './sections/Contact';
import TodoList from './components/TodoList';

export default function App() {


const sectionIds = ['hero', 'about', 'skills', 'experience', 'certifications', 'contact'];

const sectionColors = [
  'bg-white', 
  'bg-slate-50', 
  'bg-indigo-50', 
  'bg-slate-100', 
  'bg-indigo-100/40', 
  'bg-slate-50'
];

const bgColor = useScrollColor(sectionIds, sectionColors);

  return (
    <div className={`${bgColor} transition-colors duration-500`}>
      
      <Navbar />

      <TodoList />

      <SectionIndicator />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
}
