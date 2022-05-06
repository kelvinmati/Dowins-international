import React from "react";

const Footer = () => {
    return (
        <div className="pt-10 bg-blue text-white ">
            <div className="w-container_width mx-auto grid md:grid-cols-3 gap-16 md:gap-2  justify-center ">
                <div className=" flex flex-col  items-center">
                    <div className="bg-white">
                        <img
                            src="https://res.cloudinary.com/kelvin45/image/upload/q_auto/c_scale,h_140,w_198/v1651792128/logos/logo_qhsxkh.png"
                            alt=""
                        />
                    </div>
                    <div>
                        <p className="text-lg text-center mb-3">
                            Follow us on:
                        </p>
                        <div className="flex space-x-3">
                            <div className="h-8 w-8  ">
                                <img
                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIUAAACFCAMAAABCBMsOAAAAXVBMVEX///8dofIAnfIAmvEVn/IAmPHo9f7y+v7s9/76/f+x2/ql1fkfpPNzv/a/4ftHr/SUzvic0fnc7/2Gx/d+xPdYtfU0qPONy/hsvPbU6/zK5vtiufW43vo9rPQAlPEnaQP/AAAEzUlEQVR4nO2b27qDKAxGS0g9YqlWrcd5/8cc2W33bqsgQfzmYlzXFH+TkASkp9PBwcHBwcHBwcEBkeBy70chRC2z6yX6TyREScUAENkEIgCTSaAZuZuG8F4/FbyYlNT3hQdGTbKXiKTmbAHOvp8YXRkz2SLunDUEclGDMgjI4m1gWwLwu/F1eOsooqtBI0LpEM+3iwMVOMi4JloegySMbmGTfMbDTAYO06AgbQRX4+BmmuvCGYyxg4iUG0Uor9wacebP1TOGpsmayapQGYcsq4cVEer9fz2GaIy+qP4Z3lOtUdTrIt7guXG27jEZSJo1YkkTYQyK0yl/Gg0kKURzw+qYA+VTezss27x/vRNI00r6IqRZ4v7z7DDpheYZ4k8ws09fd122WgDZoKyQ9sDPusz0vuZhsBQRCYIt5NBde6HqHWhD9GPRw80uRlOCKVitFDxm1074ueotg6OihMVrLO/1E37lHsR0PXMUFIf8vaBhRvY9ITSr5khIy/Q5bWWadp4CQaQrKu50FSuuzuYzIq8vRhWksHhawuznxSSI0Jt6jpGqAsqVYOuWZwRoCu1vxOJPtOB5zcWnsNb9llc6v1jU9A8scnKpDTWEMV2MKZoKFBapsDPkQQSRXeYupWiwVBEbIx6Bi2z4sggtLtC4A3hxWSkK03ZLVHn3pqQnesSqc1lf/lM5xLoq0zaIlX9oWcvKI1NZsHu1yTkchOyzW08RwZidilNq/26Iyi4kEVhbiTjFC2ncH2gqpu+E444ysFp9fvHIa6HcTwZkqypa3ncqeKJ+Nxlg3Ks/bHFGPt4vUzK4OvRPdipWa9kpPKtxnIuqlHupsChmr47PfAqwART6FuEXet9EpbZo62kbTgcsFupU2HcWYbNEVMLaWQW32nbednYJWO32in1FoLQ7Jdq1lK0c7b0Zg7IBp6swb7D+uO5qDNvzsj0LKhqOC759QtxsEbA+HjqpPcleedwmff/iciJhg0WH8yFjn5rKbVfIk1bsYQ7LlPVH1FC34uvojxb1DNKzDgT6p4aJRJ59rpbX8TeZ4NrrjlUcsOj1PmmLKAzDKGhzb10wcZkq7v8wIcTUjvuLDSCb4hSA2gn7EvAjwrKmf5B5XqeILl8mW89ZC64OIkyHfS6g09fRKTLIR7omrHusby4ejeGwSl/kZ38yNty1aHxZg9JizYgzP/34Bn/8cPPhFCR+qJ4zmO5UWIrQfbslUPQbKwk6L9IPhpFvqSiOSXNOlwnn2spdW5sFgkspp3aHvl2Cxi1z64iDoiN3PG6Xa4y05G/ILldrzIT57Lvzugjfl+Q6+k4ezPeQ6LQNPYlyz4FZZGRnqI2YVxFFyehZHGf3B7cQpJVLwoLa/U7iF3GRVtSvYk8RmXNcvrkxjsMiLaUApwKyfmPDQJfd8jRJ0ustq0bGuZsExs79pkoeZdOjFdPjnYsoH7d0dw9zVBubCRC5j3Q5jGdnHQhQbm+rHkz2cGrykIubx7IRd6WgHuFMZpCp79IVpCPYRwgisKzz3kgoilwCX3cNqnshTeK7jfgjDtJsZHqbqOsGIKpy2E/Ck6hVKRQfSQTx7fGTuLq/XopdHLFEXHRJfusrqf4Hof4JUU1Zdmh9LcqDg4ODg4ODg4P/Bf8CfuU9nADjJNUAAAAASUVORK5CYII="
                                    alt=""
                                    className="rounded"
                                />
                            </div>
                            <div className="h-8 w-8">
                                <img
                                    src="data:image/jpeg;base64,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"
                                    alt=""
                                    className="rounded"
                                />
                            </div>
                            <div className="h-8 w-8">
                                <img
                                    src="data:image/jpeg;base64,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"
                                    alt=""
                                    className="rounded"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="space-y-1.5 flex flex-col  items-center md:block">
                    <p className="text-xl">QUICK LINKS</p>
                    <li className="list-none">Home</li>
                    <li className="list-none">What we do</li>
                    <li className="list-none">Why us</li>
                    <li className="list-none">Contact</li>
                </div>
                <div className="space-y-1.5 flex flex-col   md:block">
                    <p className="text-xl text-center md:text-left">ADDRESS</p>
                    <div className="flex items-center space-x-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-orange"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                        </svg>
                        <span> P.O Box 469-00515 ,Nairobi,Kenya</span>
                    </div>
                    <div className="flex items-center space-x-2 ">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-orange"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M16 8l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z"
                            />
                        </svg>
                        <span>+254-714-272665</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-orange"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                        </svg>
                        <span>dowinsinternational_254@yahoo.com</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-orange"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                        </svg>
                        <span>info@dowinsinternational.com</span>
                    </div>
                </div>
            </div>
            <div className="w-container_width mx-auto text-center py-5">
                <hr />
                <p className="py-2"> Copyright @2022.All rights reserved</p>
            </div>
        </div>
    );
};

export default Footer;
