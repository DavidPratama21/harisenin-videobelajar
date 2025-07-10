import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import { Menu, LogOut } from "lucide-react";
import Header from "../components/organisems/Header";
import Footer from "../components/organisems/Footer";
import Drop_down_menu from "../components/molecules/Drop_down_menu";
import Stepper from "../components/molecules/Stepper"
import Logo from "../components/atoms/Logo";

const Metode_layout = ({ children }) => {
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const dropDownRef = useRef(null);

    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (
                dropDownRef.current &&
                !dropDownRef.current.contains(e.target)
            ) {
                setIsProfileOpen(false);
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
                <Logo />
                <div className="hidden sm:inline">
                    <Stepper />
                </div>
                <Menu
                    color="#4A505C"
                    className="sm:hidden"
                    onClick={() => setIsProfileOpen(!isProfileOpen)}
                />
            </Header>
            {isProfileOpen && (
                // Drop Down Menu
                <Drop_down_menu ref={dropDownRef} />
            )}
            {children}
            <div className="sm:hidden">
                <Footer />
            </div>
        </div>
    );
};

export default Metode_layout;
