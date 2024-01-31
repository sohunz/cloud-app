import img from "../assets/cyber-bg.png";
import { MdOutlineSecurity } from "react-icons/md";
import { FaDatabase } from "react-icons/fa";
import { AiFillDatabase } from "react-icons/ai";
import { AiFillApi } from "react-icons/ai";

const Hero = () => {
    return (
        <div className="w-full lg:h-[640px] md:h-auto sm:h-auto h-auto flex justify-evenly items-center bg-gray-200 lg:mt-[90px] md:mt-[90px] sm:mt-[70px] mt-[70px] mb-20 px-10 lg:py-5 md:py-24 sm:py-16 py-10 ">
            <div className="w-[1440px] mx-auto">
                <div className="flex lg:flex-row md:flex-row sm:flex-row flex-col justify-between lg:items-center items-start">
                    <div className=" h-full">
                        <p className="lg:text-2xl md:text-2xl sm:text-xl text-xl pb-4">
                            Unique Sequencing & Production
                        </p>
                        <p className="lg:text-5xl md:text-4xl sm:text-2xl text-4xl font-extrabold text-blue-800">
                            Cloud Management
                        </p>
                        <p className="lg:text-2xl md:text-xl text-2xl py-5">
                            This is our Tech brand.
                        </p>
                        <button className="bg-blue-800 lg:w-[200px] md:w-[200px] sm:w-[150px] w-[100px] lg:h-[60px] md:h-[50px] sm:h-[45px] h-[45px] text-white rounded-md hover:bg-white hover:text-blue-800 hover:border-blue-800 border">
                            Get Started
                        </button>
                    </div>
                    <div className="lg:w-[40%] md:w-[40%] sm:w-[50%] w-[100%]">
                        <img src={img} />
                    </div>
                </div>

                <div className="w-full mx-auto flex flex-col justify-center items-center p-5 rounded-lg mt-7 shadow-sm bg-gray-100 pb-10">
                    <p>Data Services</p>
                    <div className=" w-full flex lg:flex-row md:flex-row sm:flex-col flex-col justify-between p-5 lg:gap-0 md:gap-0 sm:gap-3 gap-3 ">
                        <div className="flex flex-row items-center gap-2 text-lg">
                            <MdOutlineSecurity color="rgb(30 64 175" size={23} />
                            <span>App Security</span>
                        </div>
                        <div className="flex flex-row items-center gap-2 text-lg">
                            <FaDatabase color="rgb(30 64 175" size={23} />
                            <span>Dashboard Design</span>
                        </div>
                        <div className="flex flex-row items-center gap-2 text-lg">
                            <AiFillDatabase color="rgb(30 64 175" size={23} />
                            <span>Cloud Data</span>
                        </div>
                        <div className="flex flex-row items-center gap-2 text-lg">
                            <AiFillApi color="rgb(30 64 175" size={23} />
                            <span>API</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
