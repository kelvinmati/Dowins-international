import React from "react";
import profile from "../profile/profile.jpeg";
const Ceo = () => {
    return (
        <div className="bg-gray-50 py-10 ">
            <div className="h-48 w-96  mx-auto flex items-center space-x-4  bg-white shadow">
                <div className="h-full flex">
                    <img src={profile} alt="" />
                </div>
                <div>
                    <p className="text-xl text-orange">W.N Douglas</p>
                    <p>Chief Execcutive Officer (CEO)</p>
                </div>
            </div>
        </div>
    );
};

export default Ceo;
