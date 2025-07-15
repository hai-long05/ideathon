import { useRef } from 'react';
import './App.css';
import Facts from './components/Facts';
import Header from './components/Header';
import Home from './components/Home';
import Motivation from './components/Motivation';
import Team from './components/Team';

function App() {
  const homeRef = useRef<HTMLElement | null>(null);
  const factsRef = useRef<HTMLElement | null>(null);
  const motivationRef = useRef<HTMLElement | null>(null);
  const teamRef = useRef<HTMLElement | null>(null);

  return (
    <>
      <Header
        refs={{
          Home: homeRef,
          Facts: factsRef,
          Motivation: motivationRef,
          'Our Team': teamRef,
        }}
      />
      <section ref={homeRef} id="Home">
        <Home />
      </section>
      <section ref={factsRef} id="Facts">
        <Facts />
      </section>
      <section ref={motivationRef} id="Motivation">
        <Motivation />
      </section>
      <section ref={teamRef} id="Our Team">
        <Team />
      </section>
    </>
  );
}

export default App;
