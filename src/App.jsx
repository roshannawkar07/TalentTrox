import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./Componets/Navbaar/Navbaar.jsx";
import Footer from "./Componets/Footer/Footer.jsx";
import Enough from "./Componets/Enough/Enough.jsx";
import WhoWeAre from "./Componets/WhoWeAre/WhoWeAre.jsx";
import Process from "./Componets/Process/Process.jsx";
import EveyField from "./Componets/EveyField/EveyField.jsx";
import Opportunities from "./Componets/Opportunities/Opportunities.jsx";
import TrustCard from "./Componets/TrustCard/TrustCard.jsx";
import FAQ from "./Componets/FAQ/FAQ.jsx";
import Career from "./Componets/Career/Career.jsx";
import TouchForm from './Componets/TouchForm/TouchForm.jsx'
function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={
          <>
            <Enough />
            <WhoWeAre />
            <Process />
            <EveyField />
            <Opportunities />
            <TrustCard />
            <FAQ />
            <Career />
          </>
        } />

        <Route path="/TouchForm" element={<TouchForm />} />
       
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
