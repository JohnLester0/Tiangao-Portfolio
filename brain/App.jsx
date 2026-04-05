import { Navbar } from "./layout/Navbar";
import { Footer } from "./layout/Footer";
import { Hero } from "./section/Head";
import { About } from "./section/About";
import { Projects } from "./section/Project";
import Skills from "./section/Skill";
import { Contact } from "./section/Contact";

const App = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
