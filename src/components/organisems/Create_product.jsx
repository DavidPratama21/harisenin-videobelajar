import { useStore } from "../../store/ProductStore";
import Button from "../atoms/Button";

const Create_product = () => {
    const {
        formData,
        productEdit,
        handleAdd,
        handleUpdate,
        handleChange,
        cancelEdit,
    } = useStore();

    // const [formData, setFormData] = useState({
    //     title: "",
    //     price: "",
    //     desc: "",
    //     tutorName: "",
    //     tutorRole: "",
    //     tutorCompany: "",
    // });

    // useEffect(() => {
    //     if (mauEdit) {
    //         setFormData({
    //             title: mauEdit.title,
    //             price: mauEdit.price,
    //             desc: mauEdit.desc,
    //         });
    //     } else {
    //         // Untuk clear form kalo gajadi edit
    //         setFormData({
    //             title: "",
    //             price: "",
    //             desc: "",
    //         });
    //     }
    // }, [mauEdit]);

    // const handleChange = (e) => {
    //     e.preventDefault();
    //     const { name, value } = e.target;
    //     setFormData({
    //         ...formData,
    //         [name]: value,
    //     });
    // };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    // };

    return (
        <form
            onSubmit={productEdit ? handleUpdate : handleAdd}
            className="bg-white p-5 rounded-lg shadow-md grid gap-4"
        >
            <h1 className="text-2xl font-semibold">Create New Product</h1>
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                {/* Product Name */}
                <div className="grid">
                    <label htmlFor="name" className="font-medium text-gray-500">
                        Product Name
                    </label>
                    <input
                        name="title"
                        type="text"
                        value={formData.title}
                        onChange={handleChange}
                        className="px-2 py-3 border border-gray-300 rounded-lg"
                        required
                    />
                </div>
                {/* Product Price */}
                <div className="grid">
                    <label
                        htmlFor="price"
                        className="font-medium text-gray-500"
                    >
                        Price
                    </label>
                    <input
                        name="price"
                        type="text"
                        value={formData.price}
                        onChange={handleChange}
                        className="px-2 py-3 border border-gray-300 rounded-lg"
                        required
                    />
                </div>
                {/* Tutor Name */}
                {/* <div className="grid">
                    <label
                        htmlFor="tutorName"
                        className="font-medium text-gray-500"
                    >
                        Tutor Name
                    </label>
                    <input
                        name="tutorName"
                        type="text"
                        className="px-2 py-3 border border-gray-300 rounded-lg"
                        required
                    />
                </div> */}
                {/* Tutor role  */}
                {/* <div className="grid">
                    <label
                        htmlFor="tutorRole"
                        className="font-medium text-gray-500"
                    >
                        Tutor Role
                    </label>
                    <input
                        name="tutorRole"
                        type="text"
                        className="px-2 py-3 border border-gray-300 rounded-lg"
                        required
                    />
                </div> */}
                {/* Tutor company */}
                {/* <div className="grid">
                    <label
                        htmlFor="tutorCompany"
                        className="font-medium text-gray-500"
                    >
                        Tutor Company
                    </label>
                    <input
                        name="tutorCompany"
                        type="text"
                        className="px-2 py-3 border border-gray-300 rounded-lg"
                        required
                    />
                </div> */}
                {/* Product Description */}
                <div className="grid sm:col-span-2">
                    <label htmlFor="desc" className="font-medium text-gray-500">
                        Product Description
                    </label>
                    <textarea
                        name="desc"
                        value={formData.desc}
                        onChange={handleChange}
                        className="px-2 py-3 border border-gray-300 rounded-lg"
                        required
                    ></textarea>
                </div>
            </div>
            {/* Sumbit & Cancel */}
            <div className="flex gap-4 justify-self-end">
                {/* Cancel BTN */}
                {productEdit && (
                    // <Button type="button" action={mauCancel} style="cancel">
                    <Button type="button" action={cancelEdit} style="cancel">
                        Cancel
                    </Button>
                )}
                {/* Submit BTN */}
                <Button type="submit" className="text-nowrap">
                    {/* <Button type="button" className="text-nowrap"> */}
                    {productEdit ? "Update Product" : "Create Product"}
                </Button>
            </div>
        </form>
    );
};

export default Create_product;
