import React from "react";
import Navbar1 from "../components/Navbar";
import Home from "../components/Top";
import Features from "../components/Features";
import Campaigns from "../components/Campaigns";
import Bcard from "../components/Bcard";
import Attract from "../components/Attract";
import Footer from "../footer/footer";
import Page from "../button/landing";


const Navigate=()=>{
    
    return(
        <div>
            <Navbar1/>
            <Home/>
            <Features/>
            <Campaigns/>
            <Attract/>
            <Bcard/>
            <Footer/>
            
        </div>
    )
}

export default Navigate;