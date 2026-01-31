import Image from "next/image";
import { Product } from "@/types/admin";
import { Edit, Trash2, Eye } from "lucide-react";

// Mock Data
const productData: Product[] = [
    {
        id: "1",
        image: "/images/products/product-1-sm-1.png",
        name: "Apple Watch Series 7",
        category: "Electronics",
        price: 299,
        sold: 22,
        profit: 45,
        status: "Active",
    },
    {
        id: "2",
        image: "/images/products/product-2-sm-1.png",
        name: "Macbook Pro M1",
        category: "Electronics",
        price: 1299,
        sold: 12,
        profit: 130,
        status: "Active",
    },
    {
        id: "3",
        image: "/images/products/product-3-sm-1.png",
        name: "Dell Inspiron 15",
        category: "Electronics",
        price: 899,
        sold: 64,
        profit: 120,
        status: "Out of Stock",
    },
    {
        id: "4",
        image: "/images/products/product-4-sm-1.png",
        name: "HP Probook 450",
        category: "Electronics",
        price: 499,
        sold: 72,
        profit: 50,
        status: "Active",
    },
];

const ProductTable = () => {
    return (
        <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-gray-800 sm:px-7.5 xl:pb-1">
            <div className="py-6 px-4 md:px-6 xl:px-7.5">
                <h4 className="text-xl font-semibold text-black dark:text-white">
                    All Products
                </h4>
            </div>

            <div className="flex flex-col">
                {/* Table Header */}
                <div className="grid grid-cols-6 rounded-sm bg-gray-2 dark:bg-gray-700 sm:grid-cols-8">
                    <div className="p-2.5 xl:p-5 col-span-3">
                        <h5 className="text-sm font-medium uppercase xsm:text-base">
                            Product Name
                        </h5>
                    </div>
                    <div className="p-2.5 text-center xl:p-5">
                        <h5 className="text-sm font-medium uppercase xsm:text-base">
                            Category
                        </h5>
                    </div>
                    <div className="p-2.5 text-center xl:p-5">
                        <h5 className="text-sm font-medium uppercase xsm:text-base">
                            Price
                        </h5>
                    </div>
                    <div className="hidden p-2.5 text-center sm:block xl:p-5">
                        <h5 className="text-sm font-medium uppercase xsm:text-base">
                            Sold
                        </h5>
                    </div>
                    <div className="hidden p-2.5 text-center sm:block xl:p-5">
                        <h5 className="text-sm font-medium uppercase xsm:text-base">
                            Status
                        </h5>
                    </div>
                    <div className="p-2.5 text-center xl:p-5">
                        <h5 className="text-sm font-medium uppercase xsm:text-base">
                            Actions
                        </h5>
                    </div>
                </div>

                {/* Table Body */}
                {productData.map((product, key) => (
                    <div
                        className={`grid grid-cols-6 sm:grid-cols-8 ${key === productData.length - 1
                                ? ""
                                : "border-b border-stroke dark:border-strokedark"
                            }`}
                        key={key}
                    >
                        <div className="flex items-center gap-3 p-2.5 xl:p-5 col-span-3">
                            <div className="flex-shrink-0">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    width={50}
                                    height={50}
                                    className="h-12 w-12 rounded-md object-cover"
                                />
                            </div>
                            <p className="hidden text-black dark:text-white sm:block">
                                {product.name}
                            </p>
                        </div>

                        <div className="flex items-center justify-center p-2.5 xl:p-5">
                            <p className="text-black dark:text-white">{product.category}</p>
                        </div>

                        <div className="flex items-center justify-center p-2.5 xl:p-5">
                            <p className="text-black dark:text-white">${product.price}</p>
                        </div>

                        <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                            <p className="text-black dark:text-white">{product.sold}</p>
                        </div>

                        <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                            <p
                                className={`inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium ${product.status === "Active"
                                        ? "bg-success text-success"
                                        : product.status === "Out of Stock"
                                            ? "bg-danger text-danger"
                                            : "bg-warning text-warning"
                                    }`}
                            >
                                {product.status}
                            </p>
                        </div>

                        <div className="flex items-center justify-center gap-2 p-2.5 xl:p-5">
                            <button className="hover:text-primary">
                                <Eye size={18} />
                            </button>
                            <button className="hover:text-primary">
                                <Edit size={18} />
                            </button>
                            <button className="hover:text-danger">
                                <Trash2 size={18} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductTable;
