import { useStore } from "../../store/RandomStore";
import { Link } from "react-router";
import Button from "../atoms/Button";
import Stars from "../atoms/Stars";
const Review_box = () => {
    const { toggle } = useStore();
    return (
        <div className="fixed inset-0 z-5 px-4 flex items-center justify-center">
            {/* BG Dark overlay*/}
            <div
                onClick={toggle}
                className="absolute inset-0 bg-dark-secondary/50"
            ></div>

            {/* Modal Box */}
            <div className="relative z-7 grid pt-6 pb-5 px-5 gap-4.5 bg-other-primary rounded-[10px] justify-items-center">
                {/* Title desc */}
                <div className="grid gap-2 leading-[140%] tracking-[0.2px] text-center">
                    <h3 className="font-bold text-black">Selesaikan Pretest</h3>
                    <p className="text-sm text-light-secondary">
                        Apakah kamu yakin untuk menyelesaikan pretest ini?
                    </p>
                </div>
                <Stars />
                {/* Message Box */}
                <textarea
                    name="review"
                    placeholder="Masukkan Review"
                    className="border pl-[17px] pr-3 py-3 w-full rounded-[10px] border-other-border font-medium text-dark-secondary leading-[140%] tracking-[0.2px]"
                ></textarea>
                {/* Cancel & Done BTN */}
                <div className="grid gap-4 w-full">
                    <Button
                        action={toggle}
                        style="reverse"
                        className="border border-primary"
                    >
                        Batal
                    </Button>
                    <Button>
                        <Link to={`/congrats`}>Selesai</Link>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Review_box;
