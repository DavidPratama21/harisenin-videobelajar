import { Search } from "lucide-react";
import Kelas_layout from "../layouts/Kelas_layout";
import Tabs from "../components/molecules/Tabs";
import Card from "../components/molecules/Card_kelas";
import Pagination from "../components/molecules/Pagination";
import Menu_daftar from "../components/molecules/Menu_daftar";

const TabsList = ["Semua Kelas", "Sedang Berjalan", "Selesai"];

const Kelas = () => {
    return (
        <Kelas_layout>
            <div className="relative top-19.5 mb-16 grid py-7 px-5 gap-6 sm:flex sm:max-w-[1440px] sm:mx-auto sm:py-16 sm:px-30 sm:gap-9">
                {/* 4801 */}
                <div className="grid gap-6 sm:h-fit">
                    {/* 3692 */}
                    <div className="grid gap-2.5">
                        <p className="font-semibold text-xl leading-[120%] text-dark-primary">
                            Daftar Kelas
                        </p>
                        <p className="leading-[140%] tracking-[0.2px] text-dark-secondary">
                            Akses Materi Belajar dan Mulailah Meningkatkan
                            Pengetahuan Anda!
                        </p>
                    </div>
                    {/* 3880 */}
                    <Menu_daftar />
                </div>
                {/* Desc & Button */}
                <div className="grid p-5 gap-6 border border-other-border bg-other-primary rounded-[10px] sm:w-full sm:gap-8">
                    <div className="grid gap-6 sm:flex sm:gap-8 sm:justify-between sm:items-center">
                        <Tabs TabsList={TabsList} />
                        <button className="grid h-12 px-3 rounded-[10px] border border-other-border bg-white text-dark-secondary sm:w-[220px]">
                            <div className="flex items-center gap-2 py-3 pl-[5px] sm:justify-between">
                                <p className="font-medium">Cari Kelas</p>
                                <Search />
                            </div>
                        </button>
                    </div>
                    <Card />
                    <Card status="otw" />
                    <Card status="otw" />
                    <Pagination />
                </div>
            </div>
        </Kelas_layout>
    );
};

export default Kelas;
