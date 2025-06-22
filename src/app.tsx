import gsap from "gsap"
import { ScrollTrigger, SplitText } from "gsap/all"


gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <div>
      <h1 className="text-3xl text-indigo-300">Hello Gsap</h1>
    </div>
  )
}

export default App
