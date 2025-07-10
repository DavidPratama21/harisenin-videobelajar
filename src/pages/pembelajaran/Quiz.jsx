import {
    ChevronLeft,
    ChevronRight,
    ChevronUp,
    ChevronDown,
    ArrowLeft,
    ArrowRight,
    Star,
} from "lucide-react";
import Quiz_layout from "../../layouts/Quiz_layout";
import Video_section from "../../components/molecules/Video_section";
import Button from "../../components/atoms/Button";
import Quiz_number from "../../components/atoms/Quiz_number";
import { useStore } from "../../store/RandomStore";
const Quiz = () => {
    const { toggle } = useStore();
    return (
        <Quiz_layout>
            <div className="relative top-14 grid bg-other-primary sm:grid-cols-[auto_auto_auto]">
                {/* Section, List Soal */}
                <div className="grid border-r border-other-border pt-4.5 px-9 pb-6 gap-4.5 bg-other-primary sm:h-fit">
                    <h3 className="text-lg font-semibold leading-[120%] text-dark-primary">
                        List Soal
                    </h3>
                    {/* 1 - 5 */}
                    <div className="flex justify-between">
                        <Quiz_number status="done">1</Quiz_number>
                        <Quiz_number status="done">2</Quiz_number>
                        <Quiz_number status="done">3</Quiz_number>
                        <Quiz_number status="done">4</Quiz_number>
                        <Quiz_number status="progress">5</Quiz_number>
                    </div>
                    {/* 6 - 10 */}
                    <div className="flex justify-between">
                        <Quiz_number>6</Quiz_number>
                        <Quiz_number>7</Quiz_number>
                        <Quiz_number>8</Quiz_number>
                        <Quiz_number>9</Quiz_number>
                        <Quiz_number>10</Quiz_number>
                    </div>
                    {/* Alert */}
                    <div className="rounded-[5px] border border-info-default bg-info-background py-[7px] px-4">
                        <p className="text-info-default text-sm leading-[20px]">
                            Selesaikan semua soal untuk mengakhiri pretest
                        </p>
                    </div>
                </div>
                {/* 4794, Quiz */}
                <form className="grid w-full h-fit border-t border-other-border p-5 gap-5 sm:py-9 sm:px-28 sm:h-full">
                    {/* Soal & Pilihan Jawaban */}
                    <div className="grid gap-5 sm:h-fit">
                        {/* 3692, Soal */}
                        <div className="grid gap-2.5 sm:gap-6">
                            <p className="font-semibold text-lg leading-[120%] text-dark-primary sm:text-xl">
                                Pertanyaan 5
                            </p>
                            <p className="leading-[140%] tracking-[0.2px] text-dark-secondary sm:text-lg">
                                Memikirkan dan mengantisipasi secara teliti
                                adanya user secara tidak sengaja mengutak-atik
                                konfigurasi, namun dapat diatasi dengan membuat
                                default yang mengurangi kepanikan pada user
                                adalah pengertian dari ...
                            </p>
                        </div>
                        {/* 3256, Pilihan Jawaban */}
                        <div className="grid gap-2">
                            <label
                                htmlFor="option"
                                className="flex rounded p-4 gap-3 items-center border text-dark-primary has-checked:text-primary border-other-border has-checked:border-primary"
                            >
                                <input
                                    type="radio"
                                    name="option"
                                    value="a"
                                    className="appearance-none size-5 aspect-square rounded-full border border-primary bg-primary-100 checked:bg-primary"
                                />
                                Memikirkan tentang default *
                            </label>
                            <label
                                htmlFor="option"
                                className="flex rounded p-4 gap-3 items-center text-dark-primary has-checked:text-primary border border-other-border has-checked:border-primary"
                            >
                                <input
                                    type="radio"
                                    name="option"
                                    value="b"
                                    className="appearance-none size-5 aspect-square rounded-full border border-primary bg-primary-100 checked:bg-primary"
                                />
                                Mempertimbangkan page layout berdasarkan suatu
                                tujuan tertentu
                            </label>
                            <label
                                htmlFor="option"
                                className="flex rounded p-4 gap-3 items-center text-dark-primary has-checked:text-primary border border-other-border has-checked:border-primary"
                            >
                                <input
                                    type="radio"
                                    name="option"
                                    value="c"
                                    className="appearance-none size-5 aspect-square rounded-full border border-primary bg-primary-100 checked:bg-primary"
                                />
                                Memastikan bahwa sistem berjalan sesuai dengan
                                apa yang terjadi saat itu juga
                            </label>
                            <label
                                htmlFor="option"
                                className="flex rounded p-4 gap-3 items-center text-dark-primary has-checked:text-primary border border-other-border has-checked:border-primary"
                            >
                                <input
                                    type="radio"
                                    name="option"
                                    value="d"
                                    className="appearance-none size-5 aspect-square rounded-full border border-primary bg-primary-100 checked:bg-primary"
                                />
                                Menciptakan konsistensi dan menggunakan elemen
                                UI umum
                            </label>
                        </div>
                    </div>
                    {/* 4478, Next / Prev Soal */}
                    <div className="flex gap-4 justify-between sm:self-end">
                        <Button
                            style="reverse"
                            className="border border-primary flex gap-2"
                        >
                            <ArrowLeft />
                            Sebelumnya
                        </Button>
                        <Button
                            action={toggle}
                            className="border border-primary flex gap-2"
                        >
                            Selanjutnya
                            <ArrowRight />
                        </Button>
                    </div>
                </form>
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
        </Quiz_layout>
    );
};

export default Quiz;
