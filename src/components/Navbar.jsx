import React, { useState } from "react";

const Navbar = () => {
    const [sidebar, setSidebar] = useState(false);
    const ToggleSideBar = () => {
        setSidebar(!sidebar);
    };
    console.log(sidebar);
    return (
        <nav className="bg-white relative">
            <div className="w-container_width h-24 mx-auto flex justify-between items-center">
                <div className="">
                    <img
                        src="https://res.cloudinary.com/kelvin45/image/upload/q_auto/c_scale,h_140,w_198/v1651792128/logos/logo_qhsxkh.png"
                        alt=""
                    />
                </div>
                <div className="md:flex space-x-10 hidden">
                    <li className="list-none text-blue ">Home</li>
                    <li className="list-none text-blue ">What we do</li>
                    <li className="list-none text-blue ">Why us</li>
                    <li className="list-none text-blue ">Contact Us</li>
                </div>
                {/* <div className="hidden md:block">
                    <button className="p-2 bg-orange text-white rounded-full">
                        Get started
                    </button>
                </div> */}
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
                        ? "bg-white text-center space-y-2 p-2  transition -translate-y-0 ease-in-out absolute w-full z-10  md:hidden block rounded-b-lg "
                        : "bg-white text-center space-y-2 p-2 -translate-y-56 absolute  transition ease-in-out w-full z-10  md:hidden block rounded-b-lg "
                }
            >
                <li className="list-none text-blue ">Home</li>
                <li className="list-none text-blue ">What we do</li>
                <li className="list-none text-blue ">Why us</li>
                <li className="list-none text-blue ">Contact Us</li>
                {/* <button className="p-2 bg-orange text-white rounded-full">
                    Get started
                </button> */}
            </div>
        </nav>
    );
};

export default Navbar;
