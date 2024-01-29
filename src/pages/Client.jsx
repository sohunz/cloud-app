const Client = () => {
    return (
        <div className=" max-w-[1440px] flex flex-col justify-center  mx-auto">
            <div className="text-center">
                <p className="text-5xl font-bold py-5">
                    Trusted by developers across the world
                </p>
                <p className="text-3xl py-5 mb-5 text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Impedit sunt voluptates nulla. Corporis delectus voluptate
                    quod modi ipsum sed sunt?
                </p>
            </div>
            <div className="grid grid-cols-3 gap-5">
                <div className="border flex flex-col justify-center items-center p-10 gap-3 rounded-lg">
                    <p className="text-5xl font-extrabold text-blue-700">
                        100%
                    </p>
                    <p className="text-gray-500">Completion</p>
                </div>
                <div className="border flex flex-col justify-center items-center p-10 gap-3 rounded-lg">
                    <p className="text-5xl font-extrabold text-blue-700">
                        24/7
                    </p>
                    <p className="text-gray-500">Delivery</p>
                </div>
                <div className="border flex flex-col justify-center items-center p-10 gap-3 rounded-lg">
                    <p className="text-5xl font-extrabold text-blue-700">
                        100K
                    </p>
                    <p className="text-gray-500">Transactions</p>
                </div>
            </div>
        </div>
    );
};

export default Client;
