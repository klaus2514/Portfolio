// src/App.jsx
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills'; // Assuming you created this component
import Projects from './components/Projects';
import Experience from './components/Experience'; // Assuming you created this component
import Education from './components/Education'; // Assuming you created this component
import AchievementsHobbies from './components/AchievementsHobbies'; // Assuming you created this component
import Contact from './components/Contact'; // Assuming you created this component
import Footer from './components/Footer'; // Assuming you created this component

// A component for the background gradient blobs
const BackgroundBlobs = () => (
  <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
    <div className="absolute top-[-20rem] left-[-20rem] w-[50rem] h-[50rem] bg-sky-500/20 rounded-full blur-3xl opacity-40 animate-pulse"></div>
    <div className="absolute bottom-[-15rem] right-[-15rem] w-[40rem] h-[40rem] bg-purple-500/20 rounded-full blur-3xl opacity-40 animate-pulse animation-delay-3000"></div>
    <div className="absolute bottom-[-5rem] left-[10rem] w-[30rem] h-[30rem] bg-pink-500/20 rounded-full blur-3xl opacity-40 animate-pulse animation-delay-6000"></div>
  </div>
);

function App() {
  return (
    <>
      <BackgroundBlobs />
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <AchievementsHobbies />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App