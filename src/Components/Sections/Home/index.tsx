
import HomeCard from '../../UI/Cards/HomeCard'
import { testimonial } from '../../UI/Cards/Testimonials new/reviews'
import TestimonialScroll from '../../UI/ScrollTestimonials'
import Features from './Features'
import LastSection from './LastSection'
import './styles.css'
import ThirdSection from './Third'
const Home = () => {
    return (

        <div className='flex flex-col'>
            <div className='hidden md:block h-[681px] gradient-background  flex-col'>
                <div className='flex justify-between ml-[-3.47vw] '>
                    <div className="z-10 h-[508px] pr-[3.6vw] py-[114px] pl-[6.5vw] justify-start items-center gap-[2.08vw] inline-flex overflow-hidden">
                        <div className="w-[38.8vw] h-[280px] z-10" >
                            <div className="inner-left-home-container">
                                <div className="inner-left-home-wrapper">
                                    <div className="inner-left-home-header">
                                        <div className="inner-left-home-title">
                                            <span className="inner-left-home-main-text">Empowering Education Through Seamless Connections</span>
                                            <span className="inner-left-home-sub-text"> </span>
                                        </div>
                                        <div className="inner-left-home-description">Switch to paperless work and more consistent results</div>
                                        <img className="inner-left-home-image" src="https://res.cloudinary.com/dswwp9dju/image/upload/v1736535815/image-40_h0spiw.svg" />
                                    </div>
                                    <div className="inner-left-home-button-container">
                                        <div className="inner-left-home-button">
                                            <a href='/about' className="inner-left-home-button-text">Learn More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <img className='w-[50vw] right-0 ' src='https://res.cloudinary.com/dswwp9dju/image/upload/v1736537082/image-44_fm8y6u.svg' />
                </div>
                <div>
                </div>

            </div>


            {/* MOBILE HOME TOP SECTION */}

            <div className='md:hidden flex h-[389px] w-[100vw] justify-between  gradient-background '>
                {/* <div className='md:hidden flex h-[389px] w-full bg-[url(https://res.cloudinary.com/dswwp9dju/image/upload/v1736840436/image-62_led8ga.svg)] bg-no-repeat '> */}
                <div className="mt-[51px] ml-[24px] absolute z-10">
                    <div className="">
                        <div className="w-[220px]">
                            <p className=" text-[#7d5d48]/80 text-[11px] font-bold font-montserrat  tracking-tight">Empowering Education Through Seamless Connections</p>
                        </div>
                        <img className="w-[124px]" src="https://res.cloudinary.com/dswwp9dju/image/upload/v1736535815/image-40_h0spiw.svg" />
                        <div className="w-[155px] text-[#2c221c]/80 text-[9px] font-normal font-montserrat leading-3 tracking-tight">Switch to paperless work and more consistent results</div>
                    </div>
                    <div className="w-14 h-[17px] px-1.5 rounded-[5px] border border-[#937663] justify-center items-center inline-flex overflow-hidden ">
                        <a href='/about' className="w-11 text-center text-[#937663] text-[7px] font-bold font-montserrat leading-snug tracking-tight">Learn More</a>
                    </div>
                </div>
                <img className=' ml-auto' src='https://res.cloudinary.com/dswwp9dju/image/upload/v1736839922/image-61_pfaqdn.svg' />
            </div>

            {/* MOBILE HOME TOP SECTION */}



            <div className='cards  '>
                {/* <div className='flex gap-[30px] mr-[140px]'> */}
                <div className="md:h-[296px] h-fit flex md:flex-row flex-col gap-[2.08vw] md:pb-0 pb-[33px]" >
                    <HomeCard
                        url='https://res.cloudinary.com/dswwp9dju/image/upload/v1736225069/b31997dbc83bc1743782e79d556364f5_iyauhx.png'
                        title="7+ Cities"
                        description='Connecting educational communities across multiple cities for a united learning experience' />
                    <HomeCard
                        url='https://res.cloudinary.com/dswwp9dju/image/upload/v1736227819/f6401fbd87dbcda96c29cd8a720b2907_rpcff3.png'
                        title="118+  Schools"
                        description='Fostering collaboration and growth in schools with state-of-the-art educational technology' />
                    <HomeCard
                        url='https://res.cloudinary.com/dswwp9dju/image/upload/v1736225068/8628da21ae0eded15a1d77d2f1659641_apiuhu.png'
                        title="1.4Lakh+  Students	"
                        description='Empowering students with seamless access to assignments, resources, and communication.' />
                </div>


            </div>

            <Features />
            <ThirdSection />
            <div className='md:hidden flex'>
                <TestimonialScroll testimonials={testimonial} />
            </div>
            <LastSection />
        </div>

    )
}

export default Home



// <div className=' flex flex-col'>
//     <div className="home-bg home-bg-vector flex justify-between ">
//         <LeftCard className='left-card-div ' />
//         <RightCard className='right-card-div' />
//     </div>

//     <div className='cards'>
//         <HomeCard
//             url='https://res.cloudinary.com/dswwp9dju/image/upload/v1736225069/b31997dbc83bc1743782e79d556364f5_iyauhx.png'
//             title="7+ Cities"
//             description='Connecting educational communities across multiple cities for a united learning experience' />
//         <HomeCard
//             url='https://res.cloudinary.com/dswwp9dju/image/upload/v1736227819/f6401fbd87dbcda96c29cd8a720b2907_rpcff3.png'
//             title="118+  Schools"
//             description='Fostering collaboration and growth in schools with state-of-the-art educational technology' />
//         <HomeCard
//             url='https://res.cloudinary.com/dswwp9dju/image/upload/v1736225068/8628da21ae0eded15a1d77d2f1659641_apiuhu.png'
//             title="1.4Lakh+  Students	"
//             description='Empowering students with seamless access to assignments, resources, and communication.' />
//     </div>
//     <Features />
//     <ThirdSection />
//     <LastSection />
// </div>