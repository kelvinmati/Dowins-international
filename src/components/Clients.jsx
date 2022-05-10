import React from "react";

const Clients = () => {
    return (
        <div>
            <div className=" w-mobile_width md:w-container_width mx-auto md:text-center  py-10 px-1.5">
                <p className="text-2xl">OUR CLIENT PORTFOLIO</p>
                <p className="text-lg text-orange">
                    Below are some of the schools we've attended and nurtured
                    students
                </p>
            </div>
            <div className="w-mobile_width md:w-container_width mx-auto  grid  md:grid-cols-5 gap-4 ">
                <div className="shadow bg-gray-50 p-2">
                    <div className="h-28 flex   pb-4  justify-center items-center">
                        <img
                            src="https://cdn.standrewsturi.com/base/wp-content/uploads/2018/08/logo-blue.jpg"
                            alt=""
                        />
                    </div>
                    <p className="bg-orange text-white p-1 rounded-md md:text-black md:p-0 md:bg-gray-50">
                        St. Andrew’s Turi
                    </p>
                </div>
                <div className="shadow bg-gray-50 p-2">
                    <div className="h-28 flex   pb-4   justify-center items-center">
                        <img
                            src="https://ddnz6q0gw1o5v.cloudfront.net/sites/school47/files/styles/website_logo/public/brookehouse_school_logo_1.png?itok=WCVHCpZ9"
                            alt=""
                        />
                    </div>
                    <p className="bg-orange text-white p-1 rounded-md md:text-black md:p-0 md:bg-gray-50">
                        Brook House Schools
                    </p>
                </div>
                <div className="shadow bg-gray-50 p-2">
                    <div className="h-28 flex   pb-4  justify-center items-center">
                        <img
                            src="https://www.rusinga.ac.ke/wp-content/uploads/2021/09/Rusinga_school_logo-1.png"
                            alt=""
                        />
                    </div>
                    <p className="bg-orange text-white p-1 rounded-md md:text-black md:p-0 md:bg-gray-50">
                        Rusinga Schools
                    </p>
                </div>
                <div className="shadow bg-gray-50 p-2">
                    <div className="h-28 flex   pb-4  justify-center   ">
                        <img
                            src="https://nis.ac.ke/wp-content/uploads/2021/04/logo-nis.png"
                            alt=""
                        />
                    </div>
                    <p className="bg-orange text-white p-1 rounded-md md:text-black md:p-0 md:bg-gray-50">
                        Nairobi International School
                    </p>
                </div>
                <div className="shadow bg-gray-50 p-2">
                    <div className="h-28 flex   pb-4  justify-center p-2 bg-blue">
                        <img
                            src="https://braeside.braeburn.com/static/svg/logo_inverted.svg"
                            alt=""
                            className="h-24"
                        />
                        {/* <img
                        src="https://braeside.braeburn.com/static/svg/braeside-name-white.svg"
                        alt=""
                    /> */}
                    </div>
                    <p className="bg-orange text-white p-1 mt-3  rounded-md md:text-black md:p-0 md:bg-gray-50">
                        Braeside
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Clients;
