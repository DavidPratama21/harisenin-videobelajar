import {
    ChevronLeft,
    ChevronRight,
    ChevronUp,
    ChevronDown,
    Star,
} from "lucide-react";
import Video_layout from "../../layouts/Video_layout";
import Video_section from "../../components/molecules/Video_section";
import Video_play from "../../components/molecules/Video_play";
import avatar from "../../assets/Avatar_tutor/1.png";
import { Link } from "react-router";

const Video = () => {
    return (
        <Video_layout>
            {/* 3752 */}
            <div className="relative top-14 grid bg-other-primary sm:grid-cols-[auto_auto]">
                {/* 4793 */}
                <div className="grid w-full h-fit">
                    {/* Video */}
                    <Video_play />
                    {/* 4794 */}
                    <div className="grid p-5 gap-5 sm:py-9 sm:px-28 sm:gap-6">
                        {/* 3692 */}
                        <div className="grid gap-2.5 sm:gap-3">
                            <p className="font-semibold text-lg leading-[120%] text-dark-primary sm:text-xl">
                                Praktikkan Skill dengan Technical Book
                            </p>
                            <p className="leading-[140%] tracking-[0.2px] text-dark-secondary sm:text-lg">
                                Pelajari dan praktikkan skill teknis dalam
                                berbagai industri dengan Technical Book
                                Riselearn
                            </p>
                        </div>
                        {/* 4497 */}
                        <div className="flex gap-2 sm:gap-2.5 items-center">
                            <img
                                src={avatar}
                                alt=""
                                className="size-9 rounded-[10px] sm:size-10"
                            />
                            {/* title */}
                            <div className="grid leading-[140%] tracking-[0.2px]">
                                <p className="font-medium text-sm text-dark-primary sm:text-base">
                                    Jenna Ortega
                                </p>
                                <div className="flex gap-1 text-xs text-dark-secondary sm:text-sm">
                                    <p className="font-normal sm:text-sm">
                                        Senior Accountant
                                    </p>
                                    <p>di</p>
                                    <p className="font-bold">Gojek</p>
                                </div>
                            </div>
                        </div>
                        {/* 4495 */}
                        <div className="flex gap-2">
                            {/* Rating */}
                            <div className="flex">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="15"
                                    height="14.25"
                                    viewBox="0 0 16 15"
                                    fill="none"
                                >
                                    <path
                                        d="M8 11.4525L12.635 14.25L11.405 8.9775L15.5 5.43L10.1075 4.9725L8 0L5.8925 4.9725L0.5 5.43L4.595 8.9775L3.365 14.25L8 11.4525Z"
                                        fill="#FCE91B"
                                    />
                                </svg>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="15"
                                    height="14.25"
                                    viewBox="0 0 16 15"
                                    fill="none"
                                >
                                    <path
                                        d="M8 11.4525L12.635 14.25L11.405 8.9775L15.5 5.43L10.1075 4.9725L8 0L5.8925 4.9725L0.5 5.43L4.595 8.9775L3.365 14.25L8 11.4525Z"
                                        fill="#FCE91B"
                                    />
                                </svg>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="15"
                                    height="14.25"
                                    viewBox="0 0 16 15"
                                    fill="none"
                                >
                                    <path
                                        d="M8 11.4525L12.635 14.25L11.405 8.9775L15.5 5.43L10.1075 4.9725L8 0L5.8925 4.9725L0.5 5.43L4.595 8.9775L3.365 14.25L8 11.4525Z"
                                        fill="#FCE91B"
                                    />
                                </svg>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="15"
                                    height="14.25"
                                    viewBox="0 0 16 15"
                                    fill="none"
                                >
                                    <path
                                        d="M8 11.4525L12.635 14.25L11.405 8.9775L15.5 5.43L10.1075 4.9725L8 0L5.8925 4.9725L0.5 5.43L4.595 8.9775L3.365 14.25L8 11.4525Z"
                                        fill="#3A3541"
                                        fillOpacity="0.12"
                                    />
                                </svg>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="15"
                                    height="14.25"
                                    viewBox="0 0 16 15"
                                    fill="none"
                                >
                                    <path
                                        d="M8 11.4525L12.635 14.25L11.405 8.9775L15.5 5.43L10.1075 4.9725L8 0L5.8925 4.9725L0.5 5.43L4.595 8.9775L3.365 14.25L8 11.4525Z"
                                        fill="#3A3541"
                                        fill-opacity="0.12"
                                    />
                                </svg>
                            </div>
                            <p className="font-medium text-xs leading-[140%] tracking-[0.2px] underline text-dark-secondary sm:text-sm">
                                3.5 (86)
                            </p>
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
                    <Link
                        to="/aturan"
                        className="flex gap-2.5 items-center sm:gap-4"
                    >
                        <p className="sm:hidden">Selanjutnya</p>
                        <p className="hidden sm:inline">
                            Foundations of user Experience Design
                        </p>
                        <ChevronRight />
                    </Link>
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
                        {/* 4761 */}
                        <div className="grid gap-3">
                            {/* Intro */}
                            <div className="flex items-center justify-between text-dark-secondary">
                                <p className="font-semibold leading-[120%] text-dark-primary sm:text-lg">
                                    Introduction to HR
                                </p>
                                <ChevronUp />
                            </div>
                            <Video_section kategori="video" status="selesai" />
                            <Video_section kategori="video" status="progres" />
                            <Video_section kategori="video" status="belum" />
                            <Video_section kategori="video" status="belum" />
                            <Video_section kategori="video" status="belum" />
                            <Video_section
                                kategori="rangkuman"
                                status="belum"
                            />
                            <Video_section kategori="kuis" status="belum" />
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
                    {/* 3103 */}
                    <div className="flex gap-2 py-4 px-9 items-center border-t border-other-border bg-secondary text-light-primary">
                        <Star size={20} />
                        <p className="font-bold leading-[24px] tracking-[0.2%]">
                            Beri Review & Rating
                        </p>
                    </div>
                </div>
            </div>
        </Video_layout>
    );
};

export default Video;
