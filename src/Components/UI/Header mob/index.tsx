

const HeaderMob = ({ onToggleNav }: { onToggleNav: () => void }) => {
    return (
        <nav className="flex  justify-between items-center  bg-white w-full  top-0  pt-[32px]">
            <a href="/" className="flex items-center">
                <img className='mb-[-6px] overflow-hidden' src='https://res.cloudinary.com/dswwp9dju/image/upload/v1736533482/image-42_wrox1g.svg' />
                <img className='pt-[6px]' src='https://res.cloudinary.com/dswwp9dju/image/upload/v1736533529/image-43_whicv9.svg' />
            </a>
            <button onClick={onToggleNav} className='block md:hidden pr-6 focus:outline-none'>
                <img src='https://res.cloudinary.com/dswwp9dju/image/upload/v1736605534/image-56_kv8wff.svg' />
            </button>
        </nav>
    )
}

export default HeaderMob