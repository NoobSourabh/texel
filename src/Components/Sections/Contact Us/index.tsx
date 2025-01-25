import RedHeading from '../../UI/Cards/Red Border Heading';
import RedHeadingMob from '../../UI/Cards/Red Border Heading/ReadHeadingMob';
import ContactForm from './ContactForm';



const ContactUs = () => {
    return (
        <div className="flex flex-col md:flex-row w-full md:px-14 md:py-14 py-[6px] lg:gap-[114px] md:gap-[6vw]  ">
            {/* Left Section */}
            <div className="flex flex-col md:w-[555px] md:px-0 w-full px-6">
                <RedHeading heading="CONTACT US" />
                <div className="md:hidden block pt-[24px] pb-[26px] ">
                    <RedHeadingMob heading="CONTACT US" />
                </div>
                <p className="text-[15px] text-[#727272] my-[-20px] mb-4 font-normal leading-tight font-ptsans md:tracking-wider tracking-tight">
                    We are dedicated to continuous improvement and innovation. Our team is constantly working to
                    enhance the platform based on user feedback, ensuring that we meet the evolving needs of the
                    educational community. At Texel, we're more than just a technology provider—we're a partner in
                    education, committed to helping schools overcome challenges and achieve their goals. Our
                    commitment extends beyond the platform; we're devoted to exceptional support, ensuring that every
                    user can make the most of Texel's features with ease. Whether through updates, new tools, or
                    helpful resources, we're committed to delivering a solution that grows with the needs of each
                    school. We believe that with the right tools, the future of education will be more connected, more
                    inclusive, and more inspiring for everyone involved.
                </p>
                <img
                    className="md:p-8"
                    src='/assets-public/images/svgs/contact-image.svg'
                    alt="About Us"
                />
            </div>
            {/* Right Section */}
            <div className="flex flex-col mx-auto justify-center md:w-auto w-full gap-[20px] md:pt-0 pt-[37px]">
                <div className="flex flex-col gap-[20px] items-center w-full">
                    <h1 className="text-[#6A4F3F] md:text-xl text-3xl font-semibold">
                        SEND US A MESSAGE
                    </h1>
                    <ContactForm />
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
