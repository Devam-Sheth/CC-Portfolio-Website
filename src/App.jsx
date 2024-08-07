import "./App.css";
import AboutUs from "./components/AboutUs/AboutUs";
import Header from "./components/Header/Header";
import AnimatedCarousel from "./components/AnimatedCarousel/VideoCarousel";
import ContactUs from "./components/ContactUs/ContactUs";
import Verticals from "./components/Verticals/Verticals";
import Team from "./components/Team/Team";
function App() {
  return (
    <>
      <Header />
      <Team />
      <AboutUs />
      <AnimatedCarousel />
      <Verticals />
      <ContactUs />
    </>
  );
}

export default App;
