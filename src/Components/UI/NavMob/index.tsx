import HeaderMob from "../Header mob"


const NavMob = () => {
    return (
        <div>
            <HeaderMob />


            <nav className="fixed bottom-[66px] px-[15px] left-0 right-0 bg-white w-full text-[#553e31] font-crimsontext ">
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
                            className="flex items-center justify-between px-4 py-3 text-gray-700 text-lg border-b border-[#553e31]"
                        >
                            <span className="italic mob-nav-h">{link.text}</span>
                            <span className="">&gt;&gt;</span>
                        </a>
                    ))}
                </div>
            </nav>

        </div>
    )
}

export default NavMob