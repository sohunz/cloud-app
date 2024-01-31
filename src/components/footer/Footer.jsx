import { RiTwitterXLine } from "react-icons/ri";
import { FaTwitch } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className="mt-32 border bg-blue-950 text-white px-10">
        <div>
            <div className="max-w-[1440px] mx-auto flex flex-col">
                <div className="grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-2 md:gap-5 gap-10 py-10">
                    <div className="flex flex-col gap-2 items-center">
                        <p>SOLUTIONS</p>
                        <p>Marketing</p>
                        <p>Marketing</p>
                        <p>Marketing</p>
                        <p>Marketing</p>
                        <p>Marketing</p>
                    </div>
                    <div className="flex flex-col gap-2 items-center">
                        <p>SOLUTIONS</p>
                        <p>Marketing</p>
                        <p>Marketing</p>
                        <p>Marketing</p>
                        <p>Marketing</p>
                        <p>Marketing</p>
                    </div>
                    <div className="flex flex-col gap-2 items-center">
                        <p>SOLUTIONS</p>
                        <p>Marketing</p>
                        <p>Marketing</p>
                        <p>Marketing</p>
                        <p>Marketing</p>
                        <p>Marketing</p>
                    </div>
                    <div className="flex flex-col gap-2 items-center">
                        <p>SOLUTIONS</p>
                        <p>Marketing</p>
                        <p>Marketing</p>
                        <p>Marketing</p>
                        <p>Marketing</p>
                        <p>Marketing</p>
                    </div>
                </div>
                <hr className="w-full h-[2px] bg-gray-200 border-0 dark:bg-gray-700" />
                <div className="flex lg:flex-row md:flex-row sm:flex-row flex-col items-center justify-between py-10 lg:gap-0 md:gap-0 sm:gap-0 gap-5">
                    <div>
                        <p>2024 Workflow, LLC. All rights reserved</p>
                    </div>
                    <div className="flex items-center lg:gap-10 md:gap-5 sm:gap-5 gap-5">
                        <RiTwitterXLine size={25} color="gray" />
                        <FaTwitch size={25} color="gray" />
                        <FaGithub size={25} color="gray" />
                        <FaYoutube size={25} color="gray" />
                        <FaInstagram size={25} color="gray" />
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Footer;
