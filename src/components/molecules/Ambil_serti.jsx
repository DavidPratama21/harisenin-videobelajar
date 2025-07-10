import { Trophy, ChevronDown } from "lucide-react";

const Ambil_serti = () => {
    return (
        <div className="flex py-1.5 px-4 gap-2 border border-primary rounded-[10px] items-center">
            {/* tropy */}
            <Trophy color="#FF8D3A" fill="#FF8D3A" />
            <p className="font-bold leading-[140%] tracking-[0.2px]">
                Ambil Sertifikat
            </p>
            {/* more */}
            <ChevronDown color="#3ECF4C" />
        </div>
    );
};

export default Ambil_serti;
