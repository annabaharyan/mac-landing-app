import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductViewer from "@/components/ProductViewer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Showcase from "@/components/Showcase";

gsap.registerPlugin(ScrollTrigger);
const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProductViewer />
      <Showcase />
    </main>
  );
};
export default App;
