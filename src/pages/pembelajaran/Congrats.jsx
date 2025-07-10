import {
    ChevronLeft,
    ChevronRight,
    ChevronUp,
    ChevronDown,
    CircleCheck,
    CircleX,
    Star,
} from "lucide-react";
import { Link } from "react-router";
import Congrats_layout from "../../layouts/Congrats_layout";
import Video_section from "../../components/molecules/Video_section";
import Button from "../../components/atoms/Button";
import congrats from "../../assets/congrats.svg";
import { useStore } from "../../store/RandomStore";
const Congrats = () => {
    const { toggle } = useStore();
    return (
        <Congrats_layout>
            <div className="relative top-14 grid bg-other-primary sm:grid-cols-[auto_auto]">
                {/* 4793 */}
                <div className="grid w-full h-fit">
                    {/* Video */}
                    <img
                        src={congrats}
                        alt="Rules Image"
                        className="sm:w-full"
                    />
                    {/* 4794 */}
                    <div className="grid p-5 gap-5 sm:py-9 sm:px-28 sm:gap-6">
                        {/* 3692, Tanggal Pretest */}
                        <div className="grid gap-2.5 sm:gap-5">
                            <h3 className="font-semibold text-lg leading-[120%] text-dark-primary sm:text-xl">
                                Tanggal Pretest:
                            </h3>
                            <p className="leading-[140%] tracking-[0.2px] text-dark-secondary sm:text-lg">
                                23 September 2022, 10:20 AM
                            </p>
                        </div>
                        {/* 4806, Kotak Nilai */}
                        <div className="grid w-full sm:flex">
                            {/* 4488, Nilai & Soal */}
                            <div className="flex w-full">
                                {/* 4487, Nilai */}
                                <div className="w-full grid py-4.5 px-3 bg-succes-default gap-2.5 border border-other-border text-light-primary">
                                    <p className="font-bold leading-[140%] tracking-[0.2px]">
                                        Nilai
                                    </p>
                                    <p className="font-semibold text-2xl leading-[120%]">
                                        100
                                    </p>
                                </div>
                                {/* 4483, Soal */}
                                <div className="w-full grid py-4.5 px-3 bg-other-primary gap-2.5 border border-other-border">
                                    <p className="font-bold leading-[140%] tracking-[0.2px] text-dark-secondary">
                                        Soal
                                    </p>
                                    <p className="font-semibold text-2xl leading-[120%] text-dark-primary">
                                        10
                                    </p>
                                </div>
                            </div>
                            {/* 4489, Benar & Salah */}
                            <div className="flex w-full">
                                {/* Benar */}
                                <div className="w-full grid py-4.5 px-3 bg-other-primary gap-2.5 border border-other-border text-dark-primary">
                                    <p className="font-bold leading-[140%] tracking-[0.2px] text-dark-secondary">
                                        Benar
                                    </p>
                                    {/* V 10 */}
                                    <div className="flex items-center gap-2">
                                        <CircleCheck
                                            fill="#38D189"
                                            color="white"
                                        />
                                        <p className="font-semibold text-2xl leading-[120%] text-dark-primary">
                                            10
                                        </p>
                                    </div>
                                </div>
                                {/* Salah */}
                                <div className="w-full grid py-4.5 px-3 bg-other-primary gap-2.5 border border-other-border text-dark-primary">
                                    <p className="font-bold leading-[140%] tracking-[0.2px] text-dark-secondary">
                                        Salah
                                    </p>
                                    {/* X 0 */}
                                    <div className="flex items-center gap-2">
                                        <CircleX fill="#FF5C2B" color="white" />
                                        <p className="font-semibold text-2xl leading-[120%] text-dark-primary">
                                            0
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* 3693, Ucapan selamat */}
                        <div className="grid gap-2.5 sm:gap-5">
                            <h3 className="font-semibold text-lg leading-[120%] text-dark-primary sm:text-xl">
                                Selesai!
                            </h3>
                            <div className="grid gap-5 leading-[140%] tracking-[0.2px] text-dark-secondary sm:text-lg">
                                <p>
                                    Pretest sudah selesai dan kami sudah
                                    mengetahui progresmu.
                                </p>
                                <p>Saatnya memulai kelas!</p>
                            </div>
                        </div>
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
                {/* 4797, Videos List & Review */}
                <div className="border-t border-other-border sm:w-full">
                    {/* 3084, title & desc */}
                    <div className="flex gap-31 pt-6 pb-5 pl-5 pr-8.5 border-b border-other-border sm:pl-7.5">
                        <p className="font-semibold leading-[120%] text-dark-primary sm:text-lg">
                            Daftar Modul
                        </p>
                    </div>
                    {/* Desc & Button, List Video item */}
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
                        {/* 4762, other video item */}
                        <div className="grid gap-3">
                            {/* Intro */}
                            <div className="flex items-center justify-between text-dark-secondary">
                                <p className="font-semibold leading-[120%] text-dark-primary sm:text-lg">
                                    Introduction to HR
                                </p>
                                <ChevronDown />
                            </div>
                        </div>
                        {/* 4764, other video item */}
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
                    <div
                        onClick={toggle}
                        className="flex gap-2 py-4 px-9 items-center border-t border-other-border bg-secondary text-light-primary"
                    >
                        <Star size={20} />
                        <p className="font-bold leading-[24px] tracking-[0.2%]">
                            Beri Review & Rating
                        </p>
                    </div>
                </div>
            </div>
        </Congrats_layout>
    );
};

export default Congrats;
