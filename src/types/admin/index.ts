export type Product = {
    id: string; // Unique identifier for the product
    image: string;
    name: string;
    category: string;
    price: number;
    sold: number;
    profit: number;
    status: "Active" | "Out of Stock" | "Archived";
};

export type Order = {
    id: string; // Order ID
    customerName: string;
    productName: string;
    quantity: number;
    amount: number;
    status: "Pending" | "Processing" | "Shipped" | "Delivered" | "Cancelled";
    date: string;
};

export type Customer = {
    id: string;
    avatar: string;
    name: string;
    email: string;
    orders: number;
    totalSpent: number;
    status: "Active" | "Inactive" | "Blocked";
    joinDate: string;
};
