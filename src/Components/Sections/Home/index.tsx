import HomeCard from '../../UI/Cards/HomeCard';
import { testimonial } from '../../UI/Cards/Testimonials new/reviews';
import TestimonialScroll from '../../UI/ScrollTestimonials';
import Features from './Features';
import LastSection from './LastSection';
import ThirdSection from './Third';
import  Homevector from '../../../assets/images/svgs/home1.svg'

const Home = () => {
    return (
        <div className="flex flex-col">
            {/* Desktop Home Top Section */}
            <div className="hidden md:flex h-[681px] flex-col gradient-background" style={{ background: 'linear-gradient(250deg, rgba(125, 93, 72, 0.37) 17.73%, rgba(227, 169, 131, 0.37) 63.1%)' }}>
                <div className="flex justify-between lg:ml-[-3.47vw] md:ml-[-8vw]">
                    <div className="z-10 h-[508px] pr-[3.6vw] py-[114px] pl-[6.5vw] inline-flex justify-start items-center gap-[2.08vw] ">
                        <div className="w-[38.8vw] h-[280px] z-10">
                            <div className="w-[531px] h-[321px] pr-[57.50px] inline-flex justify-start items-center ">
                                <div className="w-[513px] h-[321.40px] relative">
                                    <div className="w-[513px] h-[234px] absolute">
                                        <div className="absolute left-[41px]">
                                            <span className="text-[#7d5d48]/80 md:text-[16px] text-[11px] font-bold font-['Montserrat'] leading-normal tracking-tight">
                                                Empowering Education Through Seamless Connections
                                            </span>
                                        </div>
                                        <div className="absolute w-[450px] left-[41px] top-[174px] text-[#2c221c]/80 text-xl font-normal font-['Montserrat'] leading-[30px] tracking-tight">
                                            Switch to paperless work and more consistent results
                                        </div>
                                        <img
                                            className="absolute w-[332px] h-[171px] left-0 pl-[40px] top-[12px]"
                                            src="https://res.cloudinary.com/dswwp9dju/image/upload/v1736535815/image-40_h0spiw.svg"
                                            alt="Illustration"
                                        />
                                    </div>
                                    <a href="/about" className="absolute left-[39.50px] top-[269.40px] flex justify-start items-start gap-2.5 ">
                                        <div className="px-10 py-[15px] rounded-[5px] border border-[#937663] flex justify-center items-center overflow-hidden">
                                            <span

                                                className="text-center text-[#937663] text-sm font-bold font-['Montserrat'] leading-snug tracking-tight"
                                            >
                                                Learn More
                                            </span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img
                        className="w-[50vw] right-0"
                        src={Homevector}
                        alt="Background Vector"
                    />
                </div>
            </div>

            {/* Mobile Home Top Section */}
            <div className="md:hidden flex h-[389px] w-[100vw] justify-between" style={{ background: 'linear-gradient(250deg, rgba(125, 93, 72, 0.37) 17.73%, rgba(227, 169, 131, 0.37) 63.1%)' }}>
                <div className="mt-[51px] ml-[24px] absolute z-10">
                    <div>
                        <div className="w-[220px]">
                            <p className="text-[#7d5d48]/80 text-[11px] font-bold font-['Montserrat'] tracking-tight">
                                Empowering Education Through Seamless Connections
                            </p>
                        </div>
                        <img
                            className="w-[124px]"
                            src="https://res.cloudinary.com/dswwp9dju/image/upload/v1736535815/image-40_h0spiw.svg"
                            alt="Mobile Illustration"
                        />
                        <div className="w-[155px] text-[#2c221c]/80 text-[9px] font-normal font-['Montserrat'] leading-3 tracking-tight">
                            Switch to paperless work and more consistent results
                        </div>
                    </div>
                    <a href="/about" className="w-14 h-[17px] px-1.5 rounded-[5px] mt-[11px] border border-[#937663] flex justify-center items-center overflow-hidden">
                        <p

                            className="w-11 text-center text-[#937663] text-[7px] font-bold font-['Montserrat']  tracking-tight"
                        >
                            Learn More
                        </p>
                    </a>
                </div>
                <img
                    className="ml-auto"
                    src="https://res.cloudinary.com/dswwp9dju/image/upload/v1736839922/image-61_pfaqdn.svg"
                    alt="Background Vector"
                />
            </div>

            {/* Cards Section */}
            <div className="w-[100vw] md:h-[20px] md:mb-[-60px] md:pt-[50px] md:pb-[270.40px] md:mt-0 mt-[-151px] flex justify-center items-center">
                <div className="md:h-[296px] h-fit flex md:flex-row flex-col gap-[2.08vw] md:pb-0 pb-[33px]">
                    <HomeCard
                        url="https://res.cloudinary.com/dswwp9dju/image/upload/v1736225069/b31997dbc83bc1743782e79d556364f5_iyauhx.png"
                        title="7+ Cities"
                        description="Connecting educational communities across multiple cities for a united learning experience"
                    />
                    <HomeCard
                        url="https://res.cloudinary.com/dswwp9dju/image/upload/v1736227819/f6401fbd87dbcda96c29cd8a720b2907_rpcff3.png"
                        title="118+  Schools"
                        description="Fostering collaboration and growth in schools with state-of-the-art educational technology"
                    />
                    <HomeCard
                        url="https://res.cloudinary.com/dswwp9dju/image/upload/v1736225068/8628da21ae0eded15a1d77d2f1659641_apiuhu.png"
                        title="1.4Lakh+  Students"
                        description="Empowering students with seamless access to assignments, resources, and communication."
                    />
                </div>
            </div>

            {/* Other Sections */}
            <Features />
            <ThirdSection />
            <div className='flex mx-auto'>
                <TestimonialScroll testimonials={testimonial} />
            </div>
            <LastSection />
        </div>
    );
};

export default Home;
