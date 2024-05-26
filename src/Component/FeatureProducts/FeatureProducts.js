import React from "react";
import "./FeatureProducts.css";
import SliderOne from "../SliderOne/SliderOne";



const FeatureProducts = ()=>{
    return (
        <div className="mx-[80px] mt-[45px]">
            <div  className="section-title">
                <div className="section-line"></div>
                <h1>Feature Products</h1>
                <div className="section-line"></div>
            </div>
            
            <div className="mt-[60px]">
                <SliderOne/>
            </div>
        </div>
    )
}

export default FeatureProducts;
