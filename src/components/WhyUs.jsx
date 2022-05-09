import React from "react";

const WhyUs = () => {
    return (
        <div className="py-14 bg-gray-50">
            <div className="text-center mb-8">
                <p className="text-2xl">WHY CHOOSE US</p>
                <p className="text-lg text-orange">
                    reasons why you should go for Dowins Internaional solutions
                </p>
            </div>
            <div className=" w-mobile_width md:w-container_width mx-auto  grid md:grid-cols-2 gap-3">
                <div className="text-center space-y-3 shadow-sm bg-white p-3 rounded">
                    <p className="flex justify-center ">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-11 w-11 text-blue"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                            />
                        </svg>
                    </p>
                    <p className="text-2xl ">Committment</p>
                    <p>
                        Our commitment and core values place us at the top
                        performance pyramid. We understand the needs of our
                        customers on board and ever willing to listen to our
                        prospects to serve them better.
                    </p>
                </div>
                <div className="text-center space-y-3 shadow-sm bg-white p-3 rounded">
                    <p className="flex justify-center ">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-11 w-11 text-blue"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                    </p>
                    <p className="text-2xl ">Timely</p>
                    <p>
                        We provide timely and relevant solutions to our current
                        customers and our prospects.
                    </p>
                </div>
                <div className="text-center space-y-3 shadow-sm bg-white p-3 rounded">
                    <p className="flex justify-center ">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-11 w-11 text-blue"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                            />
                        </svg>
                    </p>
                    <p className="text-2xl ">Diverse</p>
                    <p>
                        We understand the diversity within which different
                        corporates and individuals operate and advertently
                        choose services that will help improve their
                        performance.
                    </p>
                </div>
                <div className="text-center space-y-3 shadow-sm bg-white p-3 rounded">
                    <p className="flex justify-center ">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-11 w-11 text-blue"
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
                    <p className="text-2xl ">Versatile</p>
                    <p>
                        We appreciates the diﬀerent approaches and strategies
                        that exist amongst the organizations and individuals. We
                        are always ready to align personal and corporate
                        strategies to the to their respective desired
                        performance objective.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default WhyUs;
