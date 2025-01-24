import HeaderMob from "../Header mob"


const NavMob = ({ onToggleNav }: { onToggleNav: () => void }) => {
    return (
        <div className="">

            <HeaderMob onToggleNav={onToggleNav} />
            <nav className=" fixed bottom-[66px] px-[15px] left-0 right-0 bg-white w-full text-[#553e31] font-crimsontext text-[32px] overflow-hidden ">
                <div className="flex flex-col w-full">
                    {[
                        { href: '/', text: 'Home' },
                        { href: '/for-schools', text: 'For Schools' },
                        { href: '/mission', text: 'Mission' },
                        { href: '/about', text: 'About Us' },
                        { href: '/contact', text: 'Contact Us' }
                    ].map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="flex items-center justify-between px-4 pt-[40px] text-gray-700 text-lg border-b border-[#553e31]"
                        >
                            <span className="italic mob-nav-h text-[32px] pb-[9px]  ">{link.text}</span>
                            <span className="">&gt;&gt;</span>
                        </a>
                    ))}
                </div>
            </nav>
        </div>
    )
}

export default NavMob