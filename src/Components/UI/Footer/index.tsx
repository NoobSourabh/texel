import TexelLogo from '../../../assets/images/TexelLogo';

const Footer = () => {
    return (
        <div className="bottom-0 w-[100vw] mx-auto border-t-[3px] border-[#3f5652] flex-col font-abhayaLibre text-[#3f5652] overflow-x-scroll hidden md:block">
            <div className="flex mx-auto py-8">
                <div className="flex gap-[12vw] mx-auto justify-between">
                    <a href="/" className="mx-[-4vw] w-[19.5vw] overflow-hidden my-auto">
                        <TexelLogo />
                    </a>
                    <div className="flex flex-col gap-8">
                        <div>
                            <h3 className="text-l font-semibold">Know Us</h3>
                        </div>
                        <div className="flex flex-col gap-4 text-sm">
                            <a href="/" className="text-gray-600">Home</a>
                            <a href="/for-schools" className="text-gray-600">Features</a>
                            <a href="/mission" className="text-gray-600">Mission</a>
                            <a href="/about" className="text-gray-600">About Us</a>
                        </div>
                    </div>
                    <div className="flex flex-col gap-8">
                        <div>
                            <h3 className="text-l font-semibold">Contact Us</h3>
                        </div>
                        <div className="flex flex-col gap-4  text-sm">
                            <a href="mailto:contact@mytexel.com" className="text-gray-600">contact@mytexel.com</a>
                            <a href="tel:+91-91253-55841" className="text-gray-600">+91-91253-55841</a>
                        </div>
                    </div>
                    <div className="flex flex-col gap-8">
                        <div>
                            <h3 className="text-l font-semibold">Social</h3>
                        </div>
                        <div className="flex items-center gap-4">
                            <a href="">
                                <img src='/assets-public/images/svgs/footer-fb.svg'
                                    alt="Social Icon" />
                            </a>
                            <a href="https://www.instagram.com/texel.social/">
                                <img src='/assets-public/images/svgs/footer-insta.svg' alt="Instagram" />
                            </a>
                            <a href="">
                                <img src='/assets-public/images/svgs/footer-twitter.svg'
 alt="Social Icon" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full flex justify-center border-t-[3px] border-[#3F56521A]/10 py-[16px] text-sm text-[#3f5652]">
                <p>© 2024 Texel Co. | All Rights Reserved</p>
            </div>
        </div>
    );
};

export default Footer;
