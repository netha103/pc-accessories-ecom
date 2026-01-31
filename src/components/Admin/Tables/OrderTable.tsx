import { Order } from "@/types/admin";
import { Eye, Trash2 } from "lucide-react";

const ordersData: Order[] = [
    {
        id: "#1234",
        customerName: "John Doe",
        productName: "Macbook Pro",
        quantity: 1,
        amount: 1299,
        status: "Pending",
        date: "Jan 12, 2025",
    },
    {
        id: "#1235",
        customerName: "Jane Smith",
        productName: "Apple Watch",
        quantity: 2,
        amount: 598,
        status: "Shipped",
        date: "Jan 11, 2025",
    },
    {
        id: "#1236",
        customerName: "Alice Brown",
        productName: "Dell Inspiron",
        quantity: 1,
        amount: 899,
        status: "Delivered",
        date: "Jan 10, 2025",
    },
    {
        id: "#1237",
        customerName: "Bob Johnson",
        productName: "HP Probook",
        quantity: 1,
        amount: 499,
        status: "Cancelled",
        date: "Jan 09, 2025",
    },
];

const OrderTable = () => {
    return (
        <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-gray-800 sm:px-7.5 xl:pb-1">
            <div className="py-6 px-4 md:px-6 xl:px-7.5">
                <h4 className="text-xl font-semibold text-black dark:text-white">
                    All Orders
                </h4>
            </div>

            <div className="max-w-full overflow-x-auto">
                <table className="w-full table-auto">
                    <thead>
                        <tr className="bg-gray-2 text-left dark:bg-gray-700">
                            <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                                Order ID
                            </th>
                            <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                                Customer
                            </th>
                            <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white">
                                Product
                            </th>
                            <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                                Total
                            </th>
                            <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                                Status
                            </th>
                            <th className="py-4 px-4 font-medium text-black dark:text-white">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {ordersData.map((order, key) => (
                            <tr key={key}>
                                <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                                    <h5 className="font-medium text-black dark:text-white">
                                        {order.id}
                                    </h5>
                                    <p className="text-sm">{order.date}</p>
                                </td>
                                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                                    <p className="text-black dark:text-white">
                                        {order.customerName}
                                    </p>
                                </td>
                                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                                    <h5 className="font-medium text-black dark:text-white">
                                        {order.productName}
                                    </h5>
                                    <p className="text-sm">Qty: {order.quantity}</p>
                                </td>
                                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                                    <p className="text-black dark:text-white">
                                        ${order.amount}
                                    </p>
                                </td>
                                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                                    <p
                                        className={`inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium ${order.status === "Delivered"
                                                ? "bg-success text-success"
                                                : order.status === "Cancelled"
                                                    ? "bg-danger text-danger"
                                                    : order.status === "Shipped"
                                                        ? "bg-primary text-primary"
                                                        : "bg-warning text-warning"
                                            }`}
                                    >
                                        {order.status}
                                    </p>
                                </td>
                                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                                    <div className="flex items-center space-x-3.5">
                                        <button className="hover:text-primary">
                                            <Eye size={18} />
                                        </button>
                                        <button className="hover:text-danger">
                                            <Trash2 size={18} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default OrderTable;
