import { Link, useLocation } from "react-router";
import { Album, ShoppingBag, User } from "lucide-react";

const Menu_daftar = () => {
    const location = useLocation();
    const currentPath = location.pathname;
    return (
        <div className="grid p-5 gap-2 border border-other-border bg-other-primary rounded-[10px] sm:p-6">
            {/* Profil */}
            <Link
                to="/profil"
                className={`flex gap-3 p-3 rounded  items-center ${
                    currentPath === "/profil"
                        ? "bg-secondary-100 border border-secondary"
                        : ""
                }`}
            >
                <User
                    color={currentPath === "/profil" ? "#FFBD3A" : "#3A354161"}
                />
                <p
                    className={`font-bold leading-[140%] tracking-[0.2px] text-lg ${
                        currentPath === "/profil"
                            ? "text-secondary"
                            : "text-dark-disabled"
                    } `}
                >
                    Profile Saya
                </p>
            </Link>
            {/* Kelas */}
            <Link
                to="/kelas"
                className={`flex gap-3 p-3 rounded  items-center ${
                    currentPath === "/kelas"
                        ? "bg-secondary-100 border border-secondary"
                        : ""
                }`}
            >
                <Album
                    color={currentPath === "/kelas" ? "#FFBD3A" : "#3A354161"}
                />
                <p
                    className={`font-bold leading-[140%] tracking-[0.2px] text-lg ${
                        currentPath === "/kelas"
                            ? "text-secondary"
                            : "text-dark-disabled"
                    } `}
                >
                    Kelas Saya
                </p>
            </Link>
            {/* Pesanan */}
            <Link
                to="/pesanan"
                className={`flex gap-3 p-3 rounded  items-center ${
                    currentPath === "/pesanan"
                        ? "border border-secondary bg-secondary-100"
                        : ""
                }`}
            >
                <ShoppingBag
                    color={currentPath === "/pesanan" ? "#FFBD3A" : "#3A354161"}
                />
                <p
                    className={`font-bold leading-[140%] tracking-[0.2px] text-lg ${
                        currentPath === "/pesanan"
                            ? "text-secondary"
                            : "text-dark-disabled"
                    } `}
                >
                    Pesanan Saya
                </p>
            </Link>
        </div>
    );
};

export default Menu_daftar;
