import Hero from './Hero.jsx';
import Intro from './Intro.jsx';
import Skills from './Skills.jsx';
import CurrentWork from './CurrentWork.jsx';
import Interests from './Interests.jsx';

export default function HomePage({ onNavigate }) {
  return (
    <>
      <Hero onNavigate={onNavigate} />

      <div className="xl:grid xl:grid-cols-2 xl:items-stretch xl:gap-5">
        <Intro />
        <Skills />
      </div>

      <CurrentWork onNavigate={onNavigate} />

      <Interests />
    </>
  );
}
