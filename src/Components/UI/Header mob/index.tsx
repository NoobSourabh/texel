

const HeaderMob = ({ onToggleNav }: { onToggleNav: () => void }) => {
    return (
        <nav className="flex  justify-between items-center  bg-white w-full  top-0  pt-[22px]">
            <a href="/" className="flex items-center">
                <img className='mb-[-6px] overflow-hidden' src='/assets-public/images/svgs/header-logo.svg'
                />
                <img className='pt-[6px]' src='/assets-public/images/svgs/header-logo-text.svg'
                />
            </a>
            <button onClick={onToggleNav} className='block md:hidden pr-6 focus:outline-none'>
                <img src='/assets-public/images/svgs/header-close.svg'/>
            </button>
        </nav>
    )
}

export default HeaderMob