import WaktuPembayaran from "../components/molecules/Waktu_pembayaran";
import Bayar_layout from "../layouts/Bayar_layout";
import Stepper from "../components/molecules/Stepper";
import Image from "../assets/Card_images/card_1.jpg";
import Bca from "../assets/Banks/bca.png";
import {
    BookCheck,
    FileText,
    FilePenLine,
    Video,
    FileBadge,
    Globe,
    ChevronDown,
} from "lucide-react";
import { Link } from "react-router";
import Button from "../components/atoms/Button";
const Bayar = () => {
    return (
        <>
            <Bayar_layout>
                <div className="relative top-19.5 mb-16">
                    <WaktuPembayaran />
                    {/* Frame 3752 */}
                    <div className="grid py-7 px-5 gap-6 sm:max-w-[1440px] sm:mx-auto sm:py-16 sm:px-30 sm:gap-9 sm:flex">
                        {/* Stepper */}
                        <div className="sm:hidden justify-self-center">
                            <Stepper />
                        </div>
                        {/* Desc & Button (1), Gapai */}
                        <div className="grid rounded-[10px] border border-other-border p-5 gap-5 bg-other-primary sm:order-1 sm:h-fit sm:p-6 sm:gap-6 sm:max-w-91.5">
                            {/* Frame 4507 */}
                            <div className="grid gap-3 sm:gap-4">
                                <img
                                    src={Image}
                                    alt="Image Gapai Karier"
                                    className="rounded-[10px] hidden sm:inline"
                                />
                                <h2 className="font-semibold text-lg leading-[120%] text-dark-primary">
                                    Gapai Karier Impianmu sebagai Seorang UI/UX
                                    Designer & Product Manager.
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
                            {/* Desc & Button (2), Metode Pembayaran */}
                            <div className="grid p-5 gap-5 bg-other-primary rounded-[10px] border border-other-border sm:gap-9 sm:p-6">
                                {/* Frame 4769 */}
                                <div className="grid gap-6">
                                    <h5 className="font-semibold text-lg leading-[120%] text-dark-primary sm:text-xl">
                                        Metode Pembayaran
                                    </h5>
                                    {/* Frame 42224 */}
                                    <div className="grid py-9 px-4.5 gap-3 bg-light-primary rounded-xl border border-other-border place-items-center leading-[140%] tracking-[0.2px]">
                                        <img
                                            src={Bca}
                                            alt="BCA Logo"
                                            className="w-29.5"
                                        />
                                        <p className="font-medium text-dark-primary sm:text-lg">
                                            Bayar Melalui Virtual Account BCA
                                        </p>
                                        {/* Frame 4410 */}
                                        <div className="flex font-bold gap-3 items-center">
                                            <p className="text-dark-secondary sm:text-lg">
                                                11739 081234567890
                                            </p>
                                            <p className="text-sm text-tertiary sm:text-base">
                                                Salin
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* Frame 4768 */}
                                <div className="grid gap-5 sm:gap-6">
                                    <p className="font-semibold text-lg leading-[120%] text-dark-primary sm:text-xl">
                                        Ringkasan Pesanan
                                    </p>
                                    {/* Frame 3884 */}
                                    <div className="flex justify-between leading-[140%] tracking-[0.2px] text-dark-secondary sm:text-lg">
                                        <p className="sm:hidden">
                                            Total Harga (3 Barang)
                                        </p>
                                        <p className="hidden sm:inline">
                                            Video Learning: Gapai Karier
                                            Impianmu sebagai Seorang <br />{" "}
                                            UI/UX Designer & Product Manager.{" "}
                                        </p>
                                        <p className="font-bold">Rp 767.500</p>
                                    </div>
                                    {/* Frame 3885 */}
                                    <div className="flex justify-between leading-[140%] tracking-[0.2px] text-dark-secondary sm:text-lg">
                                        <p>Biaya Admin</p>
                                        <p className="font-bold">Rp 7.000</p>
                                    </div>
                                    <span className="w-full h-[1px] bg-other-border"></span>
                                    {/* Frame 42250 */}
                                    <div className="flex justify-between">
                                        <p className="font-bold leading-[140%] tracking-[0.2px] text-dark-primary sm:text-lg">
                                            Total Pembayaran
                                        </p>
                                        <p className="font-semibold text-lg leading-[120%] text-primary sm:text-xl">
                                            Rp 7.000
                                        </p>
                                    </div>
                                </div>
                                {/* Frame 4767 */}
                                <div className="grid gap-4 text-center sm:flex">
                                    {/* Ganti Metode */}
                                    <Button to="/ubahMetode" reverse="yes" className="border border-primary">
                                        Ganti Metode Pembayaran
                                    </Button>
                                    {/* Beli skrg */}
                                    <Button to="/selesai">Beli Sekarang</Button>
                                </div>
                            </div>
                            {/* Desc & Button (3), Tata Cara */}
                            <div className="grid gap-5 p-5 rounded-[10px] border border-other-border bg-other-primary sm:gap-6 sm:p-6">
                                <p className="font-semibold text-xl leading-[120%] text-dark-primary">
                                    Tata Cara Pembayaran
                                </p>
                                {/* Frame 3838 */}
                                <div className="grid gap-2.5">
                                    {/* Tranfer Bank */}
                                    <div className="border border-other-border rounded-xl py-4 px-5 gap-4">
                                        <div className="flex justify-between">
                                            <p className="text-dark-primary font-bold leading-[140%] tracking-[0.2px]">
                                                ATM BCA
                                            </p>
                                            <ChevronDown color="#333333AD" />
                                        </div>
                                        {/* <ol className="list-decimal pl-5 sm:text-lg">
                                            <li>Masukkan kartu ATM dan PIN BCA Anda</li>
                                            <li>Di menu utama, pilih "Transaksi Lainnya". Pilih "Transfer". Pilih "Ke BCA Virtual Account"</li>
                                            <li>Masukkan nomor Virtual Account</li>
                                            <li>Pastikan data Virtual Account Anda benar, kemudian masukkan angka yang perlu Anda bayarkan, kemudian pilih "Benar"</li>
                                            <li>Cek dan perhatikan konfirmasi pembayaran dari layar ATM, jika sudah benar pilih "Ya", atau pilih "Tidak" jika data di layar masih salah</li>
                                            <li>Transaksi Anda sudah selesai. Pilih "Tidak" untuk tidak melanjutkan transaksi lain</li>
                                        </ol> */}
                                    </div>
                                    {/* E-wallet */}
                                    <div className="flex justify-between py-4 px-5 border border-other-border rounded-xl">
                                        <p className="text-dark-primary font-bold leading-[140%] tracking-[0.2px]">
                                            Mobile Banking BCA
                                        </p>
                                        <ChevronDown color="#333333AD" />
                                    </div>
                                    {/* Kartu Kredit/Debit */}
                                    <div className="flex justify-between py-4 px-5 border border-other-border rounded-xl">
                                        <p className="text-dark-primary font-bold leading-[140%] tracking-[0.2px]">
                                            Internet Banking BCA
                                        </p>
                                        <ChevronDown color="#333333AD" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Bayar_layout>
        </>
    );
};

export default Bayar;
