import { Album, ShoppingBag, User } from "lucide-react";
import { Link } from "react-router";
import Pesanan_layout from "../layouts/Pesanan_layout";
import Tabs from "../components/molecules/Tabs";
import Filter from "../components/molecules/Filter";
import Card_pesanan from "../components/molecules/Card_pesanan";
import Pagination from "../components/molecules/Pagination";
import Menu_daftar from "../components/molecules/Menu_daftar";

const TabsList = ["Semua Pesanan", "Menunggu", "Berhasil", "Gagal"];

const Pesanan = () => {
    return (
        <Pesanan_layout>
            {/* Frame 3752 */}
            <div className="relative top-19.5 mb-16 grid py-7 px-5 gap-6 sm:py-16 sm:px-30 sm:gap-9 sm:flex sm:max-w-[1440px] sm:mx-auto">
                {/* Frame 4801 */}
                <div className="grid gap-6 h-fit">
                    {/* Frame 3692 */}
                    <div className="grid gap-2.5">
                        <p className="font-semibold text-xl leading-[120%] text-dark-primary">
                            Daftar Pesanan
                        </p>
                        <p className="leading-[140%] tracking-[0.2px] text-dark-secondary">
                            Informasi terperinci mengenai pembelian
                        </p>
                    </div>
                    {/* Frame 3880 */}
                    <Menu_daftar />
                </div>
                {/* Desc & Button */}
                <div className="grid gap-6 p-5 rounded-[10px] border border-other-border bg-other-primary sm:w-full">
                    {/* 4786 */}
                    <div className="grid gap-6 sm:flex">
                        <Tabs TabsList={TabsList} />
                        <Filter />
                    </div>
                    <Card_pesanan />
                    <Card_pesanan status="gagal" />
                    <Card_pesanan status="belum" />
                    <Card_pesanan />
                    <Card_pesanan />
                    <Pagination />
                </div>
            </div>
        </Pesanan_layout>
    );
};

export default Pesanan;
