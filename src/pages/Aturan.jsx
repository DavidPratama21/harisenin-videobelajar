import {
    ChevronLeft,
    ChevronRight,
    ChevronUp,
    ChevronDown,
    Star,
} from "lucide-react";
import { Link } from "react-router";
import Video_section from "../components/molecules/Video_section";
import Aturan_layout from "../layouts/Aturan_layout";
import Button from "../components/atoms/Button";
import rules from "../assets/rules.svg";
const Aturan = () => {
    return (
        <Aturan_layout>
            <div className="relative top-14 grid bg-other-primary sm:grid-cols-[auto_auto]">
                {/* 4793 */}
                <div className="grid w-full h-fit">
                    {/* Video */}
                    <img src={rules} alt="Rules Image" className="sm:w-full" />
                    {/* 4794 */}
                    <div className="grid p-5 gap-5 sm:py-9 sm:px-28 sm:gap-6">
                        {/* 3692 */}
                        <div className="grid gap-2.5 sm:gap-5">
                            <p className="font-semibold text-lg leading-[120%] text-dark-primary sm:text-xl">
                                Aturan
                            </p>
                            <p className="leading-[140%] tracking-[0.2px] text-dark-secondary sm:text-lg">
                                Kerjakan pretest dengan sebaik mungkin untuk
                                mengukur pemahaman awalmu terkait materi yang
                                akan kamu pelajari
                            </p>
                            <p className="leading-[140%] tracking-[0.2px] text-dark-secondary sm:text-lg">
                                Syarat Nilai Kelulusan: -
                                <br />
                                Durasi Ujian: 5 Menit
                            </p>
                            <p className="leading-[140%] tracking-[0.2px] text-dark-secondary sm:text-lg">
                                Jangan khawatir, total skor tidak akan
                                memengaruhi kelulusan dan penilaian akhirmu
                                dalam rangkaian kelas ini
                            </p>
                        </div>
                        <Link to="/quiz" className="sm:w-fit">
                            <Button>Mulai Quiz</Button>
                        </Link>
                    </div>
                </div>
                {/* Navigation */}
                <div className="flex justify-between py-4 px-3 text-sm font-bold text-light-primary leading-[140%] tracking-[0.2px] bg-primary border-t border-other-border items-center sm:order-last sm:col-span-full sm:text-lg sm:py-4.5 sm:px-9">
                    {/* Sebelumnya */}
                    <div className="flex gap-2.5 items-center sm:gap-4">
                        <ChevronLeft />
                        <p className="sm:hidden">Sebelumnya</p>
                        <p className="hidden sm:inline">
                            Foundations of user Experience Design
                        </p>
                    </div>
                    {/* Selanjutnya */}
                    <div className="flex gap-2.5 items-center sm:gap-4">
                        <p className="sm:hidden">Selanjutnya</p>
                        <p className="hidden sm:inline">
                            Foundations of user Experience Design
                        </p>
                        <ChevronRight />
                    </div>
                </div>
                {/* 4797 */}
                <div className="border-t border-other-border sm:w-full">
                    {/* 3084 */}
                    <div className="flex gap-31 pt-6 pb-5 pl-5 pr-8.5 border-b border-other-border sm:pl-7.5">
                        <p className="font-semibold leading-[120%] text-dark-primary sm:text-lg">
                            Daftar Modul
                        </p>
                    </div>
                    {/* Desc & Button */}
                    <div className="grid gap-5 p-5 sm:py-6 sm:px-9 sm:gap-6">
                        {/* 4761, Video item */}
                        <div className="grid gap-3">
                            {/* Intro */}
                            <div className="flex items-center justify-between text-dark-secondary">
                                <p className="font-semibold leading-[120%] text-dark-primary sm:text-lg">
                                    Introduction to HR
                                </p>
                                <ChevronUp />
                            </div>
                            <Video_section kategori="video" status="selesai" />
                            <Video_section kategori="video" status="selesai" />
                            <Video_section kategori="video" status="selesai" />
                            <Video_section kategori="video" status="selesai" />
                            <Video_section kategori="video" status="selesai" />
                            <Video_section
                                kategori="rangkuman"
                                status="selesai"
                            />
                            <Video_section kategori="kuis" status="progres" />
                        </div>
                        {/* 4762 */}
                        <div className="grid gap-3">
                            {/* Intro */}
                            <div className="flex items-center justify-between text-dark-secondary">
                                <p className="font-semibold leading-[120%] text-dark-primary sm:text-lg">
                                    Introduction to HR
                                </p>
                                <ChevronDown />
                            </div>
                        </div>
                        {/* 4764 */}
                        <div className="grid gap-3">
                            {/* Intro */}
                            <div className="flex items-center justify-between text-dark-secondary">
                                <p className="font-semibold leading-[120%] text-dark-primary sm:text-lg">
                                    Introduction to HR
                                </p>
                                <ChevronDown />
                            </div>
                        </div>
                    </div>
                    {/* 3103, Review & Rating */}
                    <div className="flex gap-2 py-4 px-9 items-center border-t border-other-border bg-secondary text-light-primary">
                        <Star size={20} />
                        <p className="font-bold leading-[24px] tracking-[0.2%]">
                            Beri Review & Rating
                        </p>
                    </div>
                </div>
            </div>
        </Aturan_layout>
    );
};

export default Aturan;
