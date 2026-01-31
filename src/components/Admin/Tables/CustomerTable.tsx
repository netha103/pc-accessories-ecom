import { Customer } from "@/types/admin";
import Image from "next/image";

const customerData: Customer[] = [
    {
        id: "1",
        avatar: "/images/users/user-01.jpg",
        name: "John Doe",
        email: "john@example.com",
        orders: 45,
        totalSpent: 4500,
        status: "Active",
        joinDate: "Jan 12, 2024",
    },
    {
        id: "2",
        avatar: "/images/users/user-02.jpg",
        name: "Jane Smith",
        email: "jane@example.com",
        orders: 22,
        totalSpent: 2200,
        status: "Active",
        joinDate: "Feb 15, 2024",
    },
    {
        id: "3",
        avatar: "/images/users/user-03.jpg",
        name: "Alice Brown",
        email: "alice@example.com",
        orders: 10,
        totalSpent: 1500,
        status: "Inactive",
        joinDate: "Mar 10, 2024",
    },
    {
        id: "4",
        avatar: "/images/users/user-04.jpg",
        name: "Bob Johnson",
        email: "bob@example.com",
        orders: 5,
        totalSpent: 500,
        status: "Blocked",
        joinDate: "Apr 05, 2024",
    },
];

const CustomerTable = () => {
    return (
        <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-gray-800 sm:px-7.5 xl:pb-1">
            <div className="py-6 px-4 md:px-6 xl:px-7.5">
                <h4 className="text-xl font-semibold text-black dark:text-white">
                    All Customers
                </h4>
            </div>

            <div className="flex flex-col">
                {/* Table Header */}
                <div className="grid grid-cols-6 rounded-sm bg-gray-2 dark:bg-gray-700 sm:grid-cols-7">
                    <div className="p-2.5 xl:p-5 col-span-2">
                        <h5 className="text-sm font-medium uppercase xsm:text-base">
                            Name
                        </h5>
                    </div>
                    <div className="p-2.5 text-center xl:p-5 col-span-2">
                        <h5 className="text-sm font-medium uppercase xsm:text-base">
                            Email
                        </h5>
                    </div>
                    <div className="p-2.5 text-center xl:p-5">
                        <h5 className="text-sm font-medium uppercase xsm:text-base">
                            Orders
                        </h5>
                    </div>
                    <div className="hidden p-2.5 text-center sm:block xl:p-5">
                        <h5 className="text-sm font-medium uppercase xsm:text-base">
                            Spent
                        </h5>
                    </div>
                    <div className="hidden p-2.5 text-center sm:block xl:p-5">
                        <h5 className="text-sm font-medium uppercase xsm:text-base">
                            Status
                        </h5>
                    </div>
                </div>

                {/* Table Body */}
                {customerData.map((customer, key) => (
                    <div
                        className={`grid grid-cols-6 sm:grid-cols-7 ${key === customerData.length - 1
                                ? ""
                                : "border-b border-stroke dark:border-strokedark"
                            }`}
                        key={key}
                    >
                        <div className="flex items-center gap-3 p-2.5 xl:p-5 col-span-2">
                            <div className="h-10 w-10 shrink-0 rounded-full overflow-hidden">
                                <div className="h-full w-full bg-gray-100 dark:bg-gray-700"></div>
                                {/* 
                <Image
                  src={customer.avatar}
                  alt="User"
                  width={40}
                  height={40}
                /> */}
                            </div>
                            <p className="hidden text-black dark:text-white sm:block">
                                {customer.name}
                            </p>
                        </div>

                        <div className="flex items-center justify-center p-2.5 xl:p-5 col-span-2">
                            <p className="text-black dark:text-white">{customer.email}</p>
                        </div>

                        <div className="flex items-center justify-center p-2.5 xl:p-5">
                            <p className="text-black dark:text-white">{customer.orders}</p>
                        </div>

                        <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                            <p className="text-meta-3">${customer.totalSpent}</p>
                        </div>

                        <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                            <p
                                className={`inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium ${customer.status === "Active"
                                        ? "bg-success text-success"
                                        : customer.status === "Blocked"
                                            ? "bg-danger text-danger"
                                            : "bg-warning text-warning"
                                    }`}
                            >
                                {customer.status}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CustomerTable;
