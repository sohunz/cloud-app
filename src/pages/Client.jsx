const Client = () => {
    return (
        <div className="w-full px-10">
            <div className="max-w-[1440px] flex flex-col justify-center  mx-auto">
                <div className="text-center">
                    <p className="lg:text-4xl md:text-3xl sm:text-3xl text-3xl font-bold lg:py-5 dm:py-3 sm:py-3 py-3">
                        Trusted by developers across the world
                    </p>
                    <p className="lg:text-2xl md:text-xl sm:text-xl text-lg py-5 mb-10 text-gray-500">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Accusantium ab eum rerum, impedit optio eveniet
                        nisi consectetur iste iusto officia, eos libero illo
                        molestias laboriosam, ducimus nesciunt ad qui
                        exercitationem!
                    </p>
                </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-3 grid-cols-1 lg:gap-5 md:gap-5 sm:gap-2 gap-5">
                    <div className="border flex flex-col justify-center items-center p-10 gap-3 rounded-lg">
                        <p className="lg:text-5xl md:text-4xl sm:text-4xl text-4xl font-extrabold text-blue-800">
                            100%
                        </p>
                        <p className="text-gray-500">Completion</p>
                    </div>
                    <div className="border flex flex-col justify-center items-center p-10 gap-3 rounded-lg">
                        <p className="lg:text-5xl md:text-4xl sm:text-4xl text-4xl font-extrabold text-blue-800">
                            24/7
                        </p>
                        <p className="text-gray-500">Delivery</p>
                    </div>
                    <div className="border flex flex-col justify-center items-center p-10 gap-3 rounded-lg">
                        <p className="lg:text-5xl md:text-4xl sm:text-4xl text-4xl font-extrabold text-blue-800">
                            100K
                        </p>
                        <p className="text-gray-500">Transactions</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Client;
