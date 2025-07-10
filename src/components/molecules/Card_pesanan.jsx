import card from "../../assets/Card_images/card_2.jpg";

const Card_pesanan = ({ status = "Berhasil" }) => {
    return (
        <div className="grid rounded-[10px] border border-other-border">
            {/* Desc & Button (1)*/}
            <div
                className="grid py-3 px-4.5 gap-3 leading-[140%] tracking-[0.2px] border-b border-other-border bg-[#E2FCD9]/20 
                sm:flex sm:py-4 sm:px-5 sm:justify-between sm:items-center"
            >
                <div className="flex gap-2.5 font-medium text-xs sm:gap-6">
                    <div className="flex gap-2 items-center">
                        <p className="hidden sm:inline text-lg text-dark-secondary">
                            No. Invoice:
                        </p>
                        <p className="underline text-info-default sm:text-lg ">
                            HEL/VI/10062023
                        </p>
                    </div>
                    <div className="flex gap-2 items-center">
                        <p className="hidden sm:inline text-lg text-dark-secondary">
                            Waktu Pembayaran:
                        </p>
                        <p className="text-dark-secondary sm:text-lg">
                            10 Juni 2023, 14.17
                        </p>
                    </div>
                </div>
                {/* Status */}
                <span
                    className={`w-fit py-1 px-2.5 rounded-[10px] text-sm sm:text-base ${
                        status === "gagal"
                            ? "bg-error-background text-error-default"
                            : status === "belum"
                            ? "bg-secondary-100 text-secondary"
                            : "bg-succes-background text-succes-default "
                    } `}
                >
                    {status === "gagal"
                        ? "Gagal"
                        : status === "belum"
                        ? "Belum Bayar"
                        : "Berhasil"}
                </span>
            </div>
            {/* Desc & Button (2)*/}
            <div className="grid py-3 px-4.5 gap-2 border-b border-other-border bg-other-primary sm:p-5 sm:gap-9 sm:flex">
                <div className="flex gap-4 items-center">
                    <img src={card} alt="" className="size-13 rounded-[10px]" />
                    <p className="font-medium text-lg leading-[140%] tracking-[0.2px] text-dark-primary">
                        Belajar Microsoft Office dan Google Workspace untuk
                        Pemula
                    </p>
                </div>
                <span className="border border-other-border w-[1px] h-13"></span>
                <div className="grid gap-2">
                    <p className="font-medium leading-[140%] tracking-[0.2px] text-dark-secondary">
                        Harga
                    </p>
                    <p className="font-semibold text-lg leading-[120%] text-dark-primary">
                        Rp 300.000
                    </p>
                </div>
            </div>
            {/* Desc & Button (3)*/}
            <div className="flex py-3 px-4.5 justify-between items-center bg-[#E2FCD9]/20 sm:py-4 sm:px-5 sm:gap-9">
                <p className="font-medium text-xs leading-[140%] tracking-[0.2px] text-dark-secondary sm:text-base">
                    Total Pembayaran
                </p>
                <p className="font-semibold leading-[120%] text-primary sm:text-lg">
                    Rp 300.000
                </p>
            </div>
        </div>
    );
};

export default Card_pesanan;
