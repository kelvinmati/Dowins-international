import React from "react";
const Mission = () => {
    return (
        <div className=" pt-12 ">
            <div className=" bg-blue text-gray-200 grid lg:grid-cols-2  gap-12 md:gap-0 items-center py-8 lg:p-0 ">
                <div className="grid   md:grid-cols-2 gap-12 md:gap-0  text-center  w-container_width mx-auto">
                    <div>
                        <p className=" flex justify-center mb-3">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-11 w-11 text-orange "
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                />
                            </svg>
                        </p>
                        <p className="text-2xl">VISION</p>
                        <p>
                            To be a center of Excellent Performance where ideas
                            are converted into actual results.
                        </p>
                    </div>
                    <div>
                        <p className="flex justify-center mb-3">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-11 w-11 text-orange"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                />
                            </svg>
                        </p>
                        <p className="text-2xl">MISSION</p>
                        <p>To Empower the Society through Inspiration.</p>
                    </div>
                </div>
                <div className="h-80 w-full bg-white hidden lg:block">
                    <img
                        src="https://res.cloudinary.com/kelvin45/image/upload/v1651819747/pexels-kampus-production-5940846_kqcvdx.jpg"
                        alt=""
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="  w-full bg-white hidden lg:block ">
                    <img
                        src="https://res.cloudinary.com/kelvin45/image/upload/v1651819769/meeting_dlrvd6.jpg"
                        alt=""
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className=" w-container_width mx-auto space-y-3">
                    <p className="flex justify-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-11 w-11 text-orange"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                            />
                        </svg>
                    </p>
                    <p className="text-center text-2xl ">OUR CORE VALUES</p>

                    <div className="space-y-3">
                        <li>
                            <b className="text-white">Empowering</b>-We create
                            an environment where each person is engaged and
                            equipped with every necessary information to bring
                            out the best of him or her.
                        </li>
                        <li>
                            <b className="text-white">Aggressive</b>-We are ever
                            ready to attack and confront challenges that our
                            customers face in day in day out engagements.
                        </li>{" "}
                        <li>
                            <b className="text-white">Innovation</b>-Wwe feature
                            new methods that are aimed at producing the desired
                            key results by our customers.
                        </li>{" "}
                        <li>
                            <b className="text-white">Service</b>-Our commitment
                            is to offer quality and professional service to our
                            clients becomes a great virtue that Drives our
                            organizational business.
                        </li>{" "}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Mission;
