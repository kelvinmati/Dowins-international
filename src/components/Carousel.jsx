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
                        <div className=" carousel-services absolute z-10 text-orange md:top-40 top-20 md:left-28 left-16 md:w-1/2 w-3/5 p-3 rounded md:text-5xl text-2xl">
                            <p>{image.service}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Carousel;
const images = [
    {
        img: "https://res.cloudinary.com/kelvin45/image/upload/v1651819747/pexels-kampus-production-5940846_kqcvdx.jpg",
        service: "Corporate and Individual Trainings.",
    },
    {
        img: "https://res.cloudinary.com/kelvin45/image/upload/v1652050741/Dowins/meeting_zprh5w.jpg",
        service: " Business Consulting ",
    },
    {
        img: "https://images.unsplash.com/photo-1557425955-df376b5903c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y29hY2hpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        service: "Home Schooling (IGCSE ,CBC and 8.4.4)",
    },
    {
        img: "https://pbs.twimg.com/media/D1CR6nlWwAAbDgE?format=png&name=small",
        service: " Human Resource Consulting",
    },
    {
        img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fHR1dG9yaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        service: " Coaching solutions",
    },
];
