const Header = ({ onToggleNav }: { onToggleNav: () => void }) => {
    return (
        <nav className="flex justify-between items-center md:pl-10 pl-2 bg-white top-0 w-full h-auto pt-[22px] md:pt-0 md:pb-0 md:pr-4 pr-0">
            <a href="/" className="flex items-center">
                <img
                    className="mb-[-6px] overflow-hidden"
                    src='/assets-public/images/svgs/header-logo.svg'
                    alt="Texel Logo"
                />
                <img
                    className="pt-[6px]"
                    src='/assets-public/images/svgs/header-logo-text.svg'
                    alt="Texel Text"
                />
            </a>

            <div className="hidden md:flex items-end justify-between w-[423px] mr-[22px] mt-[8px] tracking-wider ">
                <a href="/" className="text-[color:var(--second-text-color,#737373)] text-center font-montserrat text-[14px] font-bold leading-[24px]">
                    Home
                </a>
                <a href="/for-schools" className="text-[color:var(--second-text-color,#737373)] text-center font-montserrat text-[14px] font-bold leading-[24px]">
                    For Schools
                </a>
                <a href="/mission" className="text-[color:var(--second-text-color,#737373)] text-center font-montserrat text-[14px] font-bold leading-[24px]">
                    Mission
                </a>
                <a href="/about" className="text-[color:var(--second-text-color,#737373)] text-center font-montserrat text-[14px] font-bold leading-[24px]">
                    About Us
                </a>
                <a href="/contact" className="text-[color:var(--second-text-color,#737373)] text-center font-montserrat text-[14px] font-bold leading-[24px]">
                    Contact Us
                </a>
            </div>

            <button
                onClick={onToggleNav}
                className="block md:hidden pr-6 focus:outline-none"
                aria-label="Toggle Navigation"
            >
                <img
                    src='/assets-public/images/svgs/header-menu.svg'
                    alt="Menu Icon"
                />
            </button>
        </nav>
    );
};
export default Header;
