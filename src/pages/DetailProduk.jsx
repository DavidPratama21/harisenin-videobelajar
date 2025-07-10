import DetailProdukLayout from "../layouts/DetailProduk_layout";
import avatar from "../assets/Avatar_tutor/8.png";
import image1 from "../assets/Card_images/card_1.jpg";
import image2 from "../assets/Card_images/card_2.jpg";
import image3 from "../assets/Card_images/card_3.jpg";
import tutor1 from "../assets/Avatar_tutor/1.png";
import tutor2 from "../assets/Avatar_tutor/2.png";
import tutor3 from "../assets/Avatar_tutor/3.png";
import Card from "../components/molecules/Card";
import { Link } from "react-router";
import {
    BookCheck,
    FileText,
    FilePenLine,
    Video,
    FileBadge,
    Globe,
    ChevronUp,
    ChevronDown,
    CirclePlay,
    Clock,
} from "lucide-react";
import Button from "../components/atoms/Button";

const DetailProduk = () => {
    return (
        <DetailProdukLayout>
            {/* Frame 1000003752 */}
            <div className="grid py-7 px-5 gap-6 relative top-16 mb-16 sm:max-w-[1440px] sm:py-16 sm:px-30 sm:gap-9 sm:mx-auto">
                {/* Breadcrumbs */}
                <div className="flex gap-0.5 leading-[140%] tracking-[0.2px]">
                    <Link to="/" className="text-dark-secondary">
                        Beranda
                    </Link>
                    <p className="text-dark-secondary">/</p>
                    <Link to="/" className="text-dark-secondary">
                        Desain
                    </Link>
                    <p className="text-dark-secondary">/</p>
                    <p className="sm:hidden">Gapai Kari..</p>
                    <p className="hidden sm:inline">
                        Gapai Karier Impianmu sbagai Seorang UI/UX Designer &
                        Product Manager
                    </p>
                </div>
                {/* ================================================== */}
                {/* Start Frame 1000003861 */}
                <div
                    className={`grid place-content-center h-100 rounded-[10px] p-5 gap-6 bg-[linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.8)),url('./src/assets/Hero_bg.jpg')]  bg-center bg-cover
                        sm:pt-20.5 sm:px-25 sm:pb-16`}
                >
                    {/* Frame 1000003868 */}
                    <div className="grid gap-3 text-light-primary">
                        <h1 className="font-semibold text-2xl leading-[140%] tracking-[0.2px] sm:text-[40px]">
                            Gapai Karier Impuanmu sebagai Seorang UI/UX Designer
                            & Product Manager
                        </h1>
                        <p className="text-sm font-medium sm:text-base">
                            Belajar bersama tutor profesional di Video Course.
                            Kapanpun, di manapun.
                        </p>
                    </div>
                    {/* ================================================== */}
                    {/* Frame 1000004495 */}
                    <div className="flex gap-2">
                        {/* Rating */}
                        <div className="flex">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="15"
                                height="14.25"
                                viewBox="0 0 16 15"
                                fill="none"
                            >
                                <path
                                    d="M8 11.4525L12.635 14.25L11.405 8.9775L15.5 5.43L10.1075 4.9725L8 0L5.8925 4.9725L0.5 5.43L4.595 8.9775L3.365 14.25L8 11.4525Z"
                                    fill="#FCE91B"
                                />
                            </svg>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="15"
                                height="14.25"
                                viewBox="0 0 16 15"
                                fill="none"
                            >
                                <path
                                    d="M8 11.4525L12.635 14.25L11.405 8.9775L15.5 5.43L10.1075 4.9725L8 0L5.8925 4.9725L0.5 5.43L4.595 8.9775L3.365 14.25L8 11.4525Z"
                                    fill="#FCE91B"
                                />
                            </svg>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="15"
                                height="14.25"
                                viewBox="0 0 16 15"
                                fill="none"
                            >
                                <path
                                    d="M8 11.4525L12.635 14.25L11.405 8.9775L15.5 5.43L10.1075 4.9725L8 0L5.8925 4.9725L0.5 5.43L4.595 8.9775L3.365 14.25L8 11.4525Z"
                                    fill="#FCE91B"
                                />
                            </svg>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="15"
                                height="14.25"
                                viewBox="0 0 16 15"
                                fill="none"
                            >
                                <path
                                    d="M8 11.4525L12.635 14.25L11.405 8.9775L15.5 5.43L10.1075 4.9725L8 0L5.8925 4.9725L0.5 5.43L4.595 8.9775L3.365 14.25L8 11.4525Z"
                                    fill="#9D9EA1"
                                    fill-opacity="0.12"
                                />
                            </svg>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="15"
                                height="14.25"
                                viewBox="0 0 16 15"
                                fill="none"
                            >
                                <path
                                    d="M8 11.4525L12.635 14.25L11.405 8.9775L15.5 5.43L10.1075 4.9725L8 0L5.8925 4.9725L0.5 5.43L4.595 8.9775L3.365 14.25L8 11.4525Z"
                                    fill="#9D9EA1"
                                    fill-opacity="0.12"
                                />
                            </svg>
                        </div>
                        <p className="font-medium text-xs leading-[140%] tracking-[0.2px] underline text-light-secondary sm:text-sm">
                            3.5 (86)
                        </p>
                    </div>
                    {/* End Frame 1000004496 */}
                </div>
                {/* End Frame 1000003861 */}
                {/* ================================================== */}
                {/* Start Frame 1000004504/3 */}
                <div className="grid gap-6 sm:gap-9 sm:flex">
                    {/* Start Desc & Button */}
                    <div className="grid rounded-[10px] border border-other-border p-5 gap-5 bg-other-primary sm:order-1 sm:h-fit sm:p-6 sm:gap-6">
                        {/* Frame 1000004507 */}
                        <div className="grid gap-3 sm:gap-4">
                            <h2 className="font-semibold text-lg leading-[120%] text-dark-primary">
                                Gapai Karier Impianmu sebagai Seorang UI/UX
                                Designer & Product Manager.
                            </h2>
                            {/* Frame 1000004502 */}
                            <div className="flex justify-between items-end">
                                {/* Frame 1000004505 */}
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
                            <p className="font-medium text-sm leading-[140%] tracking-[0.2px] text-info-default">
                                Penawaran spesial tersisa 2 hari lagi!
                            </p>
                        </div>
                        {/* Frame 1000004506 */}
                        <Button to="/metode">Beli Sekarang</Button>
                        {/* Frame 1000004765 */}
                        <div className="grid gap-3">
                            <p className="font-semibold text-sm leading-[21px] text-dark-primary">
                                Kelas Ini Sudah Termasuk
                            </p>
                            {/* Frame 1000004429 */}
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
                        {/* Frame 1000004766 */}
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
                    {/* End Desc & Button */}
                    {/* ================================================== */}
                    {/* Start Frame 1000004755 */}
                    <div className="grid gap-6 sm:gap-9">
                        {/* Desc & Button (1)*/}
                        <div className="grid rounded-[10px] border border-other-border p-5 gap-5 bg-other-primary sm:p-6 sm:gap-6">
                            <p className="font-semibold text-lg leading-[120%] text-dark-primary sm:text-[20px]">
                                Deskripsi
                            </p>
                            <p className="text-sm leading-[140%] tracking-[0.2px] text-dark-secondary sm:text-base">
                                Foundations of User Experience (UX) Design
                                adalah yang pertama dari rangkaian tujuh kursus
                                yang akan membekali Anda dengan keterampilan
                                yang dibutuhkan untuk melamar pekerjaan tingkat
                                pemula dalam desain pengalaman pengguna.
                                Desainer UX fokus pada interaksi yang dilakukan
                                orang dengan produk seperti situs web, aplikasi
                                seluler, dan objek fisik. Desainer UX membuat
                                interaksi sehari-hari itu dapat digunakan,
                                menyenangkan, dan dapat diakses. Peran seorang
                                desainer UX tingkat pemula mungkin termasuk
                                berempati dengan pengguna, menentukan poin rasa
                                sakit mereka, memunculkan ide untuk solusi
                                desain, membuat wireframe, prototipe, dan maket,
                                dan menguji desain untuk mendapatkan umpan
                                balik.
                            </p>
                        </div>
                        {/* ================================================== */}
                        {/* Desc & Button (2)*/}
                        <div className="grid rounded-[10px] border border-other-border p-5 gap-5 bg-other-primary sm:p-6 sm:gap-6">
                            <p className="font-semibold text-lg leading-[120%] text-dark-primary sm:text-[20px]">
                                Belajar bersama Tutor Profesional
                            </p>
                            {/* Frame 1000004754 */}
                            <div className="grid gap-4 sm:flex">
                                {/* Desc & Button */}
                                <div className="grid rounded-[10px] border p-4 gap-3 border-other-border bg-other-primary sm:p-5 sm:gap-4">
                                    {/* Frame 1000004496 */}
                                    <div className="flex gap-2.5">
                                        {/* Avatar */}
                                        <img
                                            src={avatar}
                                            alt="Avatar"
                                            className="size-10 rounded-[10px]"
                                        />
                                        {/* Title */}
                                        <div>
                                            <p className="font-medium leading-[140%] tracking-[0.2px] text-dark-primary">
                                                Gregorius Edrik Lawanto
                                            </p>
                                            {/* Frame 1000004497 */}
                                            <div className="flex gap-1 leading-[140%] text-sm tracking-[0.2px] text-dark-secondary">
                                                <p>Senior Talent Acquisition</p>
                                                <p className="hidden sm:inline ">
                                                    di
                                                </p>
                                                <p className="hidden sm:inline font-bold">
                                                    WingsGroup
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-sm leading-[140%] tracking-[0.2px] text-dark-primary sm:text-base">
                                        Berkarier di bidang HR selama lebih dari
                                        3 tahun. Saat ini bekerja sebagai Senior
                                        Talent Acquisition Specialist di Wings
                                        Group Indonesia (Sayap Mas Utama) selama
                                        hampir 1 tahun.
                                    </p>
                                </div>
                                {/* ================================================== */}
                                {/* Desc & Button */}
                                <div className="grid rounded-[10px] border p-4 gap-3 border-other-border bg-other-primary sm:p-5 sm:gap-4">
                                    {/* Frame 1000004496 */}
                                    <div className="flex gap-2.5">
                                        {/* Avatar */}
                                        <img
                                            src={avatar}
                                            alt="Avatar"
                                            className="size-10 rounded-[10px]"
                                        />
                                        {/* Title */}
                                        <div>
                                            <p className="font-medium leading-[140%] tracking-[0.2px] text-dark-primary">
                                                Gregorius Edrik Lawanto
                                            </p>
                                            {/* Frame 1000004497 */}
                                            <div className="flex gap-1 leading-[140%] text-sm tracking-[0.2px] text-dark-secondary">
                                                <p>Senior Talent Acquisition</p>
                                                <p className="hidden sm:inline ">
                                                    di
                                                </p>
                                                <p className="hidden sm:inline font-bold">
                                                    WingsGroup
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-sm leading-[140%] tracking-[0.2px] text-dark-primary sm:text-base">
                                        Berkarier di bidang HR selama lebih dari
                                        3 tahun. Saat ini bekerja sebagai Senior
                                        Talent Acquisition Specialist di Wings
                                        Group Indonesia (Sayap Mas Utama) selama
                                        hampir 1 tahun.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* ================================================== */}
                        {/* Desc & Button (3)*/}
                        <div className="grid rounded-[10px] border border-other-border p-5 gap-5 bg-other-primary sm:p-6 sm:gap-6 ">
                            <p className="font-semibold text-lg leading-[120%] text-dark-primary sm:text-[20px]">
                                Kamu akan mempelajari
                            </p>
                            {/* Start Frame 1000004755/63 */}
                            <div className="grid gap-6">
                                {/* Frame 1000004761 */}
                                <div className="grid gap-3">
                                    {/* Frame 1000004760 */}
                                    <div className="flex gap-6 justify-between items-center">
                                        <p className="font-semibold leading-[120%] text-primary sm:hidden">
                                            Introduction to Course 1..
                                        </p>
                                        <p className="hidden font-semibold text-lg leading-[120%] text-primary sm:inline">
                                            Introduction to Course 1:
                                            Foundations of User Experience
                                            Design
                                        </p>
                                        <ChevronUp
                                            size={24}
                                            className="text-dark-secondary"
                                        />
                                    </div>
                                    {/* Desc & Button */}
                                    <div className="flex justify-between rounded-[10px] border p-4 bg-other-primary border-other-border">
                                        <p className="font-medium text-sm leading-[140%] tracking-[0.2px] text-dark-primary sm:text-base">
                                            The basics of user experience design
                                        </p>
                                        {/* Frame 1000004758 */}
                                        <div className="flex gap-4 leading-[140%] tracking-[0.2px]">
                                            {/* Video */}
                                            <div className="flex gap-2 text-dark-secondary">
                                                <CirclePlay />
                                                <p>Video</p>
                                            </div>
                                            {/* Durasi */}
                                            <div className="flex gap-2 text-dark-secondary">
                                                <Clock />
                                                <p>12 Menit</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Desc & Button */}
                                    <div className="flex justify-between rounded-[10px] border p-4 bg-other-primary border-other-border">
                                        <p className="font-medium text-sm leading-[140%] tracking-[0.2px] text-dark-primary sm:text-base">
                                            Jobs in the field of user experience
                                        </p>
                                        {/* Frame 1000004758 */}
                                        <div className="flex gap-4 leading-[140%] tracking-[0.2px]">
                                            {/* Video */}
                                            <div className="flex gap-2 text-dark-secondary">
                                                <CirclePlay />
                                                <p>Video</p>
                                            </div>
                                            {/* Durasi */}
                                            <div className="flex gap-2 text-dark-secondary">
                                                <Clock />
                                                <p>12 Menit</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Desc & Button */}
                                    <div className="flex justify-between rounded-[10px] border p-4 bg-other-primary border-other-border">
                                        <p className="font-medium text-sm leading-[140%] tracking-[0.2px] text-dark-primary sm:text-base">
                                            The product development life cycle
                                        </p>
                                        {/* Frame 1000004758 */}
                                        <div className="flex gap-4 leading-[140%] tracking-[0.2px]">
                                            {/* Video */}
                                            <div className="flex gap-2 text-dark-secondary">
                                                <CirclePlay />
                                                <p>Video</p>
                                            </div>
                                            {/* Durasi */}
                                            <div className="flex gap-2 text-dark-secondary">
                                                <Clock />
                                                <p>12 Menit</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* ================================================== */}
                                {/* Frame 1000004762 */}
                                <div className="flex gap-6 justify-between items-center">
                                    <p className="font-semibold leading-[120%] text-primary sm:hidden">
                                        Universal design, inclusive..
                                    </p>
                                    <p className="hidden font-semibold text-lg leading-[120%] text-primary sm:inline">
                                        Universal design, inclusive design, and
                                        equity-focused design
                                    </p>
                                    <ChevronDown
                                        size={24}
                                        className="text-dark-secondary"
                                    />
                                </div>
                                {/* ================================================== */}
                                {/* Frame 1000004765 */}
                                <div className="flex gap-6 justify-between items-center">
                                    <p className="font-semibold leading-[120%] text-primary sm:hidden">
                                        Introduction to design..
                                    </p>
                                    <p className="hidden font-semibold text-lg leading-[120%] text-primary sm:inline">
                                        Introduction to design sprints
                                    </p>
                                    <ChevronDown
                                        size={24}
                                        className="text-dark-secondary"
                                    />
                                </div>
                                {/* ================================================== */}
                                {/* Frame 1000004766 */}
                                <div className="flex gap-6 justify-between items-center">
                                    <p className="font-semibold leading-[120%] text-primary sm:text-lg ">
                                        Introduction to UX research
                                    </p>
                                    <ChevronDown
                                        size={24}
                                        className="text-dark-secondary"
                                    />
                                </div>
                            </div>
                            {/* End Frame 1000004755/63 */}
                        </div>
                        {/* ================================================== */}
                        {/* Desc & Button (4)*/}
                        <div className="grid rounded-[10px] border border-other-border p-5 gap-5 bg-other-primary sm:p-6 sm:gap-6">
                            <p className="font-semibold text-lg leading-[120%] text-dark-primary sm:text-[20px]">
                                Rating dan Review
                            </p>
                            {/* Frame 1000004754 */}
                            <div className="grid gap-4 sm:flex">
                                {/* Desc & Button */}
                                <div className="grid rounded-[10px] border p-4 gap-3 border-other-border bg-other-primary sm:p-5 sm:gap-4">
                                    {/* Frame 1000004496 */}
                                    <div className="flex gap-2.5">
                                        {/* Avatar */}
                                        <img
                                            src={avatar}
                                            alt="Avatar"
                                            className="size-10 rounded-[10px]"
                                        />
                                        {/* Title */}
                                        <div className="grid leading-[140%] tracking-[0.2px]">
                                            <p className="font-medium  text-dark-primary">
                                                Gregorius Edrik Lawanto
                                            </p>
                                            <p className="text-dark-secondary text-sm">
                                                Alumni Batch 2
                                            </p>
                                        </div>
                                    </div>
                                    <p className="text-sm leading-[140%] tracking-[0.2px] text-dark-primary sm:text-base">
                                        Berkarier di bidang HR selama lebih dari
                                        3 tahun. Saat ini bekerja sebagai Senior
                                        Talent Acquisition Specialist di Wings
                                        Group Indonesia (Sayap Mas Utama) selama
                                        hampir 1 tahun.
                                    </p>
                                    {/* Frame 1000004495 */}
                                    <div className="flex gap-2">
                                        {/* Rating */}
                                        <div className="flex">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="15"
                                                height="14.25"
                                                viewBox="0 0 16 15"
                                                fill="none"
                                            >
                                                <path
                                                    d="M8 11.4525L12.635 14.25L11.405 8.9775L15.5 5.43L10.1075 4.9725L8 0L5.8925 4.9725L0.5 5.43L4.595 8.9775L3.365 14.25L8 11.4525Z"
                                                    fill="#FCE91B"
                                                />
                                            </svg>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="15"
                                                height="14.25"
                                                viewBox="0 0 16 15"
                                                fill="none"
                                            >
                                                <path
                                                    d="M8 11.4525L12.635 14.25L11.405 8.9775L15.5 5.43L10.1075 4.9725L8 0L5.8925 4.9725L0.5 5.43L4.595 8.9775L3.365 14.25L8 11.4525Z"
                                                    fill="#FCE91B"
                                                />
                                            </svg>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="15"
                                                height="14.25"
                                                viewBox="0 0 16 15"
                                                fill="none"
                                            >
                                                <path
                                                    d="M8 11.4525L12.635 14.25L11.405 8.9775L15.5 5.43L10.1075 4.9725L8 0L5.8925 4.9725L0.5 5.43L4.595 8.9775L3.365 14.25L8 11.4525Z"
                                                    fill="#FCE91B"
                                                />
                                            </svg>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="15"
                                                height="14.25"
                                                viewBox="0 0 16 15"
                                                fill="none"
                                            >
                                                <path
                                                    d="M8 11.4525L12.635 14.25L11.405 8.9775L15.5 5.43L10.1075 4.9725L8 0L5.8925 4.9725L0.5 5.43L4.595 8.9775L3.365 14.25L8 11.4525Z"
                                                    fill="#3A3541"
                                                    fill-opacity="0.12"
                                                />
                                            </svg>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="15"
                                                height="14.25"
                                                viewBox="0 0 16 15"
                                                fill="none"
                                            >
                                                <path
                                                    d="M8 11.4525L12.635 14.25L11.405 8.9775L15.5 5.43L10.1075 4.9725L8 0L5.8925 4.9725L0.5 5.43L4.595 8.9775L3.365 14.25L8 11.4525Z"
                                                    fill="#3A3541"
                                                    fill-opacity="0.12"
                                                />
                                            </svg>
                                        </div>
                                        <p className="font-medium text-xs leading-[140%] tracking-[0.2px] text-dark-secondary sm:text-sm">
                                            3.5
                                        </p>
                                    </div>
                                </div>
                                {/* Desc & Button */}
                                <div className="grid rounded-[10px] border p-4 gap-3 border-other-border bg-other-primary sm:p-5 sm:gap-4">
                                    {/* Frame 1000004496 */}
                                    <div className="flex gap-2.5">
                                        {/* Avatar */}
                                        <img
                                            src={avatar}
                                            alt="Avatar"
                                            className="size-10 rounded-[10px]"
                                        />
                                        {/* Title */}
                                        <div className="grid leading-[140%] tracking-[0.2px]">
                                            <p className="font-medium  text-dark-primary">
                                                Gregorius Edrik Lawanto
                                            </p>
                                            <p className="text-dark-secondary text-sm">
                                                Alumni Batch 4
                                            </p>
                                        </div>
                                    </div>
                                    <p className="text-sm leading-[140%] tracking-[0.2px] text-dark-primary sm:text-base">
                                        Berkarier di bidang HR selama lebih dari
                                        3 tahun. Saat ini bekerja sebagai Senior
                                        Talent Acquisition Specialist di Wings
                                        Group Indonesia (Sayap Mas Utama) selama
                                        hampir 1 tahun.
                                    </p>
                                    {/* Frame 1000004495 */}
                                    <div className="flex gap-2">
                                        {/* Rating */}
                                        <div className="flex">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="15"
                                                height="14.25"
                                                viewBox="0 0 16 15"
                                                fill="none"
                                            >
                                                <path
                                                    d="M8 11.4525L12.635 14.25L11.405 8.9775L15.5 5.43L10.1075 4.9725L8 0L5.8925 4.9725L0.5 5.43L4.595 8.9775L3.365 14.25L8 11.4525Z"
                                                    fill="#FCE91B"
                                                />
                                            </svg>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="15"
                                                height="14.25"
                                                viewBox="0 0 16 15"
                                                fill="none"
                                            >
                                                <path
                                                    d="M8 11.4525L12.635 14.25L11.405 8.9775L15.5 5.43L10.1075 4.9725L8 0L5.8925 4.9725L0.5 5.43L4.595 8.9775L3.365 14.25L8 11.4525Z"
                                                    fill="#FCE91B"
                                                />
                                            </svg>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="15"
                                                height="14.25"
                                                viewBox="0 0 16 15"
                                                fill="none"
                                            >
                                                <path
                                                    d="M8 11.4525L12.635 14.25L11.405 8.9775L15.5 5.43L10.1075 4.9725L8 0L5.8925 4.9725L0.5 5.43L4.595 8.9775L3.365 14.25L8 11.4525Z"
                                                    fill="#FCE91B"
                                                />
                                            </svg>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="15"
                                                height="14.25"
                                                viewBox="0 0 16 15"
                                                fill="none"
                                            >
                                                <path
                                                    d="M8 11.4525L12.635 14.25L11.405 8.9775L15.5 5.43L10.1075 4.9725L8 0L5.8925 4.9725L0.5 5.43L4.595 8.9775L3.365 14.25L8 11.4525Z"
                                                    fill="#3A3541"
                                                    fill-opacity="0.12"
                                                />
                                            </svg>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="15"
                                                height="14.25"
                                                viewBox="0 0 16 15"
                                                fill="none"
                                            >
                                                <path
                                                    d="M8 11.4525L12.635 14.25L11.405 8.9775L15.5 5.43L10.1075 4.9725L8 0L5.8925 4.9725L0.5 5.43L4.595 8.9775L3.365 14.25L8 11.4525Z"
                                                    fill="#3A3541"
                                                    fill-opacity="0.12"
                                                />
                                            </svg>
                                        </div>
                                        <p className="font-medium text-xs leading-[140%] tracking-[0.2px] text-dark-secondary sm:text-sm">
                                            3.5
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Frame 1000004755 */}
                </div>
                {/* End Frame 1000004504/3 */}
                {/* ================================================== */}
                {/* Card Section */}
                <div className="grid gap-6 sm:gap-8">
                    {/* Frame 1000003692 */}
                    <div className="grid gap-2.5">
                        <h1 className="font-semibold text-2xl leading-[110%] text-dark-primary sm:text-[32px]">
                            Video Pembelajaran Terkait Lainnya
                        </h1>
                        <p className="text-sm leading-[140%] tracking-[0.2px] text-dark-secondary sm:text-base">
                            Ekspansi Pengetahuan Anda dengan Rekomendasi Spesial
                            Kami!Ekspansi Pengetahuan Anda dengan Rekomendasi
                            Spesial Kami!
                        </p>
                    </div>
                    {/* Frame 1000003842 */}
                    <div className="grid gap-5 sm:gap-6 sm:flex">
                        <Card image={image1} tutor={tutor1} />
                        <Card image={image2} tutor={tutor2} />
                        <Card image={image3} tutor={tutor3} />
                    </div>
                </div>
            </div>
        </DetailProdukLayout>
    );
};

export default DetailProduk;
