import { FileDown } from "lucide-react";
import Button from "../../components/atoms/Button";
import Sertifikat_layout from "../../layouts/Sertifikat_layout";
import Stars from "../../components/atoms/Stars";
import serti from "../../assets/serti.png";
import tutor from "../../assets/Avatar_tutor/1.png";
const Sertifikat = () => {
    return (
        <Sertifikat_layout>
            {/* 3752 */}
            <div className="relative top-19 mb-80 grid gap-6 px-5 py-7 h-100 sm:py-16 sm:px-30 sm:gap-9 sm:mb-100">
                {/* Breadcrumbs */}
                <div className="flex gap-1 text-dark-secondary">
                    <p>Beranda</p>
                    <p>/</p>
                    <p>Desain</p>
                    <p>/</p>
                    <p>Gapai Karir</p>
                    <p>/</p>
                    <p className="text-dark-primary">Sertifikat</p>
                </div>
                {/* Sertifikat */}
                <div className="grid p-5 gap-5 bg-other-primary sm:p-6 sm:gap-9">
                    {/* Foto Sertifikat */}
                    <img
                        src={serti}
                        alt=""
                        className="object-contain grid bg-[#E2FCD966] h-60 w-70 rounded-[10px] place-items-center sm:w-full sm:h-90"
                    />
                    {/* 4800, Class Detail & Download Sertifikat */}
                    <div className="grid gap-6 sm:grid-cols-[auto_auto]">
                        {/* 4808, Detail kelas */}
                        <div className="grid gap-2.5">
                            {/* 3692, Title desc */}
                            <div className="grid gap-2.5">
                                <h3 className="font-semibold text-dark-primary text-lg leading-[120%]">
                                    Praktikkan Skill dengan Technical Book
                                </h3>
                                <p className="text-dark-secondary leading-[140%] tracking-[0.2px]">
                                    Pelajari dan praktikkan skill teknis dalam
                                    berbagai industri dengan Technical Book
                                    Riselearn
                                </p>
                            </div>
                            {/* 4497, Tutor Profile */}
                            <div className="flex gap-2 items-center sm:gap-2.5">
                                {/* Foto Profile */}
                                <img
                                    src={tutor}
                                    alt="Profile Image"
                                    className="h-9 aspect-square rounded-xl"
                                />
                                {/* Name & Title */}
                                <div>
                                    {/* Name */}
                                    <p className="font-medium text-dark-primary leading-[140%] tracking-[0.2px] text-sm sm:text-base">
                                        Jenna Ortega
                                    </p>
                                    {/* 4497, Title */}
                                    <div className="flex gap-1 text-dark-secondary text-xs sm:text-sm">
                                        <p className="font-normal leading-[140%] tracking-[0.2px]">
                                            Senior Accountant
                                        </p>
                                        <span>di</span>
                                        <span className="font-bold">Gojek</span>
                                    </div>
                                </div>
                            </div>
                            {/* 4495, Rating */}
                            <Stars />
                        </div>
                        <Button
                            style="reverse"
                            className="border border-primary justify-center h-fit gap-2"
                        >
                            <FileDown fill="#3ecf4c" color="#e2fcd9cc" />
                            <p>Download Sertifikat</p>
                        </Button>
                    </div>
                </div>
            </div>
        </Sertifikat_layout>
    );
};

export default Sertifikat;
