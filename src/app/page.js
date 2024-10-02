import Image from "next/image";
import Header from "./component/Header";
import About from "./component/About";
import Skills from "./component/Skills";
import Projects from "./component/Projects";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import WorkExperience from "./component/WorkExperience";
import Hero from "./component/Hero";

export default function Home() {
  return (
    <div>
    <Header />
    <main>
      <Hero/>
      <About />
      <Skills />
      <WorkExperience />
      <Projects />
      <Contact />
    </main>
    <Footer />
  </div>
  );
}
