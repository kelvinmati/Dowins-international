import React from "react";

const Services = () => {
    return (
        <>
            <div
                className="bg-blue text-white h-80 bg-no-repeat bg-cover bg-center bg-blend-multiply"
                style={{
                    backgroundImage:
                        "url(https://res.cloudinary.com/kelvin45/image/upload/v1651819747/pexels-kampus-production-5940846_kqcvdx.jpg)",
                }}
            >
                <div className="w-mobile_width md:w-container_width mx-auto flex flex-col justify-center  h-full">
                    <p className="text-2xl">SERVICES</p>
                    <p className="text-orange text-lg">
                        We strive for commitment, passion and excellence in our
                        delivery of services.
                    </p>
                </div>
            </div>
            <div className="py-10 bg-gray-50">
                <div className="w-mobile_width md:w-container_width mx-auto grid md:grid-cols-3 gap-3 items-center">
                    <div className=" md:col-span-2 space-y-3">
                        <div className="space-y-3 shadow p-3 rounded bg-white">
                            <p className="text-xl ">
                                BUSINESS CONSULTANCY SERVICES
                            </p>
                            <p className="text-gray-700">
                                {" "}
                                <span className="font-semibold">
                                    Management & Strategy
                                </span>{" "}
                                -We have a team of qualified personnel with
                                understanding of your particular market and
                                ready to bring the best practices from your
                                industry to your company. If you're looking to
                                expand your markets geographically, extend your
                                product portfolio, reorganize your middle market
                                company to promote efficiency and
                                cost-effectiveness, buy out a smaller
                                competitor, or increase your overall
                                capabilities, then check out on us for
                                assistance.
                            </p>
                            <p className="text-gray-700">
                                {" "}
                                <span className="font-semibold">
                                    Operations
                                </span>{" "}
                                -We help our customers improve the quality and
                                efficiency of their production processes.
                            </p>
                        </div>
                        <div className="space-y-3 shadow p-3 rounded bg-white">
                            <p className="text-xl ">
                                HOME/PRIVATE SCHOOLING SERVICES
                            </p>
                            <p className="text-gray-700">
                                {" "}
                                <span className="font-semibold">
                                    One on One Tutor Student Engagements
                                </span>{" "}
                                -Are you looking for a firm with a proper laid
                                up structure of student –tutor coaching? Then
                                DOWINS INTERNATIONAL Solutions is the best
                                organization to trust. We have skilled and
                                experienced tutors in IGCSE, CBC and 8.4.4 right
                                from junior academic years to Senior Levels.
                            </p>
                            <p className="text-gray-700">
                                {" "}
                                <span className="font-semibold">
                                    Performance Counselling
                                </span>{" "}
                                -We strive at advancing the performance of
                                students. We offer relevant talks and coaching
                                sessions that surround the syllabus of the
                                student with an aim of enhancing the academic
                                performance. Areas of interest are; how to
                                prepare and pass exams etc.
                            </p>
                        </div>
                    </div>

                    <div className="bg-orange p-3 rounded text-gray-50">
                        <div>
                            <p className="text-xl text-white ">
                                TRAINING SOLUTIONS
                            </p>
                            <p>
                                Training is a very important component of
                                organizations.
                            </p>
                            <p className="text-xl text-white">
                                we mainly focus on these areas
                            </p>

                            <li>Time management</li>
                            <li>Team building</li>
                            <li>Workethics</li>
                            <li>Communication improvement</li>
                            <li>Employment improvement</li>
                            <li>Effective customer service</li>
                            <li>Health & safety</li>
                            <li>Knowledge management</li>
                            <li>How to close sales</li>
                            <li>Lead management</li>
                        </div>
                        <div>
                            <p className="text-xl text-white ">
                                COACHING SOLUTIONS
                            </p>
                            <li>Career coaching & talent management</li>
                            <li>CV writing</li>
                            <li>Interview skills</li>
                            <li>Team building</li>
                            <li>Motivational talks</li>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Services;
