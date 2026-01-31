import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { User, Settings, LogOut } from "lucide-react";
import { useSession, signOut } from "next-auth/react";

const DropdownUser = () => {
    const { data: session } = useSession();
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const trigger = useRef<any>(null);
    const dropdown = useRef<any>(null);

    // close on click outside
    useEffect(() => {
        const clickHandler = ({ target }: MouseEvent) => {
            if (!dropdown.current) return;
            if (
                !dropdownOpen ||
                dropdown.current.contains(target) ||
                trigger.current.contains(target)
            )
                return;
            setDropdownOpen(false);
        };
        document.addEventListener("click", clickHandler);
        return () => document.removeEventListener("click", clickHandler);
    });

    // close if the esc key is pressed
    useEffect(() => {
        const keyHandler = ({ keyCode }: KeyboardEvent) => {
            if (!dropdownOpen || keyCode !== 27) return;
            setDropdownOpen(false);
        };
        document.addEventListener("keydown", keyHandler);
        return () => document.removeEventListener("keydown", keyHandler);
    });

    return (
        <div className="relative">
            <Link
                ref={trigger}
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-4"
                href="#"
            >
                <span className="hidden text-right lg:block">
                    <span className="block text-sm font-medium text-black dark:text-white">
                        {session?.user?.name || "Admin User"}
                    </span>
                    <span className="block text-xs">{session?.user?.email || "UX Designer"}</span>
                </span>

                <span className="h-12 w-12 rounded-full overflow-hidden border border-stroke dark:border-strokedark">
                    <Image
                        width={112}
                        height={112}
                        src="/images/users/user-01.jpg"
                        style={{
                            width: "auto",
                            height: "auto",
                        }}
                        alt="User"
                    />
                </span>
            </Link>

            {/* <!-- Dropdown Start --> */}
            <div
                ref={dropdown}
                onFocus={() => setDropdownOpen(true)}
                onBlur={() => setDropdownOpen(false)}
                className={`absolute right-0 mt-4 flex w-62.5 flex-col rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark ${dropdownOpen ? "block" : "hidden"
                    }`}
            >
                <ul className="flex flex-col gap-5 border-b border-stroke px-6 py-7.5 dark:border-strokedark">
                    <li>
                        <Link
                            href="/admin/profile"
                            className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
                        >
                            <User size={22} className="text-black dark:text-white" />
                            My Profile
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/admin/settings"
                            className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
                        >
                            <Settings size={22} className="text-black dark:text-white" />
                            Account Settings
                        </Link>
                    </li>
                </ul>
                <button
                    onClick={() => signOut()}
                    className="flex items-center gap-3.5 px-6 py-4 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
                >
                    <LogOut size={22} className="text-black dark:text-white" />
                    Log Out
                </button>
            </div>
            {/* <!-- Dropdown End --> */}
        </div>
    );
};

export default DropdownUser;
