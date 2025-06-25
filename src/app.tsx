import gsap from "gsap"
import { ScrollTrigger, SplitText } from "gsap/all"
import Navbar from "./components/navbar";
import Hero from "./components/hero";


gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main className="">
      <Navbar />
      <Hero />
    </main>
  )
}

export default App
