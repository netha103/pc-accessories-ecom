import Breadcrumb from "@/components/Admin/Breadcrumbs/Breadcrumb";
import OrderTable from "@/components/Admin/Tables/OrderTable";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Orders | TailAdmin - Next.js Dashboard Template",
    description: "This is Orders page for TailAdmin Next.js Dashboard Template",
};

const OrdersPage = () => {
    return (
        <div className="mx-auto max-w-7xl">
            <Breadcrumb pageName="Orders" />
            <div className="flex flex-col gap-10">
                <OrderTable />
            </div>
        </div>
    );
};

export default OrdersPage;
