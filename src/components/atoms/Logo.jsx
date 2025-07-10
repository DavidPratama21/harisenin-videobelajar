import { Link } from "react-router";
import VideoBelajar from "../../assets/Logo.svg";

const Logo = () => {
    return (
        <Link
            to="/"
            className={`grid place-content-center h-[42px] w-[152px] sm:h-[56px] sm:w-[237px]`}
        >
            <img
                src={VideoBelajar}
                className="h-[25px] sm:h-[30px]"
                alt="Logo Video Belajar"
            />
        </Link>
    );
};

export default Logo;
