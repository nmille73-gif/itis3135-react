import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './Header'
import Footer from './Footer'
import Home from './Home';
import Introduction from './Introduction';
import Contract from './Contract';
import Introductions from './Introductions';

function App() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://kit.fontawesome.com/4d0fe3.js";
    script.crossOrigin = "anonymous";
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/introduction" element={<Introduction />} />
        <Route path="/contract" element={<Contract />} />
        <Route path="/introductions" element={<Introductions />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App
