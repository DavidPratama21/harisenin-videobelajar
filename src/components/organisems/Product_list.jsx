import { PencilIcon, TrashIcon } from "lucide-react";
import { useStore } from "../../store/ProductStore";

export default function Product_list() {
    const { products, handleEdit, handleDelete } = useStore();
    // console.log(products)
    return (
        <div className="bg-white rounded-lg shadow-md">
            <h2 className="text-2xl p-5 font-semibold">Product List</h2>
            <div>
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
