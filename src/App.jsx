import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Carousel from "./components/Carousel";
import Ceo from "./components/Ceo";
import Clients from "./components/Clients";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Mission from "./components/Mission";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import WhatWeDo from "./components/WhatWeDo";
import WhyUs from "./components/WhyUs";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <Carousel />
                            <WhatWeDo />
                            <Clients />
                            <Mission />
                            <WhyUs />
                            <Ceo />
                        </>
                    }
                />

                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
