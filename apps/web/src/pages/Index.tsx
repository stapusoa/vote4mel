
import Hero from "./Hero";
import About from "./About";
import Policies from "./Policies";
import Contact from "./Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <About />
      <Policies />
      <Contact />
    </div>
  );
};

export default Index;