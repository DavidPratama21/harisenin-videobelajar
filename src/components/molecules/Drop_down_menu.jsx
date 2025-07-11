import { useNavigate } from "react-router";
import { Link } from "react-router";
import { LogOut } from "lucide-react";
import { useStore } from "../../store/UserStore";
const Drop_down_menu = ({ ref }) => {
    const navigate = useNavigate();
    const { logout } = useStore();
    const user = JSON.parse(localStorage.getItem("user"));
    const admin = "admin@gmail.com";

    return (
        <div
            ref={ref}
            className="rounded-b fixed z-2 w-full top-16 sm:right-30 sm:w-[220px] bg-white shadow-[0_0_1px_0_rgba(62,67,74,0.31),0_18px_28px_0_rgba(62,67,74,0.15)]"
        >
            <Link
                to="/kategori"
                className="sm:hidden text-dark-secondary font-medium leading-[140%] tracking-[0.2px] border border-other-border px-3 py-4 flex"
            >
                Kategori
            </Link>
            <Link
                to="/profil"
                className="text-dark-secondary font-medium leading-[140%] tracking-[0.2px] border border-other-border px-3 py-4 flex"
            >
                Profil Saya
            </Link>
            <Link
                to="/kelas"
                className="text-dark-secondary font-medium leading-[140%] tracking-[0.2px] border border-other-border px-3 py-4 flex"
            >
                Kelas Saya
            </Link>
            <Link
                to="/pesanan"
                className="text-dark-secondary font-medium leading-[140%] tracking-[0.2px] border border-other-border px-3 py-4 flex "
            >
                Pesanan Saya
            </Link>
            {user?.email === admin && (
                <Link
                    to="/admin"
                    className="text-dark-secondary font-medium leading-[140%] tracking-[0.2px] border border-other-border px-3 py-4 flex "
                >
                    Admin
                </Link>
            )}
            <button
                // onClick={handleLogOut}
                onClick={() => logout(navigate)}
                className="flex items-center gap-[5px] text-error-default font-medium leading-[140%] tracking-[0.2px] border border-other-border px-3 py-4 w-full"
            >
                Keluar
                <LogOut />
            </button>
        </div>
    );
};

export default Drop_down_menu;
