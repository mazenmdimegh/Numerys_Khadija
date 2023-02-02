import { useState } from "react";
import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './pages/Home/Home';
import Kadija from './pages/Kadija/Kadija';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Blog from './pages/Blog/Blog';
import CompteAssociatif from './pages/Compte-Associatif/Compte-Associatif';
import CompteProfessionnel from './pages/Compte-Professionnel/Compte-Professionnel';
import Contact from './pages/Contact/Contact';
import ScrollToTop from "./ScrollToTop";


function App() {
  const [variable, setVariable] = useState("");
  // console.log(variable);
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop>
          <Navbar type={variable}/>
          <Routes>
            <Route path="/" element={<Home variable={variable} setVariable={setVariable} />} />
            <Route path="/:a" element={<Home />} />
            <Route path="/kadija" element={<Kadija />} />
            <Route exact path="/kadija/:a" element={<Kadija />} />
            <Route path="/compte-professionnel" element={<CompteProfessionnel />} />
            <Route path="/compte-professionnel/:a" element={<CompteProfessionnel />} />
            <Route path="/compte-associatif" element={<CompteAssociatif />} />
            <Route path="/compte-associatif/:a" element={<CompteAssociatif />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:a" element={<Blog />} />
            <Route path="/contact/:a" element={<Contact />} />
            <Route path="/contact" element={<Contact />} />

          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
}

export default App;
