import { useEffect } from "react";
import Admin_layout from "../layouts/Admin_layout";
import Create_product from "../components/organisems/Create_product";
import Product_list from "../components/organisems/Product_list";
import { useStore } from "../store/ProductStore";

const Admin = () => {
    const fetchProducts = useStore((state) => state.fetchProducts);

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    return (
        <Admin_layout>
            <div className="relative top-20 mb-16 grid py-7 px-5 gap-6 sm:max-w-[1440px] sm:mx-auto sm:px-30 sm:py-16">
                {/* Title & desc */}
                <div className="grid">
                    <h1 className="text-4xl font-bold">Admin Dashboard</h1>
                    <p>Welcome to admin dashboard</p>
                </div>
                {/* Table Create Item */}
                <Create_product />
                {/* Product List */}
                <Product_list />
            </div>
        </Admin_layout>
    );
};

export default Admin;
