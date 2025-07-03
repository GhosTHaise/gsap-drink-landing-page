import gsap from "gsap"
import { ScrollTrigger, SplitText } from "gsap/all"
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Cocktails from "./components/cocktails";
import About from "./components/about";
import Art from "./components/art";
import Menu from "./components/menu";


gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main className="">
      <Navbar />
      <Hero />
      <Cocktails />
      <About />
      <Art />
      <Menu />
    </main>
  )
}

export default App
