"use client";
import React from 'react';
import {
    Users,
    ShoppingBag,
    DollarSign,
    Eye,
    ArrowUp,
    ArrowDown
} from 'lucide-react';
// We can integrate ApexCharts here later

const CardDataStats = ({
    title,
    total,
    rate,
    levelUp,
    children,
}: {
    title: string;
    total: string;
    rate: string;
    levelUp?: boolean;
    children: React.ReactNode;
}) => {
    return (
        <div className="rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-sm dark:border-strokedark dark:bg-gray-800">
            <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 text-indigo-600 dark:text-indigo-400">
                {children}
            </div>

            <div className="mt-4 flex items-end justify-between">
                <div>
                    <h4 className="text-title-md font-bold text-black dark:text-white">
                        {total}
                    </h4>
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">{title}</span>
                </div>

                <span
                    className={`flex items-center gap-1 text-sm font-medium ${levelUp ? 'text-green-500' : 'text-red-500'
                        }`}
                >
                    {rate}

                    {levelUp ? (
                        <ArrowUp size={14} />
                    ) : (
                        <ArrowDown size={14} />
                    )}
                </span>
            </div>
        </div>
    );
};

export default function AdminDashboard() {
    return (
        <>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
                <CardDataStats title="Total views" total="$3.456K" rate="0.43%" levelUp>
                    <Eye size={22} />
                </CardDataStats>
                <CardDataStats title="Total Profit" total="$45.2K" rate="4.35%" levelUp>
                    <DollarSign size={22} />
                </CardDataStats>
                <CardDataStats title="Total Product" total="2.450" rate="2.59%" levelUp>
                    <ShoppingBag size={22} />
                </CardDataStats>
                <CardDataStats title="Total Users" total="3.456" rate="0.95%" levelUp={false}>
                    <Users size={22} />
                </CardDataStats>
            </div>

            <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
                <div className="col-span-12 xl:col-span-8 rounded-sm border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-sm dark:border-strokedark dark:bg-gray-800 sm:px-7.5">
                    <h3 className="text-xl font-bold text-black dark:text-white mb-4">Revenue Overview</h3>
                    <div className="h-80 bg-gray-50 dark:bg-gray-700 flex items-center justify-center text-gray-400">
                        Chart Placeholder (Install ApexCharts)
                    </div>
                </div>
                <div className="col-span-12 xl:col-span-4 rounded-sm border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-sm dark:border-strokedark dark:bg-gray-800 sm:px-7.5">
                    <h3 className="text-xl font-bold text-black dark:text-white mb-4">Visitors Analytics</h3>
                    <div className="h-80 bg-gray-50 dark:bg-gray-700 flex items-center justify-center text-gray-400">
                        Chart Placeholder
                    </div>
                </div>
            </div>
        </>
    );
}
