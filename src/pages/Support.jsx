import support from "../assets/support.jpg";
import { LiaPhoneSolid } from "react-icons/lia";
import { IoIosArrowRoundForward } from "react-icons/io";
import { MdSupport } from "react-icons/md";
import { HiChip } from "react-icons/hi";

const Support = () => {
    return (
        <div className="w-full h-screen mt-24 mb-36">
            <div className="w-full h-[700px] bg-gray-900/90 absolute">
                <img
                    src={support}
                    className="w-full h-full object-cover mix-blend-overlay"
                />
            </div>
            <div className="max-w-[1440px] mx-auto text-white relative">
                <p className="text-3xl font-bold text-center pt-24">SUPPORT</p>
                <p className="text-5xl font-bold text-center py-10">
                    Finding the right team
                </p>
                <p className="text-3xl">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                    repudiandae veritatis ratione error tenetur, voluptates
                    architecto possimus ad! Omnis minima ea quidem quisquam unde
                    beatae, minus illo et cum vel?
                </p>
                <div className="grid grid-cols-3 gap-10 absolute top-[470px]">
                    <div className="border bg-white text-black p-10 rounded-xl relative flex flex-col justify-between">
                        <div className="w-[70px] h-[70px] bg-blue-700 rounded-md flex justify-center items-center absolute top-[-35px]">
                            <LiaPhoneSolid
                                size={45}
                                className=" "
                                color="white"
                            />
                        </div>
                        <div>
                            <p className="text-3xl pt-7 font-bold">Sale</p>
                            <p className="text-xl py-7">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Excepturi provident iure
                                placeat blanditiis ea sint earum hic iste
                                quibusdam exercitationem.
                            </p>
                        </div>
                        <div className="flex items-center gap-2 text-blue-500">
                            <p>Contact Us</p>
                            <IoIosArrowRoundForward />
                        </div>
                    </div>
                    <div className="border bg-white text-black p-10 rounded-xl relative flex flex-col justify-between">
                        <div className="w-[70px] h-[70px] bg-blue-700 rounded-md flex justify-center items-center absolute top-[-35px]">
                            <MdSupport size={45} className=" " color="white" />
                        </div>
                        <div>
                            <p className="text-3xl pt-7 font-bold">
                                Technical Support
                            </p>
                            <p className="text-xl py-7">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Excepturi provident iure
                                placeat blanditiis ea sint earum hic iste
                                quibusdam exercitationem.
                            </p>
                        </div>
                        <div className="flex items-center gap-2 text-blue-500">
                            <p>Contact Us</p>
                            <IoIosArrowRoundForward />
                        </div>
                    </div>
                    <div className="border bg-white text-black p-10 rounded-xl relative flex flex-col justify-between">
                        <div className="w-[70px] h-[70px] bg-blue-700 rounded-md flex justify-center items-center absolute top-[-35px]">
                            <HiChip size={45} className=" " color="white" />
                        </div>
                        <div>
                            <p className="text-3xl pt-7 font-bold">
                                Media Inquiries
                            </p>
                            <p className="text-xl py-7">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Excepturi provident iure
                                placeat blanditiis ea sint earum hic iste
                                quibusdam exercitationem.
                            </p>
                        </div>
                        <div className="flex items-center gap-2 text-blue-500">
                            <p>Contact Us</p>
                            <IoIosArrowRoundForward />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Support;
