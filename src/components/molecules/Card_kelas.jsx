import { Clock, NotebookText } from "lucide-react";
import { Link } from "react-router";
import card from "../../assets/Card_images/card_2.jpg";
import tutor from "../../assets/Avatar_tutor/4.png";
import Button from "../atoms/Button";

const Card_pesanan = ({ status = "Selesai" }) => {
    return (
        <div className="grid rounded-[10px] border border-other-border">
            {/* Desc & Button (1)*/}
            <div className="flex items-center justify-between py-3 px-4.5 gap-3 leading-[140%] tracking-[0.2px] border-b border-other-border bg-[#E2FCD9]/20 sm:py-4 sm:px-5">
                <div className="flex gap-1 text-dark-primary">
                    <p className="font-medium text-xs sm:text-base">
                        {status === "otw" ? "2 / 12 Modul" : "12 / 12 Modul"}
                    </p>
                    <p className="hidden sm:inline">Terselesaikan</p>
                </div>
                {/* Status */}
                <span
                    className={`w-fit py-1 px-2.5 rounded-[10px] text-sm sm:text-base ${
                        status === "otw"
                            ? "bg-secondary-100 text-secondary"
                            : "bg-succes-background text-succes-default "
                    } `}
                >
                    {status === "otw" ? "Sedang Berjalan" : "Selesai"}
                </span>
            </div>
            {/* Desc & Button (2)*/}
            <div className="grid py-3 px-4.5 gap-2 border-b border-other-border bg-other-primary sm:p-5 sm:gap-9 sm:flex">
                <img
                    src={card}
                    alt=""
                    className="rounded-[10px] sm:aspect-square sm:size-43 object-cover"
                />
                {/* 4804 */}
                <div className="grid gap-2 sm:gap-4">
                    <div className="grid gap-2">
                        <p className="font-semibold leading-[120%] text-dark-primary sm:text-lg">
                            Big 4 Auditor Financial Analyst
                        </p>
                        <p className="hidden sm:inline text-dark-secondary leading-[140%] tracking-[0.2px]">
                            Mulai transformasi dengan instruktur profesional,
                            harga yang terjangkau, dan kurikulum terbaik
                        </p>
                    </div>
                    {/* 4496 */}
                    <div className="flex gap-2 items-center sm:gap-2.5">
                        {/* Foto Profile */}
                        <img
                            src={tutor}
                            alt="Profile Image"
                            className="h-9 aspect-square rounded-xl"
                        />
                        {/* Title */}
                        <div className="leading-[140%] tracking-[0.2px]">
                            <p className="font-medium text-dark-primary text-sm sm:text-base">
                                Jenna Ortega
                            </p>
                            {/* Frame 1000004497 */}
                            <div className="flex gap-1 text-xs text-dark-secondary sm:text-sm">
                                <p>Senior Accountant</p>
                                <span>di</span>
                                <span className="font-bold">Gojek</span>
                            </div>
                        </div>
                    </div>
                    {/* 4758 */}
                    <div className="flex gap-4 items-center">
                        {/* Modul */}
                        <div className="flex gap-2 text-dark-secondary items-center">
                            <NotebookText />
                            <p className="text-sm leading-[140%] tracking-[0.2px] sm:text-base">
                                12 Modul
                            </p>
                        </div>
                        {/* Menit */}
                        <div className="flex gap-2 text-dark-secondary items-center">
                            <Clock />
                            <p className="text-sm leading-[140%] tracking-[0.2px] sm:text-base">
                                360 Menit
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Desc & Button (3)*/}
            <div className="grid py-3 px-4.5 gap-3 bg-[#E2FCD9]/20 sm:py-4 sm:px-5 sm:flex sm:gap-9">
                {/* 4789 */}
                <div className="flex gap-3 items-center justify-between sm:w-1/2">
                    {/* Title */}
                    <div className="flex gap-1 text-sm leading-[140%] tracking-[0.2px] sm:text-base">
                        <p className="text-dark-secondary text-nowrap">
                            Progres Kelas:
                        </p>
                        <p className="text-dark-primary font-medium">
                            {status === "otw" ? "28%" : "100%"}
                        </p>
                    </div>
                    <span className="flex w-full">
                        <span
                            className={`h-1 bg-tertiary 
                            ${status === "otw" ? "w-1/3" : "w-full"}
                            `}
                        ></span>
                        {status === "otw" ? (
                            <span className="h-1 w-1/2 bg-tertiary-200"></span>
                        ) : (
                            ""
                        )}
                    </span>
                </div>
                {/* 4803 */}
                <div className="grid gap-4 sm:flex sm:w-1/2">
                    {status === "otw" ? (
                        ""
                    ) : (
                        <Link
                            to="/"
                            className="rounded-[10px] text-center border border-primary py-[7px] px-5.5 text-primary font-bold text-sm leading-[140%] tracking-[0.2px] sm:py-2.5 sm:px-6.5 sm:text-base sm:w-full sm:flex sm:place-content-center"
                        >
                            Unduh Sertifikat
                        </Link>
                    )}
                    <Link to="/video">
                        <Button className="w-full">
                            {status === "otw"
                                ? "Lanjutkan Pembelajaran"
                                : "Lihat Detail Kelas"}
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Card_pesanan;
