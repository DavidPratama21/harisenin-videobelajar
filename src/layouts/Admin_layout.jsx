import { useEffect, useRef, useState } from "react";
import { Menu } from "lucide-react";
import { useMediaQuery } from "react-responsive";
import Header from "../components/organisems/Header";
import Footer from "../components/organisems/Footer";
import Drop_down_menu from "../components/molecules/Drop_down_menu";
import Logo from "../components/atoms/Logo";
import Profile from "../assets/Profile.png";

const Admin_layout = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 640 });
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
                <></>
                {isMobile ? (
                    <Menu
                        color="#4A505C"
                        onClick={() => setIsProfileOpen(!isProfileOpen)}
                    />
                ) : (
                    <button onClick={() => setIsProfileOpen(!isProfileOpen)}>
                        <img
                            src={Profile}
                            alt="Profile picture"
                            className="w-11 rounded-[10px]"
                        />
                    </button>
                )}
            </Header>
            {isProfileOpen && (
                // Drop Down Menu
                <Drop_down_menu ref={dropDownRef} />
            )}

            {children}
            <Footer />
        </div>
    );
};

export default Admin_layout;
