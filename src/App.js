import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import EnigmaBlade from "./components/EnigmaBlade";
import Blaster from "./components/Blaster";
import Drone from "./components/Drone";
import Carousel from "./components/LevelDesign";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Blaster />
      <EnigmaBlade />
      <Drone />
      <Carousel />
      <Contact />
    </div>
  );
}

export default App;
