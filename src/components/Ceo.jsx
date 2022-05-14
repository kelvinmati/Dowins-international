import React from "react";
import profile from "../profile/profile.jpeg";
const Ceo = () => {
    return (
        <div className="bg-gray-50 md:py-10 pb-14  ">
            <div className="h-44 w-mobile_width  md:h-48 md:w-96 mx-auto flex items-center space-x-4  bg-white shadow">
                <div className="h-full flex">
                    <img src={profile} alt="" />
                </div>
                <div>
                    <p className="text-xl text-orange">W.N Douglas</p>
                    <p>Chief Executive Officer (CEO)</p>
                </div>
            </div>
        </div>
    );
};

export default Ceo;
