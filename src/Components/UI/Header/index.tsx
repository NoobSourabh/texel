import './nav.css'; // Importing the external Tailwind CSS file

const Header = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                <img src='https://res.cloudinary.com/dswwp9dju/image/upload/v1736533482/image-42_wrox1g.svg' />
                <img src='https://res.cloudinary.com/dswwp9dju/image/upload/v1736533529/image-43_whicv9.svg' />
            </div>

            <div className="navigation-container">
                <div className="nav-about-us">
                    <div>About Us</div>
                </div>
                <div className="nav-for-schools">
                    <div>For Schools</div>
                </div>
                <div className="nav-mission">
                    <div>Mission</div>
                </div>
                <div className="nav-contact-us">
                    <div>Contact Us</div>
                </div>
                <div className="nav-home">
                    <div>Home</div>
                </div>
            </div>

            <a href='/header' className='block md:hidden pr-6'>
                <img src='https://res.cloudinary.com/dswwp9dju/image/upload/v1736522166/image-38_qerqqb.svg' />
            </a>
        </nav>
    );
}

export default Header;
