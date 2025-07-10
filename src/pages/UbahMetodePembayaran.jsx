import UbahMetodePembayaran_layout from "../layouts/UbahMetodePembayaran_layout";
import Stepper from "../components/molecules/Stepper";
import { Link } from "react-router";
import {
    BookCheck,
    FileText,
    FilePenLine,
    Video,
    FileBadge,
    Globe,
    ChevronDown,
    CircleCheck,
} from "lucide-react";
import Bca from "../assets/Banks/bca.png";
import Bni from "../assets/Banks/bni.png";
import Bri from "../assets/Banks/bri.png";
import Mandiri from "../assets/Banks/mandiri.png";
import Dana from "../assets/E-wallet/dana.png";
import Ovo from "../assets/E-wallet/ovo.png";
import Link_aja from "../assets/E-wallet/link_aja.png";
import Shopee_pay from "../assets/E-wallet/shopee_pay.png";
import Master from "../assets/Banks/master.png";
import Visa from "../assets/Banks/visa.png";
import Jcb from "../assets/Banks/jcb.png";
import Image from "../assets/Card_images/card_1.jpg"

const UbahMetodePembayaran = () => {
    return (
        <UbahMetodePembayaran_layout>
            <div className="grid py-7 px-5 gap-6 relative top-16 mb-16 sm:py-16 sm:px-30 sm:gap-9 sm:max-w-[1440px] sm:mx-auto sm:flex">
                {/* Stepper */}
                <div className="sm:hidden  justify-self-center">
                    <Stepper />
                </div>
                {/* Desc & Button */}
                <div className="grid rounded-[10px] border border-other-border p-5 gap-5 bg-other-primary sm:order-1 sm:h-fit sm:p-6 sm:gap-6 sm:max-w-91.5">
                    {/* Frame 4507 */}
                    <div className="grid gap-3 sm:gap-4">
                        <img
                            src={Image}
                            alt="Image Gapai Karier"
                            className="rounded-[10px] hidden sm:inline"
                        />
                        <h2 className="font-semibold text-lg leading-[120%] text-dark-primary">
                            Gapai Karier Impianmu sebagai Seorang UI/UX Designer
                            & Product Manager.
                        </h2>
                        {/* Frame 4502 */}
                        <div className="flex justify-between items-end">
                            {/* Frame 4505 */}
                            <div className="flex gap-2">
                                <p className="font-semibold text-lg leading-[120%] text-primary">
                                    Rp 250K
                                </p>
                                <p className="font-medium leading-[140%] tracking-[0.2px] text-dark-disabled line-through">
                                    Rp 500K
                                </p>
                            </div>
                            {/* Chip */}
                            <span className="rounded-[10px] px-2.5 py-1 bg-secondary text-xs leading-[140%] tracking-[0.2px] text-light-primary">
                                Diskon 50%
                            </span>
                        </div>
                    </div>
                    {/* Frame 4765 */}
                    <div className="grid gap-3">
                        <p className="font-semibold text-sm leading-[21px] text-dark-primary">
                            Kelas Ini Sudah Termasuk
                        </p>
                        {/* Frame 4429 */}
                        <div className="flex gap-4 w-72">
                            {/* Card 1 */}
                            <div className="grid gap-4 w-35">
                                {/* Frame 21271 */}
                                <div className="flex gap-2 text-dark-secondary items-center">
                                    <BookCheck size={24} />
                                    <p className="text-sm leading-[140%] tracking-[0.2px]">
                                        Ujian Akhir
                                    </p>
                                </div>
                                {/* Frame 21272 */}
                                <div className="flex gap-2 text-dark-secondary items-center">
                                    <FileText size={24} />
                                    <p className="text-sm leading-[140%] tracking-[0.2px]">
                                        7 Dokumen
                                    </p>
                                </div>
                                {/* Frame 21267 */}
                                <div className="flex gap-2 text-dark-secondary items-center">
                                    <FilePenLine size={24} />
                                    <p className="text-sm leading-[140%] tracking-[0.2px]">
                                        Pretest
                                    </p>
                                </div>
                            </div>
                            {/* Card 2 */}
                            <div className="grid gap-4 w-35 h-fit">
                                {/* Frame 21273 */}
                                <div className="flex gap-2 text-dark-secondary items-center">
                                    <Video size={24} />
                                    <p className="text-sm leading-[140%] tracking-[0.2px]">
                                        49 Video
                                    </p>
                                </div>
                                {/* Frame 21275 */}
                                <div className="flex gap-2 text-dark-secondary items-center">
                                    <FileBadge size={24} />
                                    <p className="text-sm leading-[140%] tracking-[0.2px]">
                                        Sertifikat
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Frame 4766 */}
                    <div className="grid gap-3">
                        <p className="font-semibold text-sm leading-[21px] text-dark-primary">
                            Bahasa Pengantar
                        </p>
                        {/* Frame 21275 */}
                        <div className="flex gap-2 text-dark-secondary items-center">
                            <Globe size={24} />
                            <p className="text-sm leading-[140%] tracking-[0.2px]">
                                Bahasa Indonesia
                            </p>
                        </div>
                    </div>
                </div>
                {/* Frame 4755 */}
                <div className="grid gap-6 sm:gap-9 sm:w-full">
                    {/* Ringkasan Pesanan */}
                    <div className="grid gap-5 p-5 rounded-[10px] border border-other-border bg-other-primary sm:gap-6 sm:p-6">
                        <p className="font-semibold text-lg leading-[120%] text-dark-primary sm:text-xl">
                            Ringkasan Pesanan
                        </p>
                        {/* Frame 3884 */}
                        <div className="flex justify-between leading-[140%] tracking-[0.2px] text-dark-secondary sm:text-lg">
                            <p>Total Harga (3 Barang)</p>
                            <p className="font-bold">Rp 767.500</p>
                        </div>
                        {/* Frame 3885 */}
                        <div className="flex justify-between leading-[140%] tracking-[0.2px] text-dark-secondary sm:text-lg">
                            <p>Ongkos Kirim</p>
                            <p className="font-bold">Rp 7.000</p>
                        </div>
                        <span className="w-full h-[1px] bg-other-border"></span>
                        {/* Frame 42250 */}
                        <div className="flex justify-between">
                            <p className="font-bold leading-[140%] tracking-[0.2px] text-dark-primary sm:text-lg">
                                Total Pembayaran
                            </p>
                            <p className="font-semibold text-lg leading-[120%] text-primary sm:text-xl">
                                Rp 774.500
                            </p>
                        </div>
                    </div>
                    {/* Metode Pembayaran */}
                    <div className="grid gap-5 p-5 rounded-[10px] border border-other-border bg-other-primary sm:gap-6 sm:p-6">
                        <p className="font-semibold text-lg leading-[120%] text-dark-primary sm:text-xl">
                            Ubah Metode Pembayaran
                        </p>
                        {/* Bank / E-wallet */}
                        <div className="grid gap-2.5">
                            <div className="flex justify-between py-4 px-5 border border-other-border rounded-[10px]">
                                <p className="text-dark-primary font-bold text-sm leading-[140%] tracking-[0.2px] sm:text-base">
                                    Transfer Bank
                                </p>
                                <ChevronDown color="#333333AD" />
                            </div>
                            {/* Banks */}
                            {/* <div className="grid gap-2.5">
                                <div className="flex justify-between py-4 px-5 border border-other-border rounded-[10px]">
                                    <div className="flex items-center gap-3">
                                        <div className="w-6">
                                            <img
                                                src={Bca}
                                                alt="Bank BCA"
                                                className="size-full aspect-square object-cover object-left"
                                            />
                                        </div>
                                        <p className="text-xs leading-[140%] tracking-[0.2px] text-dark-primary sm:text-sm">
                                            Bank BCA
                                        </p>
                                    </div>
                                    <CircleCheck color="#fff" fill="#F64920" />
                                </div>
                                <div className="flex justify-between py-4 px-5 border border-other-border rounded-[10px]">
                                    <div className="flex items-center gap-3">
                                        <div className="w-6">
                                            <img
                                                src={Bni}
                                                alt="Bank BNI"
                                                className="size-full aspect-square object-cover object-left"
                                            />
                                        </div>
                                        <p className="text-xs leading-[140%] tracking-[0.2px] text-dark-primary sm:text-sm">
                                            Bank BNI
                                        </p>
                                    </div>
                                    <CircleCheck color="#fff" fill="#F64920" />
                                </div>
                                <div className="flex justify-between py-4 px-5 border border-other-border rounded-[10px]">
                                    <div className="flex items-center gap-3">
                                        <div className="w-6">
                                            <img
                                                src={Bri}
                                                alt="Bank BRI"
                                                className="size-full aspect-square object-cover object-left"
                                            />
                                        </div>
                                        <p className="text-xs leading-[140%] tracking-[0.2px] text-dark-primary sm:text-sm">
                                            Bank BRI
                                        </p>
                                    </div>
                                    <CircleCheck color="#fff" fill="#F64920" />
                                </div>
                                <div className="flex justify-between py-4 px-5 border border-other-border rounded-[10px]">
                                    <div className="flex items-center gap-3">
                                        <div className="w-6">
                                            <img
                                                src={Mandiri}
                                                alt="Bank Mandiri"
                                                className="size-full aspect-square object-contain object-left"
                                            />
                                        </div>
                                        <p className="text-xs leading-[140%] tracking-[0.2px] text-dark-primary sm:text-sm">
                                            Bank Mandiri
                                        </p>
                                    </div>
                                    <CircleCheck color="#fff" fill="#F64920" />
                                </div>
                            </div> */}
                            <div className="flex justify-between py-4 px-5 border border-other-border rounded-[10px]">
                                <p className="text-dark-primary font-bold text-sm leading-[140%] tracking-[0.2px] sm:text-base">
                                    E-Wallet
                                </p>
                                <ChevronDown color="#333333AD" />
                            </div>
                            {/* E-wallets */}
                            {/* <div className="grid gap-2.5">
                                <div className="flex justify-between py-4 px-5 border border-other-border rounded-[10px]">
                                    <div className="flex items-center gap-3">
                                        <div className="w-6">
                                            <img
                                                src={Dana}
                                                alt="Dana"
                                                className="size-full aspect-square object-cover object-left"
                                            />
                                        </div>
                                        <p className="text-xs leading-[140%] tracking-[0.2px] text-dark-primary sm:text-sm">
                                            Dana
                                        </p>
                                    </div>
                                    <CircleCheck color="#fff" fill="#F64920" />
                                </div>
                                <div className="flex justify-between py-4 px-5 border border-other-border rounded-[10px]">
                                    <div className="flex items-center gap-3">
                                        <div className="w-6">
                                            <img
                                                src={Ovo}
                                                alt="Ovo"
                                                className="size-full aspect-square object-cover object-left"
                                            />
                                        </div>
                                        <p className="text-xs leading-[140%] tracking-[0.2px] text-dark-primary sm:text-sm">
                                            OVO
                                        </p>
                                    </div>
                                    <CircleCheck color="#fff" fill="#F64920" />
                                </div>
                                <div className="flex justify-between py-4 px-5 border border-other-border rounded-[10px]">
                                    <div className="flex items-center gap-3">
                                        <div className="w-6">
                                            <img
                                                src={Link_aja}
                                                alt="LinkAja"
                                                className="size-full aspect-square object-cover object-left"
                                            />
                                        </div>
                                        <p className="text-xs leading-[140%] tracking-[0.2px] text-dark-primary sm:text-sm">
                                            LinkAja
                                        </p>
                                    </div>
                                    <CircleCheck color="#fff" fill="#F64920" />
                                </div>
                                <div className="flex justify-between py-4 px-5 border border-other-border rounded-[10px]">
                                    <div className="flex items-center gap-3">
                                        <div className="w-6">
                                            <img
                                                src={Shopee_pay}
                                                alt="Shopee Pay"
                                                className="size-full aspect-square object-contain object-left"
                                            />
                                        </div>
                                        <p className="text-xs leading-[140%] tracking-[0.2px] text-dark-primary sm:text-sm">
                                            Shopee Pay
                                        </p>
                                    </div>
                                    <CircleCheck color="#fff" fill="#F64920" />
                                </div>
                            </div> */}
                            <div className="flex justify-between py-4 px-5 border border-other-border rounded-[10px]">
                                <p className="text-dark-primary font-bold text-sm leading-[140%] tracking-[0.2px] sm:text-base">
                                    Kartu Kredit/Debit
                                </p>
                                <ChevronDown color="#333333AD" />
                            </div>
                            {/* <div className="flex justify-between py-4 px-5 border border-other-border rounded-[10px]">
                                <div className="flex items-center gap-3">
                                    <img src={Master} alt="" className="h-4" />
                                    <img src={Visa} alt="" className="h-4.5" />
                                    <img src={Jcb} alt="" className="h-4" />
                                </div>
                                <CircleCheck color="#fff" fill="#F64920" />
                            </div> */}
                            <Link
                                to="/bayar"
                                className="rounded-[10px] text-center bg-primary py-[7px] px-5.5 text-light-primary font-bold text-sm leading-[140%] tracking-[0.2px] sm:py-2.5 sm:px-6.5 sm:text-base"
                            >
                                Beli Sekarang
                            </Link>
                        </div>
                    </div>
                    
                </div>
            </div>
        </UbahMetodePembayaran_layout>
    );
};

export default UbahMetodePembayaran;
