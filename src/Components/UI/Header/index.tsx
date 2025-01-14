import './nav.css'; // Importing the external Tailwind CSS file

const Header = () => {
    return (
        <nav className="navbar   md:pt-[24px] md:pb-0 pt-[32px] pb-[37px] ">
            <a href='/' className="logo">
                <img className='texel-logo' src='https://res.cloudinary.com/dswwp9dju/image/upload/v1736533482/image-42_wrox1g.svg' />
                <img className='texel-text' src='https://res.cloudinary.com/dswwp9dju/image/upload/v1736533529/image-43_whicv9.svg' />
            </a>

            <div className="navigation-container font-montserrat">
                <a href="/" className="nav-home">
                    Home
                </a>
                <a href="/for-schools" className="nav-for-schools">
                    For Schools
                </a>
                <a href="/mission" className="nav-mission">
                    Mission
                </a>
                <a href="/about" className="nav-about-us">
                    About Us
                </a>
                <a href="/contact" className="nav-contact-us">
                    Contact Us
                </a>
            </div>

            <a href='/header' className='block md:hidden pr-6'>
                <img src='https://res.cloudinary.com/dswwp9dju/image/upload/v1736522166/image-38_qerqqb.svg' />
            </a>
        </nav>
    );
}

export default Header;
