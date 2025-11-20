import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductViewer from "@/components/ProductViewer";
import Showcase from "@/components/Showcase";
import Performance from "@/components/Performance";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Highlights from "@/components/Highlights";

gsap.registerPlugin(ScrollTrigger);
const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProductViewer />
      <Showcase />
      <Performance />
      <Features />
      <Highlights />
      <Footer />
    </main>
  );
};
export default App;
