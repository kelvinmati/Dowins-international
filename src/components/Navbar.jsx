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
        <nav className="bg-white relative shadow-sm">
            <div className=" w-mobile_width md:w-container_width h-24 mx-auto flex justify-between items-center ">
                <Link to="/">
                    <div>
                        <img
                            src="https://res.cloudinary.com/kelvin45/image/upload/q_auto/c_scale,h_140,w_198/v1651792128/logos/logo_qhsxkh.png"
                            alt=""
                        />
                    </div>
                </Link>
                <div className="md:flex space-x-10 hidden">
                    <Link to="/">
                        <li
                            onClick={() => setActive("Home")}
                            className={
                                active === "Home"
                                    ? "list-none text-orange"
                                    : "list-none text-blue"
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
                                    ? "list-none text-orange"
                                    : "list-none text-blue"
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
                                    ? "list-none text-orange"
                                    : "list-none text-blue"
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
                                    ? "list-none text-orange"
                                    : "list-none text-blue"
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
                                    ? "list-none text-orange"
                                    : "list-none text-blue"
                            }
                        >
                            Contact
                        </li>
                    </Link>
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
    );
};

export default Navbar;
