import Selesai_layout from "../layouts/Selesai_layout";
import Stepper from "../components/molecules/Stepper";
import Done from "../assets/Done_payment.svg";
import { Link } from "react-router";
import Button from "../components/atoms/Button";

const Selesai = () => {
    return (
        <Selesai_layout>
            <div className="relative top-19.5 mb-16 grid py-7 px-5 gap-6 justify-items-center sm:max-w-[1440px] sm:pt-16 sm:px-25 sm:pb-32 sm:gap-13 sm:mx-auto">
                <div className="sm:hidden">
                    <Stepper />
                </div>
                {/* Frame 3879 */}
                <div className="grid pt-6 px-5 pb-9 rounded-xl border border-other-border bg-other-primary text-center sm:w-152">
                    <img
                        src={Done}
                        alt="Done Payment"
                        className="justify-self-center"
                    />
                    {/* Frame 4417 */}
                    <div className="grid gap-5">
                        {/* Frame 4439 */}
                        <div className="grid gap-2.5">
                            <p className="font-semibold text-xl leading-[120%] text-dark-primary">
                                Pembayaran Berhasil!
                            </p>
                            <p className="leading-[140%] tracking-[0.2px] text-dark-secondary">
                                Silakan cek email kamu untuk informasi lebih
                                lanjut. Hubungi kami jika ada kendala.
                            </p>
                        </div>
                        <Button to="/pesanan">Lihat Detail Pesanan</Button>
                    </div>
                </div>
            </div>
        </Selesai_layout>
    );
};

export default Selesai;
