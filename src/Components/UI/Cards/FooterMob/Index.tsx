import TexelLogo from "../../../../assets/images/TexelLogo";

const FooterMob = () => {
    return (
        <footer className="block md:hidden  flex-col  py-2 border-t-[3px] border-[#3f5652]   pt-[30px] mt-[50px]">
            <div className="w-[287px] mx-auto flex flex-col items-center justify-center gap-4 mb-6">
                <a href="/" >
                    <TexelLogo />
                </a>
                <div className='w-[98px] flex justify-between items-center'>
                    <a href=''>
                        <img src='https://res.cloudinary.com/dswwp9dju/image/upload/v1736311304/image-2_gr2ued.svg' />
                    </a>
                    <a href='https://www.instagram.com/texel.social/'>
                        <img src='https://res.cloudinary.com/dswwp9dju/image/upload/v1736311297/image-3_dfs7e4.svg' />
                    </a>
                    <a href=''>
                        <img src='https://res.cloudinary.com/dswwp9dju/image/upload/v1736311289/image-4_m39zo3.svg' />
                    </a>
                </div>
            </div>

            {/* Know Us and Contact Sections in Row */}
            <div className="w-full flex pl-12  mb-[40px] text-[#3f5652]  font-abhayaLibre">
                {/* Know Us Section */}
                <div className="w-[111px]">
                    <h3 className="font-extrabold text-lg mb-4 text">Know Us</h3>
                    <div className="flex flex-col space-y-2 text-sm  ">
                        <a href="/" className="font-normal">Home</a>
                        <a href="/for-schools" className="font-normal">Features</a>
                        <a href="/mission" className="font-normal">Mission</a>
                        <a href="/about" className="font-normal">About Us</a>
                    </div>
                </div>

                {/* Contact Section */}
                <div className="w-[111px]">
                    <h3 className=" font-extrabold text-lg mb-4 font-abhayaLibre">Contact</h3>
                    <div className="flex flex-col space-y-2 text-sm  ">
                        <a href="mailto:contact@mytexel.com" className="font-normal">
                            contact@mytexel.com
                        </a>
                        <a href="https://api.whatsapp.com/send?phone=919125355841" className="font-normal">
                            +91-91255-55841
                        </a>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="w-full flex justify-center border-t-[3px] border-[#3F56521A]/10 pt-2  ">
                <p className="text-[#3f6562] text-semibold text-sm text-center">
                    © 2024 Texel Co. | All Rights Reserved
                </p>
            </div>
        </footer>
    );
};

export default FooterMob;