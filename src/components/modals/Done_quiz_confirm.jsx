import Button from "../atoms/Button";
import { useStore } from "../../store/RandomStore";
import confirm from "../../assets/done_quiz_image.svg";
import { Link } from "react-router";
const Done_quiz_confirm = () => {
    const { toggle } = useStore();
    return (
        <div className="fixed inset-0 px-4 z-5 flex items-center justify-center">
            {/* BG Dark overlay*/}
            <div
                onClick={toggle}
                className="absolute inset-0 bg-dark-secondary/50"
            ></div>

            {/* Modal Box */}
            <div className="relative z-7 grid pt-6 pb-5 px-5 gap-4.5 bg-other-primary rounded-[10px] justify-items-center">
                {/* Image */}
                <img src={confirm} alt="Are you sure?" />
                {/* Title desc */}
                <div className="grid gap-2 leading-[140%] tracking-[0.2px] text-center">
                    <h3 className="font-bold text-black">Selesaikan Pretest</h3>
                    <p className="text-sm text-light-secondary">
                        Apakah kamu yakin untuk menyelesaikan pretest ini?
                    </p>
                </div>
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

export default Done_quiz_confirm;
