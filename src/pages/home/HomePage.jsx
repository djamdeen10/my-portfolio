import Hero from './Hero.jsx';
import Intro from './Intro.jsx';
import Skills from './Skills.jsx';
import CurrentWork from './CurrentWork.jsx';
import LatestPost from './LatestPost.jsx';
import Interests from './Interests.jsx';
import FaqSection from './FaqSection.jsx';

export default function HomePage({ onNavigate }) {
  return (
    <>
      <Hero onNavigate={onNavigate} />

      <Intro />

      <Skills />

      <CurrentWork onNavigate={onNavigate} />

      <LatestPost onNavigate={onNavigate} />

      <Interests />

      <FaqSection />
    </>
  );
}
