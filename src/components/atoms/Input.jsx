import { Eye, EyeOff } from "lucide-react";

const Input = ({id, type, value, children, onChange }) => {
    return (
        <div className="relative">
            <input
                type={type}
                value={value}
                id={id}
                onChange={onChange}
                className="peer h-[49px] border border-gray-300 rounded-[10px] px-3 focus:outline-none focus:border-primary w-full"
            />
            <label
                htmlFor=""
                className="absolute left-3 -top-2 text-sm font-medium bg-white px-[5px] text-gray-500 transition-all 
                peer-focus:text-primary"
            >
                {children}
            </label>
        </div>
    );
};

export default Input;
