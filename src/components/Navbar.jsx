import React, { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
    const [sidebar, setSidebar] = useState(false);
    const ToggleSideBar = () => {
        setSidebar(!sidebar);
    };
    const [active, setActive] = useState("");
    console.log(active);
    return (
        <div className="relative">
            <nav
                className="bg-white text-blue py-1.5"
                style={{ borderBottom: "1px solid rgba(128, 128, 128, 0.075)" }}
            >
                <div className=" w-mobile_width md:w-container_width  h-32 mx-auto flex justify-between items-center ">
                    <div>
                        <Link to="/">
                            <div className="flex justify-center h-28 md:h-full mb-4  ">
                                <img
                                    //   by 10
                                    src="https://res.cloudinary.com/kelvin45/image/upload/q_auto/c_scale,h_124,w_292/v1652213423/logos/png_izw9mc.png"
                                    // by 12
                                    // src="https://res.cloudinary.com/kelvin45/image/upload/q_auto/c_scale,h_103,w_243/v1652213423/logos/png_izw9mc.png"
                                    alt=""
                                />
                            </div>
                        </Link>
                    </div>

                    <div className="hidden md:block">
                        <p className="text-lg ">Email address</p>
                        <div className="flex items-center space-x-2 text-orange">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 "
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
                        <div className="flex items-center space-x-2 text-orange">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 "
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
                            <span>ceo@dowinsinternational.com</span>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <p className="text-lg ">Phone</p>
                        <div className="flex items-center space-x-2 text-orange">
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
                                    d="M16 8l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z"
                                />
                            </svg>
                            <span>+254-714-272665</span>
                        </div>
                    </div>

                    <div className="md:hidden " onClick={ToggleSideBar}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-11 w-11 text-orange cursor-pointer"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </div>
                </div>
                <div
                    className={
                        sidebar
                            ? "bg-white text-center  p-5   transition -translate-y-0 ease-in-out absolute w-full z-10  md:hidden block rounded-b-lg "
                            : "bg-white text-center  p-5  -translate-y-80 absolute  transition ease-in-out w-full z-10  md:hidden block rounded-b-lg "
                    }
                >
                    <Link to="/">
                        <li
                            className="list-none text-blue my-3"
                            onClick={ToggleSideBar}
                        >
                            Home
                        </li>
                    </Link>
                    <Link to="about">
                        <li
                            className="list-none text-blue my-3"
                            onClick={ToggleSideBar}
                        >
                            About
                        </li>
                    </Link>
                    <Link to="services">
                        <li
                            className="list-none text-blue my-3"
                            onClick={ToggleSideBar}
                        >
                            Services
                        </li>
                    </Link>
                    <Link to="contact">
                        <li
                            className="list-none text-blue my-3"
                            onClick={ToggleSideBar}
                        >
                            Contact
                        </li>
                    </Link>
                </div>
            </nav>
            <nav className="w-mobile_width md:w-container_width  md:flex hidden justify-center space-x-16 py-2 text-center  mx-auto">
                {/* <div className="md:flex hidden"> */}
                <Link to="/">
                    <li
                        onClick={() => setActive("Home")}
                        className={
                            active === "Home"
                                ? "list-none text-orange "
                                : "list-none   text-blue "
                        }
                    >
                        Home
                    </li>
                </Link>

                <a href="#what_we_do">
                    <li
                        onClick={() => setActive("What we do")}
                        className={
                            active === "What we do"
                                ? "list-none text-orange "
                                : "list-none text-blue "
                        }
                    >
                        What we do
                    </li>
                </a>

                <Link to="/about">
                    <li
                        onClick={() => setActive("About")}
                        className={
                            active === "About"
                                ? "list-none text-orange "
                                : "list-none text-blue "
                        }
                    >
                        About
                    </li>
                </Link>
                <Link to="/services">
                    <li
                        onClick={() => setActive("Services")}
                        className={
                            active === "Services"
                                ? "list-none text-orange  "
                                : "list-none text-blue "
                        }
                    >
                        Services
                    </li>
                </Link>
                <Link to="contact">
                    <li
                        onClick={() => setActive("Contact")}
                        className={
                            active === "Contact"
                                ? "list-none text-orange "
                                : "list-none text-blue "
                        }
                    >
                        Contact
                    </li>
                </Link>
                {/* </div> */}
            </nav>
        </div>
    );
};

export default Navbar;
