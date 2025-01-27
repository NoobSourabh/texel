import RedHeading from '../../UI/Cards/Red Border Heading';
import RedHeadingMob from '../../UI/Cards/Red Border Heading/ReadHeadingMob';
const About = () => {
    return (
        <div className="flex flex-col md:pt-[42px] pt-[26px] md:pb-[233px]">
            <div className="md:px-[100px]">
                <div className="px-8 md:pr-[-40px]">
                    <RedHeading heading="ABOUT US" />
                </div>
                <div className="md:hidden flex pl-[27px] pb-[6px]">
                    <RedHeadingMob heading="ABOUT US" />
                </div>
                <img
                    className="hidden md:block"
                    src='/assets-public/images/svgs/about-quote.svg'
                />
                <img
                    className="md:hidden mx-auto"
                    src='/assets-public/images/svgs/about-quote-mob.svg'
                />
            </div>
            <div className="md:py-0 mt-[40px] flex md:flex-row flex-col-reverse w-full items-center md:items-stretch justify-center md:justify-between md:pr-10 md:mx-[-20px] mx-auto">
                <div className="font-publicsans flex flex-col w-full md:w-[60vw] gap-2 md:gap-0 text-[15px] md:text-xl text-gray px-0 md:pl-[12vw] md:pr-[12vw] pl-[29px] pr-[6px] my-auto">
                    <p className="pt-2 md:pt-0 text-gray text-left md:pr-0 pr-1">
                        Texel helps <b>busy parents</b> juggle work and home responsibilities together. A grateful mother
                        wrote that she has reduced a lot of stress since she started using Texel as she receives
                        real-time updates regarding her child's homework and exams.
                    </p>
                    <br className="hidden md:block" />
                    <p className="pt-2 md:pt-0 text-gray text-left md:pr-0 pr-1">
                        Texel makes it <b>easy for parents to communicate</b> with their children since it keeps them
                        informed, condensing school assignments, and improves the home atmosphere due to fewer
                        reminders. With Texel, parents can enjoy updates on regular school alerts.
                    </p>
                </div>
                <img
                    className="hidden md:block md:w-[30vw] md:my-14 w-full"
                    src='/assets-public/images/svgs/about-image1.svg'
                />
                <img
                    className="md:hidden block w-full p-8"
                    src='/assets-public/images/svgs/about-image1-mob.svg'
                />
            </div>

            <div className="md:py-0 py-8 md:mx-[-20px] flex md:flex-row flex-col-reverse w-full items-center justify-center md:justify-evenly md:pr-10 md:px-16 text-left">
                <img
                    className="hidden md:block md:w-[35vw]"
                    src='/assets-public/images/svgs/about-image2.svg'
                />
                <img
                    className="block md:hidden pt-11 mx-auto"
                    src='/assets-public/images/svgs/about-image2-mob.svg'
                />
                <div className="flex flex-col gap-[88px] text-[15px] md:text-xl px-0 md:pl-[4px] md:pr-[4px] pl-[29px] pr-[6px]">
                    <div className="flex flex-col">
                        <div className="md:pb-0 py-[18px]">
                            <RedHeadingMob heading="OUR VISION" />
                        </div>
                        <RedHeading heading="OUR VISION" />
                        <p className=" font-publicsans pt-2 md:pt-0 text-gray text-left md:w-[725px] md:pr-[97px] w-full">
                            At Texel, we believe that <b>education is the foundation of a bright future.</b> We see
                            ourselves as a company that empowers teachers, engages students, and supports parents by
                            offering tools that make administrative work easier and improve learning experiences. We see
                            a world where schools can focus again on the <b>fun of teaching</b> and <b>learning without
                                the heavy burden</b> of too much paperwork and fragmented communication. Our ultimate goal is
                            to develop an education ecosystem that enables each user—being a teacher, student, or
                            parent—to feel inspired, informed, and empowered. We strive to deliver powerful tools and
                            streamlined workflows to stimulate environments that facilitate academic excellence in
                            students, innovative and inspiring activity among teachers, and engagement about children's
                            education.
                        </p>
                    </div>

                    <div className="md:mt-0 mt-[-29px]">
                        <div className="md:pb-0 pb-[18px]">
                            <RedHeadingMob heading="OUR COMMITMENT" />
                        </div>
                        <RedHeading heading="OUR COMMITMENT" />
                        <p className="font-publicsans  pt-2 md:pt-0 text-gray text-left lg:w-[725px] md:w-[400px] md:pr-[97px] w-full text-[15px] md:text-xl">
                            We are dedicated to <b>continuous improvement</b> and <b>innovation.</b> Our team is
                            constantly working to enhance the platform based on user feedback, ensuring that we meet the
                            evolving needs of the educational community. At Texel, we're more than just a technology
                            provider—we're a partner in education, committed to helping schools overcome challenges and
                            achieve their goals. Our commitment extends beyond the platform; we're devoted to
                            exceptional support, ensuring that every user can make the most of Texel's features with
                            ease. Whether through updates, new tools, or helpful resources, we're committed to
                            delivering a solution that grows with the needs of each school. We believe that with the
                            right tools, the future of education will be more connected, more inclusive, and more
                            inspiring for everyone involved.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
