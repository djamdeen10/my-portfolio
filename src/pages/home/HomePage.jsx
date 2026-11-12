import Hero from './Hero.jsx';
import Intro from './Intro.jsx';
import Skills from './Skills.jsx';
import Interests from './Interests.jsx';
import { SlideUp } from '../../components/ui/Animations.jsx';

function ProjectsLink({ onNavigate }) {
  const goToProjects = (event) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    onNavigate('/projet');
  };

  return (
    <SlideUp delay={0.2}>
      <div className="mt-8 flex justify-center">
        <a
          href="/projet"
          onClick={goToProjects}
          className="glass-chip glass-interactive inline-flex items-center gap-1 rounded-sm px-3 py-1.5 text-sm text-neutral-700 dark:text-neutral-200"
        >
          Découvrir mes projets -&gt;
        </a>
      </div>
    </SlideUp>
  );
}

export default function HomePage({ onNavigate }) {
  return (
    <>
      <Hero onNavigate={onNavigate} />
      <Intro />
      <Skills />
      <Interests />
      <ProjectsLink onNavigate={onNavigate} />
    </>
  );
}
