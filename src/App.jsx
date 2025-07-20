import { useState } from "react";

import "./App.css";
import Footer from "./Componets/Footer/Footer.jsx";
import Career from "./Componets/Career/Career.jsx";
import FAQ from "./Componets/FAQ/FAQ.jsx";
import TrustCard from "./Componets/TrustCard/TrustCard.jsx";
import Opportunities from "./Componets/Opportunities/Opportunities.jsx";
import Process from "./Componets/Process/Process.jsx";
import Navbar from "./Componets/Navbaar/Navbaar.jsx";

import Enough from "./Componets/Enough/Enough.jsx";
import WhoWeAre from "./Componets/WhoWeAre/WhoWeAre.jsx";
import EveyField from "./Componets/EveyField/EveyField.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Enough />

      <WhoWeAre />

      <Process />
      <Opportunities />
      <EveyField />
      <TrustCard />
      <FAQ />
      <Career />
      <Footer />
    </>
  );
}

export default App;
