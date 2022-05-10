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
                <div className="w-mobile_width md:w-container_width mx-auto  grid md:grid-cols-2 gap-3">
                    <div className="shadow-sm rounded bg-white p-3">
                        <div className="flex  h-46">
                            <img
                                src="https://res.cloudinary.com/kelvin45/image/upload/v1652050741/Dowins/meeting_zprh5w.jpg"
                                alt=""
                                className="object-cover w-full"
                            />
                        </div>
                        <div>
                            <p className="text-lg py-2 font-semibold">
                                Business consultancy services
                            </p>
                            <p className="text-gray-700">
                                {" "}
                                <span className="text-orange">
                                    Management & Strategy
                                </span>{" "}
                                - If you're looking to expand your markets
                                geographically, extend your product portfolio,
                                reorganize your middle market company to promote
                                efficiency and cost-effectiveness, buy out a
                                smaller competitor, or increase your overall
                                capabilities, then check out on us for
                                assistance.
                            </p>
                            <p className="text-gray-700">
                                {" "}
                                <span className="text-orange">
                                    Operations
                                </span>{" "}
                                -We help our customers improve the quality and
                                efficiency of their production processes.
                            </p>
                        </div>
                    </div>
                    <div className="shadow-sm rounded bg-white p-3">
                        <div className="flex  h-46">
                            <img
                                src="https://images.unsplash.com/photo-1557425955-df376b5903c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y29hY2hpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                                alt=""
                                className="object-cover w-full"
                            />
                        </div>
                        <div>
                            <p className="text-lg py-2 font-semibold">
                                Home/Private schooling services
                            </p>
                            <p className="text-gray-700">
                                {" "}
                                <span className="text-orange">
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
                                <span className="text-orange">
                                    Performance counselling
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
                    <div className="shadow-sm rounded bg-white p-3">
                        <div className="flex  h-46">
                            <img
                                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhaW5pbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                                alt=""
                                className="object-cover w-full"
                            />
                        </div>
                        <div className="text-gray-700">
                            <p className="  text-lg py-2 font-semibold">
                                Training solutions
                            </p>
                            <p>
                                Training is a very important component of an
                                organization.
                            </p>

                            <p className="text-orange">
                                We mainly focus on the following areas;
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
                    </div>
                    <div className="shadow-sm rounded bg-white p-3">
                        <div className="flex  h-46">
                            <img
                                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y29hY2hpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                                alt=""
                                className="object-cover w-full"
                            />
                        </div>
                        <div className="text-gray-700">
                            <p className="text-lg py-2 font-semibold">
                                Coaching solutions
                            </p>
                            <p>
                                Coaching is also a very important component of
                                an organization.
                            </p>

                            <p className="text-orange">
                                We mainly focus on the following areas;
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
