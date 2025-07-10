import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { ArrowLeft, ChevronDown, LogOut, Menu } from "lucide-react";
import Header from "../components/organisems/Header";
import Bar_progress from "../components/atoms/Bar_progress";
import Profile from "../assets/Profile.png";
const Aturan_layout = ({children}) => {
    const isMobile = useMediaQuery({ maxWidth: 640 });
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [isProgressOpen, setIsProgressOpen] = useState(false);
    const dropDownRef = useRef(null);

    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (
                dropDownRef.current &&
                !dropDownRef.current.contains(e.target)
            ) {
                setIsProfileOpen(false);
            }
            if (
                dropDownRef.current &&
                !dropDownRef.current.contains(e.target)
            ) {
                setIsProgressOpen(false);
            }
        };

        document.addEventListener("mousedown", handleOutsideClick);
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, []);
    return (
        <div>
            <Header>
                {/* Back Btn */}
                <div className="flex gap-2.5 items-center">
                    <div className="text-dark-secondary">
                        <ArrowLeft />
                    </div>
                    <p className="font-medium text-sm leading-[140%] tracking-[0.2px] text-dark-primary truncate w-25 sm:text-base sm:w-fit">
                        Foundations of User Experience Design
                    </p>
                </div>
                {/* Progress video */}
                <button
                    onClick={() => setIsProgressOpen(!isProgressOpen)}
                    className="flex gap-2 items-center text-primary mr-6"
                >
                    {/* Bar Progress */}
                    <Bar_progress />
                    <p className="font-bold leading-[140%] tracking-[0.2px]">
                        10/12
                    </p>
                    <ChevronDown />
                </button>
                {/* Hum / Profile */}
                {isMobile ? (
                    <Menu
                        color="#4A505C"
                        className="sm:hidden"
                        onClick={() => setIsProfileOpen(!isProfileOpen)}
                    />
                ) : (
                    <button onClick={() => setIsProfileOpen(!isProfileOpen)}>
                        <img
                            src={Profile}
                            alt="Profile picture"
                            className="w-11 rounded-[10px] hidden sm:inline"
                        />
                    </button>
                )}
            </Header>
            {isProfileOpen && (
                // Drop Down Menu
                <Drop_down_menu ref={dropDownRef} />
            )}
            {isProgressOpen && (
                <div className="absolute top-14 right-15 z-1 w-80 shadow-[0_12px_25px_-10px_rgba(61,61,61,0.15)] grid p-6 gap-3 rounded bg-other-primary">
                    <p className="font-semibold leading-[120%] text-dark-primary">
                        25% Modul Telah Selesai
                    </p>
                    <Divider />
                    <p className="text-sm leading-[140%] tracking-[0.2px] text-dark-secondary">
                        Selesaikan Semua Modul Untuk Mendapatkan Sertifikat
                    </p>
                    <Button style="disabled">Ambil Sertifikat</Button>
                </div>
            )}
            {children}
        </div>
    );
};

export default Aturan_layout;
