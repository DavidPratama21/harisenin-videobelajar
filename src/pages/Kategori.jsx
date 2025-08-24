import Kategori_layout from "../layouts/Kategori_layout";
import Card from "../components/molecules/Card";
import Filter from "../components/molecules/Filter";
import Pagination from "../components/molecules/Pagination";
import Filter_kategori from "../components/molecules/Filter_kategori";
import {
    BookText,
    ChevronDown,
    ChevronLeft,
    ChevronRight,
    Clock,
    Search,
    ShoppingBag,
} from "lucide-react";
import card_1 from "../assets/Card_images/card_1.jpg";
import card_2 from "../assets/Card_images/card_2.jpg";
import card_3 from "../assets/Card_images/card_3.jpg";
import card_4 from "../assets/Card_images/card_4.jpg";
import card_5 from "../assets/Card_images/card_5.jpg";
import card_6 from "../assets/Card_images/card_6.jpg";
import card_7 from "../assets/Card_images/card_7.jpg";
import card_8 from "../assets/Card_images/card_8.jpg";
import card_9 from "../assets/Card_images/card_9.jpg";
import tutor_1 from "../assets/Avatar_tutor/1.png";
import tutor_2 from "../assets/Avatar_tutor/2.png";
import tutor_3 from "../assets/Avatar_tutor/3.png";
import tutor_4 from "../assets/Avatar_tutor/4.png";
import tutor_5 from "../assets/Avatar_tutor/5.png";
import tutor_6 from "../assets/Avatar_tutor/6.png";
import tutor_7 from "../assets/Avatar_tutor/7.png";
import tutor_8 from "../assets/Avatar_tutor/8.png";

const Kategori = () => {
    return (
        <>
            <Kategori_layout>
                {/* 3752 */}
                <div className="grid py-7 px-5 gap-6 relative top-16 mb-16 sm:py-16 sm:px-30 sm:gap-9 sm:max-w-[1440px] sm:mx-auto">
                    {/* 3692 */}
                    <div className="grid gap-2.5">
                        <h1 className="font-semibold text-2xl leading-[110%] text-dark-primary sm:text-[32px]">
                            Koleksi Video Pembelajaran Unggulan
                        </h1>
                        <p className="text-sm leading-[140%] tracking-[0.2px] text-dark-secondary sm:text-base">
                            Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
                        </p>
                    </div>
                    {/* 4503 */}
                    <div className="grid gap-6 sm:flex sm:gap-10.5">
                        {/* Desc & Button */}
                        <Filter_kategori />

                        {/* Card Section */}
                        <div className="grid gap-6 sm:gap-8">
                            {/* 4504 */}
                            <Filter />
                            {/* 4505 */}
                            <div className="grid sm:justify-start gap-5 sm:gap-y-8 sm:gap-x-6 sm:grid-cols-2">
                                <Card image={card_1} tutor={tutor_1} />
                                <Card image={card_2} tutor={tutor_2} />
                                <Card image={card_3} tutor={tutor_3} />
                                <Card image={card_4} tutor={tutor_4} />
                                <Card image={card_5} tutor={tutor_5} />
                                <Card image={card_6} tutor={tutor_6} />
                                <Card image={card_7} tutor={tutor_7} />
                                <Card image={card_8} tutor={tutor_8} />
                                <Card image={card_9} tutor={tutor_3} />
                            </div>
                            {/* Pagination/Page Nav */}
                            <Pagination />
                        </div>
                    </div>
                </div>
            </Kategori_layout>
        </>
    );
};

export default Kategori;
