import { RiTwitterXLine } from "react-icons/ri";
import { FaTwitch } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className="mt-[500px] border bg-blue-950 text-white">
            <div className="max-w-[1440px] mx-auto flex flex-col">
                <div className="grid grid-cols-5 py-10">
                    <div className="flex flex-col gap-2">
                        <p>SOLUTIONS</p>
                        <p>Marketing</p>
                        <p>Marketing</p>
                        <p>Marketing</p>
                        <p>Marketing</p>
                        <p>Marketing</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p>SOLUTIONS</p>
                        <p>Marketing</p>
                        <p>Marketing</p>
                        <p>Marketing</p>
                        <p>Marketing</p>
                        <p>Marketing</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p>SOLUTIONS</p>
                        <p>Marketing</p>
                        <p>Marketing</p>
                        <p>Marketing</p>
                        <p>Marketing</p>
                        <p>Marketing</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p>SOLUTIONS</p>
                        <p>Marketing</p>
                        <p>Marketing</p>
                        <p>Marketing</p>
                        <p>Marketing</p>
                        <p>Marketing</p>
                    </div>
                    <div className="flex flex-col gap-3">
                        <p>SUBSCRIBE TO OUR NEWSLETTER</p>
                        <p>
                            The latest news, articles, and resources, sent to
                            your inbox weekly.
                        </p>
                        {/* <div className="flex flex-row items-center gap-2">
                            <input
                                type="email"
                                placeholder="Enter Email"
                                className="pl-3 py-2 rounded-md text-black outline-none"
                            />
                            <button className="bg-blue-500 px-2 py-2 rounded-md">
                                Subscript
                            </button>
                        </div> */}
                    </div>
                </div>
                <hr className="w-full h-[2px] bg-gray-200 border-0 dark:bg-gray-700" />
                <div className="flex items-center justify-between py-10">
                    <div>
                        <p>2024 Workflow, LLC. All rights reserved</p>
                    </div>
                    <div className="flex items-center gap-10">
                        <RiTwitterXLine size={25} color="gray"/>
                        <FaTwitch size={25} color="gray"/>
                        <FaGithub size={25} color="gray"/>
                        <FaYoutube size={25} color="gray"/>
                        <FaInstagram size={25} color="gray"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
