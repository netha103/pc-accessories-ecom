import { BRAND } from "@/types/brand";
import { Github, Facebook, Twitter, Chrome, Youtube } from "lucide-react";

const brandData: BRAND[] = [
    {
        icon: <Chrome className="text-blue-500" />,
        name: "Google",
        visitors: 3.5,
        revenues: "5,768",
        sales: 590,
        conversion: 4.8,
    },
    {
        icon: <Twitter className="text-blue-400" />,
        name: "Twitter",
        visitors: 2.2,
        revenues: "4,635",
        sales: 467,
        conversion: 4.3,
    },
    {
        icon: <Github className="text-black dark:text-white" />,
        name: "Github",
        visitors: 2.1,
        revenues: "4,290",
        sales: 420,
        conversion: 3.7,
    },
    {
        icon: <Youtube className="text-red-500" />,
        name: "Vimeo",
        visitors: 1.5,
        revenues: "3,580",
        sales: 389,
        conversion: 2.5,
    },
    {
        icon: <Facebook className="text-blue-600" />,
        name: "Facebook",
        visitors: 3.5,
        revenues: "6,768",
        sales: 390,
        conversion: 4.2,
    },
];

const TableOne = () => {
    return (
        <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-gray-800 sm:px-7.5 xl:pb-1">
            <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
                Top Channels
            </h4>

            <div className="flex flex-col">
                <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-gray-700 sm:grid-cols-5">
                    <div className="p-2.5 xl:p-5">
                        <h5 className="text-sm font-medium uppercase xsm:text-base">
                            Source
                        </h5>
                    </div>
                    <div className="p-2.5 text-center xl:p-5">
                        <h5 className="text-sm font-medium uppercase xsm:text-base">
                            Visitors
                        </h5>
                    </div>
                    <div className="p-2.5 text-center xl:p-5">
                        <h5 className="text-sm font-medium uppercase xsm:text-base">
                            Revenues
                        </h5>
                    </div>
                    <div className="hidden p-2.5 text-center sm:block xl:p-5">
                        <h5 className="text-sm font-medium uppercase xsm:text-base">
                            Sales
                        </h5>
                    </div>
                    <div className="hidden p-2.5 text-center sm:block xl:p-5">
                        <h5 className="text-sm font-medium uppercase xsm:text-base">
                            Conversion
                        </h5>
                    </div>
                </div>

                {brandData.map((brand, key) => (
                    <div
                        className={`grid grid-cols-3 sm:grid-cols-5 ${key === brandData.length - 1
                                ? ""
                                : "border-b border-stroke dark:border-strokedark"
                            }`}
                        key={key}
                    >
                        <div className="flex items-center gap-3 p-2.5 xl:p-5">
                            <div className="flex-shrink-0">
                                {brand.icon}
                            </div>
                            <p className="hidden text-black dark:text-white sm:block">
                                {brand.name}
                            </p>
                        </div>

                        <div className="flex items-center justify-center p-2.5 xl:p-5">
                            <p className="text-black dark:text-white">{brand.visitors}K</p>
                        </div>

                        <div className="flex items-center justify-center p-2.5 xl:p-5">
                            <p className="text-green-500">${brand.revenues}</p>
                        </div>

                        <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                            <p className="text-black dark:text-white">{brand.sales}</p>
                        </div>

                        <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                            <p className="text-blue-500">{brand.conversion}%</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TableOne;
