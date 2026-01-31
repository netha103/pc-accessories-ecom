import Breadcrumb from "@/components/Admin/Breadcrumbs/Breadcrumb";
import TableOne from "@/components/Admin/Tables/TableOne";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "E-commerce | TailAdmin - Next.js Dashboard Template",
    description: "This is E-commerce page for TailAdmin Next.js Dashboard Template",
};

const Ecommerce = () => {
    return (
        <div className="mx-auto max-w-7xl">
            <Breadcrumb pageName="E-commerce" />

            <div className="flex flex-col gap-10">
                <TableOne />
            </div>
        </div>
    );
};

export default Ecommerce;
