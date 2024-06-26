import React from "react";
import "./SliderOne.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import img1 from "../Assets/tomatos.png";
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

                navigation
                modules={[Autoplay, Navigation]}
                className="mySwiper"
            >

                <SwiperSlide>
                    <div className="hoverIncrease">
                        <img src={img1}  alt=""/>
                        <div className="content">
                            <h1>Product One </h1>
                            <h2>£200.25</h2>
                            <div className="price-underline"></div>
                            <div  className="select-btn">
                                <p>SELECT OPTION</p>
                                <MdDoubleArrow className="ml-1" />
 
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="hoverIncrease">
                        <img src={img2} alt=""/>
                        <div className="content">
                            <h1>Product One </h1>
                            <h2>£200.25</h2>
                            <div className="price-underline"></div>
                            <div  className="select-btn">
                                <p>SELECT OPTION</p>
                                <MdDoubleArrow className="ml-1" />
 
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="hoverIncrease">
                        <img src={img3} alt=""/>
                        <div className="content">
                            <h1>Product One </h1>
                            <h2>£200.25</h2>
                            <div className="price-underline"></div>
                            <div  className="select-btn">
                                <p>SELECT OPTION</p>
                                <MdDoubleArrow className="ml-1" />
 
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="hoverIncrease">
                        <img src={img4} alt=""/>
                        <div className="content">
                            <h1>Product One </h1>
                            <h2>£200.25</h2>
                            <div className="price-underline"></div>
                            <div  className="select-btn">
                                <p>SELECT OPTION</p>
                                <MdDoubleArrow className="ml-1" />
 
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="hoverIncrease">
                        <img src={img1}  alt=""/>
                        <div className="content">
                            <h1>Product One </h1>
                            <h2>£200.25</h2>
                            <div className="price-underline"></div>
                            <div  className="select-btn">
                                <p>SELECT OPTION</p>
                                <MdDoubleArrow className="ml-1" />
 
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="hoverIncrease">
                        <img src={img2} alt=""/>
                        <div className="content">
                            <h1>Product One </h1>
                            <h2>£200.25</h2>
                            <div className="price-underline"></div>
                            <div  className="select-btn">
                                <p>SELECT OPTION</p>
                                <MdDoubleArrow className="ml-1" />
 
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="hoverIncrease">
                        <img src={img3} alt=""/>
                        <div className="content">
                            <h1>Product One </h1>
                            <h2>£200.25</h2>
                            <div className="price-underline"></div>
                            <div  className="select-btn">
                                <p>SELECT OPTION</p>
                                <MdDoubleArrow className="ml-1" />
 
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="hoverIncrease">
                        <img src={img4} alt=""/>
                        <div className="content">
                            <h1>Product One </h1>
                            <h2>£200.25</h2>
                            <div className="price-underline"></div>
                            <div  className="select-btn">
                                <p>SELECT OPTION</p>
                                <MdDoubleArrow className="ml-1" />
 
                            </div>
                        </div>
                    </div>
                </SwiperSlide>



            </Swiper>
        </div>
    )
}

export default SliderOne;
