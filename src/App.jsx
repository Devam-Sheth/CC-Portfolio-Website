import "./App.css";
import Header from "./components/Header/Header";
import Carousel from "./components/Carousel/Carousel";
import ContactUs from "./components/ContactUs/ContactUs";
import Verticals from "./components/Verticals/Verticals";

import Team from "./components/Team/Team";
function App() {
  return (
    <>
      <Header />
      <Team />
      <Carousel />
      <Verticals />
      <ContactUs />
    </>
  );
}

export default App;
