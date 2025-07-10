const Tab = ({ children, key, active, onClick }) => {
    return (
        <button key={key} onClick={onClick} className="grid transition-all duration-300 ease-in-out">
            <span className={`py-3 pr-9 font-medium leading-[140%] tracking-[0.2px] text-sm transition-all duration-300 ease-in-out sm:text-base
                ${active ? "text-tertiary" : "text-dark-secondary"}
                `}>
                {children}
            </span>
            {/* Bar */}
            <span className={`h-1.5 w-13 rounded-[10px] transition-all duration-300 ease-in-out ${
                active ? "bg-tertiary opacity-100 scale-100" : "opacity-0 scale-0"
            }`}></span>
        </button>
    );
};

export default Tab;
