import { useMediaQuery } from "react-responsive";
import { CirclePlay } from "lucide-react";
const Video_play = () => {
    const isMobile = useMediaQuery({ maxWidth: 640 });
    return (
        <div className="w-full h-42.5 bg-black sm:w-full sm:h-126">
            <div className="bg-[#3d3d3d] h-full w-4/5 mx-auto text-light-primary grid place-items-center sm:w-auto sm:aspect-video">
                <CirclePlay
                    fill="#FFF"
                    color="#3d3d3d"
                    size={isMobile ? 24 : 100}
                />
            </div>
        </div>
    );
};

export default Video_play;
