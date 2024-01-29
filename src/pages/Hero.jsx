import img from "../assets/cyber-bg.png";
import { MdOutlineSecurity } from "react-icons/md";
import { FaDatabase } from "react-icons/fa";
import { AiFillDatabase } from "react-icons/ai";
import { AiFillApi } from "react-icons/ai";

const Hero = () => {
    return (
        <div className="w-full h-screen bg-gray-200 mb-10 pt-[100px]">
            <div className="max-w-[1440px] mx-auto">
                <div className="flex flex-row justify-between items-center">
                    <div>
                        <p className="text-2xl pb-4">
                            Unique Sequencing & Production
                        </p>
                        <p className="text-7xl font-extrabold">
                            Cloud Management
                        </p>
                        <p className="text-2xl py-4">This is our Tech brand.</p>
                        <button className="bg-blue-600 w-[400px] h-[60px] text-white rounded-md hover:bg-white hover:text-blue-600 hover:border-blue-600 border">
                            Get Started
                        </button>
                    </div>
                    <div className="w-[40%]">
                        <img src={img} />
                    </div>
                </div>
                <div className="w-[800px] mx-auto flex flex-col justify-center items-center p-5 rounded-lg mt-7 shadow-sm bg-gray-100">
                    <p>Data Services</p>
                    <div className=" w-full flex justify-between p-5">
                        <div className="flex flex-row items-center gap-2 text-lg">
                            <MdOutlineSecurity color="blue" size={23} />
                            <span>App Security</span>
                        </div>
                        <div className="flex flex-row items-center gap-2 text-lg">
                            <FaDatabase color="blue" size={23} />
                            <span>Dashboard Design</span>
                        </div>
                        <div className="flex flex-row items-center gap-2 text-lg">
                            <AiFillDatabase color="blue" size={23} />
                            <span>Cloud Data</span>
                        </div>
                        <div className="flex flex-row items-center gap-2 text-lg">
                            <AiFillApi color="blue" size={23} />
                            <span>API</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
