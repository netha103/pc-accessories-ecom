import Breadcrumb from "@/components/Admin/Breadcrumbs/Breadcrumb";
import CustomerTable from "@/components/Admin/Tables/CustomerTable";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Customers | TailAdmin - Next.js Dashboard Template",
    description: "This is Customers page for TailAdmin Next.js Dashboard Template",
};

const CustomersPage = () => {
    return (
        <div className="mx-auto max-w-7xl">
            <Breadcrumb pageName="Customers" />
            <div className="flex flex-col gap-10">
                <CustomerTable />
            </div>
        </div>
    );
};

export default CustomersPage;
