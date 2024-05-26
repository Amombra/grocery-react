import React from "react";
import "./Advertisement.css";
import img1 from "../Assets/ad1.png";
import img2 from "../Assets/ad2.png";
import img3 from "../Assets/ad3.png";
import img4 from "../Assets/ad4.png";
import img5 from "../Assets/ad5.png";
import { MdDoubleArrow } from "react-icons/md";


const Advertisement = ()=>{
    return (
        <div className="advertisement-container">
            <div className="advertisement-sub-container">
                <div className="cont-img">
                    <div className="hoverImg">
                        <div className="hoverImg-content ">
                            <div>
                                <button>Shop Now</button>  
                                <MdDoubleArrow className="ml-1"/>        
                            </div>
                            <h1>Lorem Ipsum </h1>
                            <p>Why do we use it ?</p>
                       </div>
                       <img src={img1} alt=""/>
                    </div>
                </div>
            </div>
            <div>
                <div className="relative">
                    <div className="center-img-content ">
                            <h1>Lorem Ipsum </h1>
                            <p>Why do we use it ?</p>
                            <div className="shop-now-btn ml-[70px]">
                                <button>Shop Now</button>  
                                <MdDoubleArrow className="ml-1"/>        
                            </div>
                    </div>
                    <div>
                        <div>
                            <div>
                                <img src=""/>
                            </div> 
                        </div>
                    </div>
                </div>

                
            </div>
            
        </div>
    )
}

export default Advertisement;

