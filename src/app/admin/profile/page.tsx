import Breadcrumb from "@/components/Admin/Breadcrumbs/Breadcrumb";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Profile | TailAdmin - Next.js Dashboard Template",
    description: "This is Profile page for TailAdmin Next.js Dashboard Template",
};

const Profile = () => {
    return (
        <div className="mx-auto max-w-242.5">
            <Breadcrumb pageName="Profile" />

            <div className="overflow-hidden rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-gray-800">
                <div className="relative z-20 h-35 md:h-65">
                    <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-blue-500 to-indigo-600 opacity-90"></div>
                </div>
                <div className="px-4 pb-6 text-center lg:pb-8 xl:pb-11.5">
                    <div className="relative mx-auto -mt-22 h-30 w-30 rounded-full bg-white/20 p-1 backdrop-blur sm:h-44 sm:w-44 sm:p-3">
                        <div className="relative drop-shadow-2">
                            <Image
                                src={"/images/users/user-01.jpg"}
                                width={160}
                                height={160}
                                className="rounded-full"
                                alt="profile"
                            />
                        </div>
                    </div>
                    <div className="mt-4">
                        <h3 className="mb-1.5 text-2xl font-semibold text-black dark:text-white">
                            Danish Heilium
                        </h3>
                        <p className="font-medium">Ui/Ux Designer</p>
                        <div className="mx-auto mt-4.5 mb-5.5 grid max-w-94 grid-cols-3 rounded-md border border-stroke py-2.5 shadow-1 dark:border-strokedark dark:bg-[#37404F]">
                            <div className="flex flex-col items-center justify-center gap-1 border-r border-stroke px-4 dark:border-strokedark xsm:flex-row">
                                <span className="font-semibold text-black dark:text-white">
                                    259
                                </span>
                                <span className="text-sm">Posts</span>
                            </div>
                            <div className="flex flex-col items-center justify-center gap-1 border-r border-stroke px-4 dark:border-strokedark xsm:flex-row">
                                <span className="font-semibold text-black dark:text-white">
                                    129K
                                </span>
                                <span className="text-sm">Followers</span>
                            </div>
                            <div className="flex flex-col items-center justify-center gap-1 px-4 xsm:flex-row">
                                <span className="font-semibold text-black dark:text-white">
                                    2K
                                </span>
                                <span className="text-sm">Following</span>
                            </div>
                        </div>

                        <div className="mx-auto max-w-180">
                            <h4 className="font-semibold text-black dark:text-white">
                                About Me
                            </h4>
                            <p className="mt-4.5">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Pellentesque posuere fermentum urna, eu condimentum mauris
                                tempus ut. Donec fermentum blandit aliquet. Etiam dictum dapibus
                                ultricies. Sed vel aliquet libero. Nunc a augue fermentum,
                                pharetra ligula sed, aliquam lacus.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
