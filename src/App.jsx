import "./App.css";
import Header from "./components/Header/Header";
import Carousel from "./components/Carousel/Carousel";
import ContactUs from "./components/ContactUs/ContactUs";
import Verticals from "./components/Verticals/Verticals";

import Team from "./components/Team/Team";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Team />
              <Carousel />
              <Verticals />
              <ContactUs />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
