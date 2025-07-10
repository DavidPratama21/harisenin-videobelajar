const Header = ({ children }) => {
    return (
        <div
            className="fixed w-full z-1 bg-light-primary px-6 py-4 border-y border-other-border shadow-[0_0_1px_0_rgba(62,67,74,0.31),4px_8px_12px_0_rgba(62,67,74,0.15)]
            sm:py-3 sm:px-30 sm:border-b sm:shadow-none"
        >
            <div className="flex justify-between items-center sm:max-w-[1440px] sm:mx-auto sm:gap-9">
                {/* Frame 3 */}
                <div className="flex justify-between items-center w-full ">
                    {children[0]}
                    {children[1]}
                </div>
                {children[2]}
            </div>
        </div>
    );
};

export default Header;
