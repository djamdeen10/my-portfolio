import Hero from './Hero.jsx';
import Intro from './Intro.jsx';
import Skills from './Skills.jsx';
import CurrentWork from './CurrentWork.jsx';
import Interests from './Interests.jsx';

export default function HomePage({ onNavigate }) {
  return (
    <>
      <Hero onNavigate={onNavigate} />

      <Intro />

      <Skills />

      <CurrentWork onNavigate={onNavigate} />

      <Interests />
    </>
  );
}
