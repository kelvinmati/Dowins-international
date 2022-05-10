import React from "react";

const About = () => {
    return (
        <>
            <div
                className="bg-blue text-white h-80 bg-no-repeat bg-cover bg-center bg-blend-multiply"
                style={{
                    backgroundImage:
                        "url(https://pbs.twimg.com/media/EGd4mq-XUAAaA_s?format=png&name=small)",
                }}
            >
                <div className=" w-mobile_width md:w-container_width mx-auto flex flex-col justify-center  h-full">
                    <p className="text-2xl">ABOUT US</p>
                    <p className="text-orange text-lg">
                        {" "}
                        Know more about Dowins International Solutions{" "}
                    </p>
                </div>
            </div>
            <div className="py-14">
                <div className="w-mobile_width md:w-container_width mx-auto grid lg:grid-cols-2 items-center gap-16">
                    <div className="space-y-5">
                        <div>
                            <p className="text-lg">HOW WE OPERATE</p>
                            <p className="text-gray-700">
                                Dowins International Solutions operates under
                                the principles of teamwork, Expertise and
                                Performance. We believe that our performance is
                                anchored in ensuring the upward projection of
                                our clients through consistent application of
                                the key practices.
                            </p>
                        </div>
                        <div>
                            <p className="text-lg">OUR PERSONELL</p>
                            <p className="text-gray-700">
                                We have a team of skilled and experienced staﬀ
                                and partners who uphold values of
                                professionalism in the discharge of their
                                duties. They are well versed and adequately
                                trained to handle the diﬀerent areas which they
                                oﬀer services.
                            </p>
                        </div>
                        <div>
                            <p className="text-lg">OUR CLIENTS</p>
                            <p className="text-gray-700">
                                To us the customer comes first.
                            </p>
                        </div>
                    </div>
                    <div>
                        <img
                            src="https://res.cloudinary.com/kelvin45/image/upload/v1652050741/Dowins/meeting_zprh5w.jpg"
                            alt=""
                            className="h-full w-full "
                        />
                    </div>
                </div>
                <div className="pt-10 md:pt-24">
                    <div className="text-center mb-5">
                        <p>OUR PARTNERS</p>
                        <p className="text-orange">
                            We have a list of partners that we collaborate with
                            to deliver key services to our customers.
                        </p>
                    </div>
                    <div className=" w-mobile_width md:w-container_width mx-auto grid md:grid-cols-3 gap-3">
                        <div className="shadow-sm p-3 rounded text-center space-y-2 bg-gray-50">
                            <p>1</p>
                            <p> Premiotech Solutions</p>
                        </div>
                        <div className="shadow-sm p-3 rounded text-center space-y-2 bg-gray-50">
                            <p>2</p>
                            <p>Ostin Moriz International Solutions</p>
                        </div>
                        <div className="shadow-sm p-3 rounded text-center space-y-2 bg-gray-50">
                            <p>3</p>
                            <p>Tomik Solutions</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
