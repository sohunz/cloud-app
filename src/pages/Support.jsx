import support from "../assets/support.jpg";
import { LiaPhoneSolid } from "react-icons/lia";
import { IoIosArrowRoundForward } from "react-icons/io";
import { MdSupport } from "react-icons/md";
import { HiChip } from "react-icons/hi";

const Support = () => {
    return (
        <div className="w-full px-10 relative bg-gray-200">
            <div className="max-w-[1440px] mx-auto h-auto mt-24 mb-20 z-10 pb-10">
                <div className="w-full h-[700px] bg-gray-900/90 absolute left-0">
                    <img
                        src={support}
                        className="w-full h-full object-cover mix-blend-overlay"
                    />
                </div>
                <div className="max-w-[1440px] mx-auto text-white relative">
                    <p className="text-2xl font-bold text-center pt-24">
                        SUPPORT
                    </p>
                    <p className="lg:text-4xl md:text-3xl sm:text-3xl text-3xl font-bold text-center lg:py-10 md:py-5 sm:py-5 py-5">
                        Finding the right team
                    </p>
                    <p className="lg:text-2xl md:text-xl sm:text-xl">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Officia facilis, eaque non eligendi nesciunt iusto
                        eveniet nulla doloribus est nam eius velit. Amet, ab.
                        Iste, dolorem ab consequuntur illo porro voluptates quod
                        exercitationem recusandae tempore magni ipsum molestiae
                        officia? Consequuntur rerum nobis quis temporibus natus
                        corrupti architecto cum, quae facere!
                    </p>
                    <div className="grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 grid-cols-1 lg:gap-5 md:gap-16 sm:gap-16 gap-16 mt-20">
                        <div className="border bg-white text-black p-10 rounded-xl relative flex flex-col justify-between">
                            <div className="w-[70px] h-[70px] bg-blue-700 rounded-md flex justify-center items-center absolute top-[-35px]">
                                <LiaPhoneSolid
                                    size={45}
                                    className=" "
                                    color="white"
                                />
                            </div>
                            <div>
                                <p className="lg:text-2xl md:text-xl pt-7 font-bold">
                                    Sale
                                </p>
                                <p className="lg:text-lg md:text-md lg:py-7 md:py-3">
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
                                <MdSupport
                                    size={45}
                                    className=" "
                                    color="white"
                                />
                            </div>
                            <div>
                                <p className="lg:text-2xl md:text-xl pt-7 font-bold">
                                    Technical Support
                                </p>
                                <p className="lg:text-lg md:text-md lg:py-7 md:py-3">
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
                                <p className="lg:text-2xl md:text-xl pt-7 font-bold">
                                    Media Inquiries
                                </p>
                                <p className="lg:text-lg md:text-md lg:py-7 md:py-3">
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
        </div>
    );
};

export default Support;
