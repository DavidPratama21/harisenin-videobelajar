import { ChevronLeft, ChevronRight } from "lucide-react";

const Pagination = () => {
    return (
        <div className="flex justify-between items-center gap-1.5 sm:justify-end">
            {/* Frame 1000003871 */}
            <span className="grid rounded p-2 bg-other-base-background text-dark-primary">
                <ChevronLeft size={24} />
            </span>
            {/* Pagination 1 */}
            <span className="grid font-semibold text-sm leading-[140%] tracking-[0.2px] text-light-primary rounded p-2 bg-secondary size-10 place-content-center">
                1
            </span>
            {/* Pagination 2 */}
            <span className="grid font-semibold text-sm leading-[140%] tracking-[0.2px] text-dark-secondary rounded p-2 size-10 place-content-center">
                2
            </span>
            {/* Pagination 3 */}
            <span className="grid font-semibold text-sm leading-[140%] tracking-[0.2px] text-dark-secondary rounded p-2 size-10 place-content-center">
                3
            </span>
            {/* Pagination 4 */}
            <span className="grid font-semibold text-sm leading-[140%] tracking-[0.2px] text-dark-secondary rounded p-2 size-10 place-content-center">
                4
            </span>
            {/* Pagination 5 */}
            <span className="grid font-semibold text-sm leading-[140%] tracking-[0.2px] text-dark-secondary rounded p-2 size-10 place-content-center">
                5
            </span>
            {/* Frame 1000003872 */}
            <span className="grid rounded p-2 bg-other-base-background text-dark-primary">
                <ChevronRight size={24} />
            </span>
        </div>
    );
};

export default Pagination;
