import TexelLogo from "../../../../assets/images/TexelLogo";

const FooterMob = () => {
    return (
        <footer className="block md:hidden flex flex-col  py-2 border-t pt-[30px] mt-[50px]">
            <div className="flex flex-col items-center gap-4 mb-6">
                <TexelLogo />
                <div className='social'>
                    <a href=''>
                        <img src='https://res.cloudinary.com/dswwp9dju/image/upload/v1736311304/image-2_gr2ued.svg' />
                    </a>
                    <a href=''>
                        <img src='https://res.cloudinary.com/dswwp9dju/image/upload/v1736311297/image-3_dfs7e4.svg' />
                    </a>
                    <a href=''>
                        <img src='https://res.cloudinary.com/dswwp9dju/image/upload/v1736311289/image-4_m39zo3.svg' />
                    </a>
                </div>
            </div>

                    {/* Know Us and Contact Sections in Row */}
                    <div className="flex justify-between px-[60px] mb-[40px] ">
                        {/* Know Us Section */}
                        <div>
                            <h3 className="text-slate-800 font-medium text-lg mb-4">Know Us</h3>
                            <div className="flex flex-col space-y-2">
                                <a href="/" className="text-gray-600">Home</a>
                                <a href="/features" className="text-gray-600">Features</a>
                                <a href="/mission" className="text-gray-600">Mission</a>
                                <a href="/about" className="text-gray-600">About Us</a>
                            </div>
                        </div>

                        {/* Contact Section */}
                        <div>
                            <h3 className="text-slate-800 font-medium text-lg mb-4">Contact</h3>
                            <div className="flex flex-col space-y-2">
                                <a href="mailto:contact@mytexel.com" className="text-gray-600">
                                    contact@mytexel.com
                                </a>
                                <a href="tel:+919125555841" className="text-gray-600">
                                    +91-91255-55841
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="pt-2 border-t border-gray-200">
                        <p className="text-gray-500 text-sm text-center">
                            © 2024 Texel Co. | All Rights Reserved
                        </p>
                    </div>
        </footer>
    );
};

export default FooterMob;