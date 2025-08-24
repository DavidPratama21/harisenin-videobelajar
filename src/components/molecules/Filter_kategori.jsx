import { BookText, ChevronDown, Clock, ShoppingBag } from "lucide-react";

const Filter_kategori = () => {
    return (
        <div className="grid gap-3 rounded-[10px] border border-other-border p-4 bg-other-primarysm:p-5 sm:gap-4 sm:justify-start sm:h-fit">
            {/* 4502 */}
            <div className="flex justify-between">
                <p className="font-semibold text-lg leading-[120%] text-dark-secondary">
                    Filter
                </p>
                <button className="font-medium leading-[140%] tracking-[0.2px] text-error-default">
                    Reset
                </button>
            </div>
            {/* 3794 */}
            <div className="grid rounded-[10px] border border-other-border py-3 px-4 gap-4.5 bg-other-primary">
                {/* 4500 */}
                <button className="flex gap-4 text-primary items-center justify-between">
                    <div className="flex gap-4 items-center font-medium">
                        <BookText size={24} />
                        <p>Bidang Studi</p>
                    </div>
                    <ChevronDown />
                </button>
                {/* 4501 */}
                <form className="hidden sm:grid gap-3 ">
                    <div className="flex gap-3 items-center p-1.5">
                        <span className="size-4.5 rounded border border-primary bg-primary-100"></span>
                        <label
                            htmlFor="pemasaran"
                            className="leading-[140%] tracking-[0.2px] text-dark-secondary pr-4"
                        >
                            Pemasaran
                        </label>
                    </div>
                    <div className="flex gap-3 items-center p-1.5">
                        <span className="size-4.5 rounded border border-primary bg-primary-100"></span>
                        <label
                            htmlFor="digital_teknologi"
                            className="leading-[140%] tracking-[0.2px] text-dark-secondary pr-4"
                        >
                            Digital & Teknologi
                        </label>
                    </div>
                    <div className="flex gap-3 items-center p-1.5">
                        <span className="size-4.5 rounded border border-primary bg-primary-100"></span>
                        <label
                            htmlFor="pengembangan_diri"
                            className="leading-[140%] tracking-[0.2px] text-dark-secondary pr-4"
                        >
                            Pengembangan Diri
                        </label>
                    </div>
                    <div className="flex gap-3 items-center p-1.5">
                        <span className="size-4.5 rounded border border-primary bg-primary-100"></span>
                        <label
                            htmlFor="bisnis_manajemen"
                            className="leading-[140%] tracking-[0.2px] text-dark-secondary pr-4"
                        >
                            Bisnis Manajemen
                        </label>
                    </div>
                </form>
            </div>
            {/* 4500 */}
            <div className="grid rounded-[10px] border border-other-border py-3 px-4 gap-4.5 bg-other-primary">
                {/* 4500 */}
                <button className="flex gap-4 text-primary items-center justify-between">
                    <div className="flex gap-4 items-center">
                        <ShoppingBag />
                        <p>Harga</p>
                    </div>
                    <ChevronDown />
                </button>
                {/* 4501 */}
                <form className="hidden sm:grid gap-3 ">
                    <div className="flex gap-3 items-center p-1.5">
                        <span className="size-4.5 rounded border border-primary bg-primary-100"></span>
                        <label
                            htmlFor="pemasaran"
                            className="leading-[140%] tracking-[0.2px] text-dark-secondary pr-4"
                        >
                            Rp50.000 - Rp150.000
                        </label>
                    </div>
                    <div className="flex gap-3 items-center p-1.5">
                        <span className="size-4.5 rounded border border-primary bg-primary-100"></span>
                        <label
                            htmlFor="digital_teknologi"
                            className="leading-[140%] tracking-[0.2px] text-dark-secondary pr-4"
                        >
                            Rp150.000 - Rp350.000
                        </label>
                    </div>
                    <div className="flex gap-3 items-center p-1.5">
                        <span className="size-4.5 rounded border border-primary bg-primary-100"></span>
                        <label
                            htmlFor="pengembangan_diri"
                            className="leading-[140%] tracking-[0.2px] text-dark-secondary pr-4"
                        >
                            Rp350.000 keatas
                        </label>
                    </div>
                    {/* <div className="flex gap-3 items-center p-1.5">
                                        <span className="size-4.5 rounded border border-primary bg-primary-100"></span>
                                        <label
                                            htmlFor="bisnis_manajemen"
                                            className="leading-[140%] tracking-[0.2px] text-dark-secondary pr-4"
                                        >
                                            Gratis
                                        </label>
                                    </div> */}
                </form>
            </div>
            {/* 4501 */}
            <div className="grid rounded-[10px] border border-other-border py-3 px-4 gap-4.5 bg-other-primary">
                {/* 4500 */}
                <button className="flex gap-4 text-primary items-center justify-between">
                    <div className="flex gap-4 items-center">
                        <Clock />
                        <p>Durasi</p>
                    </div>
                    <ChevronDown />
                </button>
                {/* 4501 */}
                <form className="hidden sm:grid gap-3 ">
                    <div className="flex gap-3 items-center p-1.5">
                        <span className="size-4.5 rounded-full border border-primary bg-primary-100"></span>
                        <label
                            htmlFor="pemasaran"
                            className="leading-[140%] tracking-[0.2px] text-dark-secondary pr-4"
                        >
                            Kurang dari 4 Jam
                        </label>
                    </div>
                    <div className="flex gap-3 items-center p-1.5">
                        <span className="size-4.5 rounded-full border border-primary bg-primary-100"></span>
                        <label
                            htmlFor="digital_teknologi"
                            className="leading-[140%] tracking-[0.2px] text-dark-secondary pr-4"
                        >
                            4 - 8 Jam
                        </label>
                    </div>
                    <div className="flex gap-3 items-center p-1.5">
                        <span className="size-4.5 rounded-full border border-primary bg-primary-100"></span>
                        <label
                            htmlFor="pengembangan_diri"
                            className="leading-[140%] tracking-[0.2px] text-dark-secondary pr-4"
                        >
                            Lebih dari 8 Jam
                        </label>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Filter_kategori;
