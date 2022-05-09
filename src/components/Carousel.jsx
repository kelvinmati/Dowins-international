import React, { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import Swiper core and required modules
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";

// install Swiper modules
SwiperCore.use([Navigation, Autoplay, Pagination]);
const Carousel = () => {
    const swiperRef = useRef(null);
    return (
        <div className="relative">
            {" "}
            <Swiper
                ref={swiperRef}
                spaceBetween={10}
                slidesPerView={1}
                navigation={false}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={true}
            >
                <div
                    className="previousButton"
                    onClick={() => swiperRef.current.swiper.slidePrev()}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 19l-7-7 7-7"
                        />
                    </svg>
                </div>
                <div
                    className="nextButton"
                    onClick={() => swiperRef.current.swiper.slideNext()}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 5l7 7-7 7"
                        />
                    </svg>
                </div>
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <div className="md:h-height h-56">
                            <img
                                className="object-cover h-full w-full"
                                src={image.img}
                                alt=""
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className=" bg-blue text-white md:absolute md:right-0 md:bottom-0 z-50 md:w-64  md:rounded-tl-xl p-3 w-mobile_width mx-auto mt-5 rounded md:rounded-none ">
                <p className="text-xl text-orange">Key areas of operations</p>

                <ul>
                    <li>Education</li>
                    <li>Business Operations</li>
                    <li>Leadership</li>
                </ul>
            </div>
        </div>
    );
};

export default Carousel;
const images = [
    {
        img: "https://res.cloudinary.com/kelvin45/image/upload/v1652050758/Dowins/team_xnyolr.jpg",
    },
    {
        img: "https://res.cloudinary.com/kelvin45/image/upload/v1651819747/pexels-kampus-production-5940846_kqcvdx.jpg",
    },
    {
        img: "https://res.cloudinary.com/kelvin45/image/upload/v1652050741/Dowins/meeting_zprh5w.jpg",
    },
    {
        img: "https://pbs.twimg.com/media/D1CR6nlWwAAbDgE?format=png&name=small",
    },
];
