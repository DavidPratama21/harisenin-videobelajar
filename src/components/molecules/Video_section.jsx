import { CircleCheck, CirclePlay, BookText, BookCheck } from "lucide-react";

const Video_section = ({ kategori = "video", status = "belum" }) => {
    return (
        <div
            className={`grid p-3.5 rounded-[10px] border leading-[140%] tracking-[0.2px] sm:p-4 sm:gap-1 ${
                status === "progres"
                    ? "bg-[#E2FCD966] border-primary"
                    : "bg-other-primary border-other-border"
            }
            `}
        >
            {/* 4795 */}
            <div
                className={`flex gap-1.5 items-center ${
                    status === "progres"
                        ? "text-dark-primary"
                        : "text-dark-secondary"
                }`}
            >
                {/* Icon */}
                {status === "selesai" ? (
                    <CircleCheck fill="#3ECF4C" color="#fff" />
                ) : kategori === "rangkuman" ? (
                    <BookText />
                ) : kategori === "kuis" ? (
                    <BookCheck />
                ) : (
                    <CirclePlay />
                )}
                {/* Title */}
                <p
                    className={`font-medium text-sm sm:text-base ${
                        status === "belum"
                            ? "text-dark-secondary"
                            : "text-dark-primary"
                    }`}
                >
                    {kategori === "rangkuman"
                        ? "Rangkuman: Introduction to HR"
                        : kategori === "kuis"
                        ? "Quiz: Introduction to HR"
                        : "Video: Introduction to HR"}
                </p>
            </div>
            {/* 4796 */}
            <div
                className={`flex px-7.5 gap-2.5 ${
                    status === "progres"
                        ? "text-dark-primary"
                        : "text-dark-secondary"
                }`}
            >
                <p className="text-xs sm:text-sm">
                    {kategori === "kuis" ? "10 Pertanyaan" : "12 Menit"}
                </p>
            </div>
        </div>
    );
};

export default Video_section;
