import React from "react";
import "./SliderOne.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation } from "swiper";

import tomato from "../Assets/tomatos.png";
import img2 from "../Assets/capcicum.png";
import img3 from "../Assets/strawberies.png";
import img4 from "../Assets/tomato 2.png";
import { MdDoubleArrow } from "react-icons/md";

const SliderOne = ()=>{
    return (
        <div>
            <Swiper
                slidesPerView={4}
                spaceBetween={0}
                autoplay={{
                    delay:2500,
                    disableOnInteraction:false,
                    pauseOnMouseEnter: true
                }}

                navigation={true}
                modules={[Autoplay, Navigation]}
                className="mySwiper"
            >

                <SwiperSlide>
                    <div className="hoverIncrease">
                        <img src="" alt=""/>
                        <div>
                            <h1>Product One </h1>
                            <h2>£200.25</h2>
                            <div></div>
                            <div>
                                <p>SELECT OPTION</p>
                                <MdDoubleArrow />
 
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    )
}

export default SliderOne;
