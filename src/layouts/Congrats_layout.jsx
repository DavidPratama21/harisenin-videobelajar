import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { ArrowLeft, ChevronDown, LogOut, Menu } from "lucide-react";
import Header from "../components/organisems/Header";
import Done_quiz_confirm from "../components/modals/Done_quiz_confirm";
import Bar_progress from "../components/atoms/Bar_progress";
import Ambil_serti from "../components/molecules/Ambil_serti";
import Divider from "../components/atoms/Divider";
import Button from "../components/atoms/Button";
import Serti_modal from "../components/modals/Serti_modal";
import Profile from "../assets/Profile.png";
import { useStore } from "../store/RandomStore";
import Review_box from "../components/modals/Review_box";
const Congrats_layout = ({ children }) => {
    const { isOpen } = useStore();
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
                    {/* <Bar_progress />
                    <p className="font-bold leading-[140%] tracking-[0.2px]">
                        10/12
                    </p>
                    <ChevronDown /> */}
                    <Ambil_serti />
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
            {isProgressOpen && <Serti_modal status="done" />}
            {isOpen && <Review_box />}
            {children}
        </div>
    );
};

export default Congrats_layout;
