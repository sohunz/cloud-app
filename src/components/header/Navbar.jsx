import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
    const [isNavbarOpen, setNavbarOpen] = useState(false);

    const toggleNavbar = () => {
        setNavbarOpen(!isNavbarOpen);
    };

    return (
        <div className=" w-full fixed bg-white top-0">
            <div className="w-full flex justify-between items-center p-5 border bg-white lg:shadow-md md:shadow-md sm:shadow-none relative transition-all duration-700 ease-in-out">
                <p className="font-bold lg:text-4xl md:text-3xl sm:text-2xl text-2xl pr-8 cursor-pointer text-blue-800">
                    BRAND
                </p>
                <div className=" w-full flex justify-between items-center">
                    <ul
                        className={`hidden lg:flex md:flex sm:hidden gap-5 transition-all duration-300 ease-in-out ${
                            isNavbarOpen ? "hidden" : ""
                        }`}
                    >
                        <li className="lg:border-none md:border-none sm:border-b border-b-gray-300 lg:py-0 md:py-0 sm:py-4 cursor-pointer">
                            Home
                        </li>
                        <li className="lg:border-none md:border-none sm:border-b border-b-gray-300 lg:py-0 md:py-0 sm:py-4 cursor-pointer">
                            About
                        </li>
                        <li className="lg:border-none md:border-none sm:border-b border-b-gray-300 lg:py-0 md:py-0 sm:py-4 cursor-pointer">
                            Support
                        </li>
                        <li className="lg:border-none md:border-none sm:border-b border-b-gray-300 lg:py-0 md:py-0 sm:py-4 cursor-pointer">
                            Platforms
                        </li>
                        <li className="lg:border-none md:border-none sm:border-b border-b-gray-300 lg:py-0 md:py-0 sm:py-4 cursor-pointer">
                            Pricing
                        </li>
                    </ul>

                    <div
                        className={`hidden lg:flex md:flex sm:hidden gap-5 items-center transition-all duration-300 ease-in-out ${
                            isNavbarOpen ? "hidden" : ""
                        }`}
                    >
                        <button className="lg:border-none md:border-none sm:border text-black rounded-md hover:text-blue-600 h-12">
                            Sign In
                        </button>
                        <button className="bg-blue-800 w-[120px] h-12 text-white rounded-md hover:bg-white hover:text-blue-800 hover:border-blue-800 border">
                            Sign Up
                        </button>
                    </div>
                </div>

                <div className="lg:hidden md:hidden sm:flex gap-5 items-center">
                    {!isNavbarOpen ? (
                        <RxHamburgerMenu
                            className="cursor-pointer transition-all duration-300 ease-in-out"
                            size={23}
                            onClick={toggleNavbar}
                        />
                    ) : (
                        <IoMdClose
                            className="cursor-pointer transition-all duration-300 ease-in-out"
                            size={23}
                            onClick={toggleNavbar}
                        />
                    )}
                </div>

                {isNavbarOpen && (
                    <div className="lg:hidden md:hidden sm:flex flex-col justify-between items-start gap-5 absolute top-full left-0 bg-gray-100 w-full p-5 transition-all duration-300 ease-in-out rounded-xl pb-10">
                        <ul className="w-full flex flex-col gap-5">
                            <li className="border-b border-b-gray-300 py-4">
                                Home
                            </li>
                            <li className="border-b border-b-gray-300 py-4">
                                About
                            </li>
                            <li className="border-b border-b-gray-300 py-4">
                                Support
                            </li>
                            <li className="border-b border-b-gray-300 py-4">
                                Platforms
                            </li>
                            <li className="border-b border-b-gray-300 py-4">
                                Pricing
                            </li>
                        </ul>

                        <div className="w-full flex flex-col gap-5 items-center">
                            <button className="border border-blue-800 text-black rounded-md hover:text-blue-800 w-full h-12">
                                Sign In
                            </button>
                            <button className="bg-blue-800 w-full h-12 text-white rounded-md hover:bg-white hover:text-blue-800 hover:border-blue-800 border">
                                Sign Up
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
