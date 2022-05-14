import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <div className="pt-10 bg-blue text-gray-200 ">
            <div className="w-mobile_width md:w-container_width mx-auto grid md:grid-cols-3 gap-16 md:gap-2  justify-center ">
                <div className=" flex flex-col  items-center">
                    <div className="bg-white p-2">
                        <img
                            src="https://res.cloudinary.com/kelvin45/image/upload/q_auto/c_scale,h_124,w_292/v1652213423/logos/png_izw9mc.png"
                            alt=""
                        />
                    </div>
                    <div>
                        <p className="text-lg text-center text-white font-bold my-2">
                            Follow us on:
                        </p>
                        <div className="flex space-x-2.5">
                            <a
                                href="https://www.facebook.com/DowinsInternational/"
                                target="_blank"
                            >
                                <ion-icon
                                    size="large"
                                    name="logo-facebook"
                                ></ion-icon>
                            </a>

                            <a
                                href="http://instagram.com/dowinsinternational"
                                target="_blank"
                            >
                                <ion-icon
                                    size="large"
                                    name="logo-instagram"
                                ></ion-icon>
                            </a>

                            <a
                                href="
                           http://twitter.com/Dowinsinternat1"
                                target="_blank"
                            >
                                <ion-icon
                                    size="large"
                                    name="logo-twitter"
                                ></ion-icon>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/dowins-international-69b8a923a/"
                                target="_blank"
                            >
                                <ion-icon
                                    size="large"
                                    name="logo-linkedin"
                                ></ion-icon>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="space-y-1.5 flex flex-col  items-center md:block">
                    <p className="text-xl text-white font-bold">QUICK LINKS</p>
                    <Link to="/">
                        <li className="list-none">Home</li>
                    </Link>
                    <Link to="about">
                        <li className="list-none">About</li>
                    </Link>
                    <Link to="services">
                        <li className="list-none">Services</li>
                    </Link>
                    <Link to="contact">
                        <li className="list-none">Contact</li>
                    </Link>
                </div>
                <div className="space-y-1.5 flex flex-col   md:block">
                    <p className="text-xl text-center md:text-left text-white font-bold">
                        ADDRESS
                    </p>
                    <div className="flex items-center space-x-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-orange"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                        </svg>
                        <span> P.O Box 469-00515 ,Nairobi,Kenya</span>
                    </div>
                    <div className="flex items-center space-x-2 ">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-orange"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M16 8l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z"
                            />
                        </svg>
                        <span>+254-714-272665</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-orange"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                        </svg>
                        <span>dowinsinternational_254@yahoo.com</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-orange"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                        </svg>
                        <span>info@dowinsinternational.com</span>
                    </div>
                </div>
            </div>
            <div className="w-container_width mx-auto text-center py-5">
                <hr />
                <p className="py-2"> Copyright @2022.All rights reserved</p>
            </div>
        </div>
    );
};

export default Footer;
