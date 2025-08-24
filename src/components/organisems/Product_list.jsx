import { useEffect } from "react";
import { PencilIcon, TrashIcon } from "lucide-react";
import { useStore } from "../../store/ProductStore";

export default function Product_list() {
    const {
        products,
        handleEdit,
        handleDelete,
        fetchProducts,
        setFilter,
        filters,
    } = useStore();
    useEffect(() => {
        fetchProducts();
    }, [filters]);
    return (
        <div className="bg-white rounded-lg shadow-md">
            <h2 className="text-2xl p-5 font-semibold">Product List</h2>
            <div>
                {/* Filter / Search */}
                <div className="p-4 flex flex-col sm:flex-row gap-2">
                    <input
                        type="text"
                        placeholder="Search product..."
                        className="border p-2 rounded"
                        value={filters.search}
                        onChange={(e) => setFilter("search", e.target.value)}
                    />

                    <select
                        className="border p-2 rounded"
                        value={filters.bidangStudi}
                        onChange={(e) =>
                            setFilter("bidangStudi", e.target.value)
                        }
                    >
                        <option value="">All Bidang Studi</option>
                        <option value="Matematika">Matematika</option>
                        <option value="Fisika">Fisika</option>
                        <option value="Kimia">Kimia</option>
                    </select>

                    <input
                        type="number"
                        placeholder="Min Price"
                        className="border p-2 rounded w-24"
                        value={filters.minPrice}
                        onChange={(e) => setFilter("minPrice", e.target.value)}
                    />
                    <input
                        type="number"
                        placeholder="Max Price"
                        className="border p-2 rounded w-24"
                        value={filters.maxPrice}
                        onChange={(e) => setFilter("maxPrice", e.target.value)}
                    />

                    <select
                        className="border p-2 rounded"
                        value={filters.sort}
                        onChange={(e) => setFilter("sort", e.target.value)}
                    >
                        <option value="">Sort By</option>
                        <option value="name_asc">Name A-Z</option>
                        <option value="name_desc">Name Z-A</option>
                        <option value="price_asc">Price Low → High</option>
                        <option value="price_desc">Price High → Low</option>
                    </select>
                </div>
                {products.length === 0 ? (
                    <p className="text-center">Lagi gada productnya ni.</p>
                ) : (
                    <div className="grid sm:grid-cols-2 border-t border-gray-300 divide-y divide-gray-300 sm:divide-x">
                        {products.map((product) => {
                            return (
                                <div key={product.id} className="p-4">
                                    {/* Product name, price || Edit remove BTN */}
                                    <div className="flex justify-between items-start">
                                        {/* Name & Price */}
                                        <div className="grid">
                                            <h3 className="text-lg font-semibold">
                                                {product.name}
                                            </h3>
                                            <span className="font-semibold text-primary">
                                                ${product.price}
                                            </span>
                                        </div>
                                        {/* Edit & Remove */}
                                        <div className="flex items-center gap-1">
                                            {/* Edit */}
                                            <button
                                                onClick={() =>
                                                    handleEdit(product)
                                                }
                                                className="text-info-default"
                                            >
                                                <PencilIcon size={20} />
                                            </button>
                                            {/* Remove */}
                                            <button
                                                onClick={() =>
                                                    handleDelete(product.id)
                                                }
                                                className="text-error-default"
                                            >
                                                <TrashIcon size={20} />
                                            </button>
                                        </div>
                                    </div>
                                    {/* Description */}
                                    <p className="text-dark-secondary">
                                        {product.description}
                                    </p>
                                    {/* COMING SOON */}
                                    {/* Tutor */}
                                    <div className="grid">
                                        {/* Name */}
                                        {/* <div className="flex justify-between">
                                            <span className="text-dark-secondary text-sm">
                                                Tutor:
                                            </span>
                                            <span className="text-sm">{}</span>
                                        </div> */}
                                        {/* Role */}
                                        {/* <div className="flex justify-between">
                                            <span className="text-dark-secondary text-sm">
                                                Role:
                                            </span>
                                            <span className="text-sm">
                                                {product.tutor.role}
                                            </span>
                                        </div> */}
                                        {/* Company */}
                                        {/* <div className="flex justify-between">
                                            <span className="text-dark-secondary text-sm">
                                                Company:
                                            </span>
                                            <span className="text-sm">
                                                {product.tutor.company}
                                            </span>
                                        </div> */}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
}
