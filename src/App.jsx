import React from "react";

import "./App.css";
import Carousel from "./components/Carousel";
import Clients from "./components/Clients";
import Footer from "./components/Footer";
import Mission from "./components/Mission";
import Navbar from "./components/Navbar";
import WhatWeDo from "./components/WhatWeDo";
import WhyUs from "./components/WhyUs";

function App() {
    return (
        <div>
            <Navbar />
            <Carousel />
            <Clients />
            <WhatWeDo />
            <Mission />
            <WhyUs />
            <Footer />
        </div>
    );
}

export default App;
