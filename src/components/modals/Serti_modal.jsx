import { Link } from "react-router";
import Divider from "../../components/atoms/Divider";
import Button from "../../components/atoms/Button";
const Serti_modal = ({ status }) => {
    return (
        <div className="absolute top-14 right-15 z-1 w-80 shadow-[0_12px_25px_-10px_rgba(61,61,61,0.15)] grid p-6 gap-3 rounded bg-other-primary">
            <p className="font-semibold leading-[120%] text-dark-primary">
                {status === "done"
                    ? "Modul sudah selesai"
                    : "25% Modul Telah Selesai"}
            </p>
            <Divider />
            <p className="text-sm leading-[140%] tracking-[0.2px] text-dark-secondary">
                {status === "done"
                    ? "16 dari 16 modul telah selesai, silahkan download sertifikat"
                    : "Selesaikan Semua Modul Untuk Mendapatkan Sertifikat"}
            </p>
            {status === "done" ? (
                <Button>
                    <Link to="/Sertifikat">Ambil Sertifikat</Link>
                </Button>
            ) : (
                <Button style="disabled">Ambil Sertifikat</Button>
            )}
        </div>
    );
};

export default Serti_modal;
