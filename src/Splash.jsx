import React from "react";
import { Hero } from "./components/Hero";
import Featured from "./components/Featured"
import HeroBottom from "./components/HeroBottom";
import Footer from "./components/Footer";


function Splash() {
    return (
    <>
        <Hero />
        <Featured />
        <HeroBottom />
        <Footer />
    </>
    )
}

export default Splash
