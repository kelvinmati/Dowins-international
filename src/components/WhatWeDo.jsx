import React from "react";

const WhatWeDo = () => {
    return (
        <div className="py-14">
            <div className="w-container_width mx-auto grid md:grid-cols-2 gap-20  items-center">
                <div>
                    <img
                        src="https://res.cloudinary.com/kelvin45/image/upload/v1651819783/team_xapa7e.jpg"
                        alt=""
                    />
                </div>
                <div className="space-y-4">
                    <div>
                        <p className="text-2xl">WHAT WE DO</p>
                        <p className="text-lg text-orange">get to know us</p>
                    </div>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Sequi adipisci labore repellat blanditiis deleniti
                        dolore.
                    </p>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Sequi adipisci labore repellat blanditiis deleniti
                        dolore.
                    </p>
                    <button className="p-2 bg-orange text-white rounded-full">
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    );
};

export default WhatWeDo;
