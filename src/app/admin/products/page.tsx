import Breadcrumb from "@/components/Admin/Breadcrumbs/Breadcrumb";
import ProductTable from "@/components/Admin/Tables/ProductTable";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Products | TailAdmin - Next.js Dashboard Template",
    description: "This is Products page for TailAdmin Next.js Dashboard Template",
};

const ProductsPage = () => {
    return (
        <div className="mx-auto max-w-7xl">
            <Breadcrumb pageName="Products" />
            <div className="flex flex-col gap-10">
                <ProductTable />
            </div>
        </div>
    );
};

export default ProductsPage;
