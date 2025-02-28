import { useState } from "react";
import Home from "./components/Home";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Tools from "./components/Tools";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Slider from "./components/Slider";
import { Toaster } from "react-hot-toast";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Function to be called when the GSAP animation completes
  const handleLoaderComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <Loader onAnimationComplete={handleLoaderComplete} />}
      <Navbar />
      <Home />
      <Tools />
      {/* <Projects /> */}
      <Slider />
      <Contact />
      <Toaster />
    </>
  );
};

export default App;
