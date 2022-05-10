import React from "react";
import { Link } from "react-router-dom";
const WhatWeDo = () => {
    return (
        <div className="pt-5 md:py-14" id="what_we_do">
            <div className=" w-mobile_width md:w-container_width mx-auto grid md:grid-cols-2 gap-20  items-center">
                <div className="">
                    <img
                        src="https://pbs.twimg.com/media/D2KCdWCX0AEz4Z1?format=jpg&name=small"
                        alt=""
                    />
                </div>
                <div className="space-y-4">
                    <div>
                        <p className="text-2xl">WHAT WE DO</p>
                        <p className="text-lg text-orange">Get to know us</p>
                    </div>
                    <p>
                        Dowins International Solutions is a company that deals
                        with; Motivation and Mentorship programs, Academic
                        Coaching, Business consultancy at both individual and
                        corporate levels.
                    </p>
                    <p>
                        We have a team of specialists who handle the programs
                        above thouroughly with a strong sense of customer
                        satisfaction
                    </p>
                    <p>
                        It is in the veins of our company to pride in the growth
                        of our customers
                    </p>
                    <div>
                        <Link to="/about">
                            <button className="p-3 bg-orange hover:bg-blue transition text-white rounded-full">
                                Learn More
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhatWeDo;
