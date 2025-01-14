import MissionCard from '../../UI/Cards/Mission'
import Paragraph from './paragraph'
import './style.css'
import { missionData } from '../../../data/data'
import RedHeadingMob from '../../UI/Cards/Red Border Heading/ReadHeadingMob'
import RedHeading from '../../UI/Cards/Red Border Heading'
const Mission = () => {

    return (
        <div className='mission' >
            <div className="mission-bg ">
                <img className='left-part' src='https://res.cloudinary.com/dswwp9dju/image/upload/v1736349938/image-13_rrdsor.svg' />
                <div className="left-part-para md:mr-20">
                    <div className='hidden md:block'>
                        <RedHeading heading='OUR MISSION' />
                    </div>
                    <div className='md:hidden block'>
                        <RedHeadingMob heading='OUR MISSION' />
                    </div>
                    <Paragraph />
                    <img className='mobile-vector-mission' src='https://res.cloudinary.com/dswwp9dju/image/upload/v1736493151/image-33_xv9hmi.svg' />
                </div>
            </div>
            <div className='flex items-center'>
                <div className='core-values'>
                    <div className='hidden md:block'>
                        <RedHeading heading='OUR CORE VALUES' />
                    </div>

                    <div className='md:hidden block'>
                        <RedHeadingMob heading='OUR CORE VALUES' />
                    </div>
                    <div className='mission-card-flex'>
                        {missionData.map((item, index) => (
                            <MissionCard
                                key={index}
                                title={`${index + 1}.  ${item.title}`} // Combine index and title with double spaces
                                content={item.content}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>

        // <div>

        //     <div className="w-[1050px] h-[808px] relative  overflow-hidden">
        //         <div className="w-[1045px] left-[2.50px] top-[160px] absolute justify-between items-center inline-flex">
        //             <div className="w-[565px] h-[701px] flex-col justify-start items-start gap-[35px] inline-flex overflow-hidden">
        //                 <div className="w-[1045px] h-[474px] justify-between items-center inline-flex">
        //                     <div className="w-[565px] h-[701px] flex-col justify-start items-start gap-[35px] inline-flex overflow-hidden">
        //                     </div>
        //                 </div>
        //             </div>
        //         <Paragraph />
        //         </div>
        //         <img className='absolute w-[50vw] px-[36px] py-8' src='https://res.cloudinary.com/dswwp9dju/image/upload/v1736349938/image-13_rrdsor.svg' />
        //         <div className="h-28 pl-[720px] pr-[71px] pt-[23px] pb-[17px] left-[-243px] top-[8px] absolute flex-col justify-end items-start gap-4 inline-flex overflow-hidden">
        //             <div className="w-[94px] h-[7px] bg-[#e64040]" />
        //             <div className="w-[290px] h-[49px] text-[#252b42] text-[40px] font-bold font-['Montserrat'] leading-[50px] tracking-tight">OUR MISSION</div>
        //         </div>
        //     </div>
        // </div>

        // <div className='pt-14'>

        //     <div className="relative w-full max-w-[1050px] h-[808px] overflow-hidden ">
        //         {/* Header Section */}

        //         {/* Main Content Container */}
        //         <div className="absolute left-[2.5px] top-[160px] w-[1045px] flex justify-between items-center">
        //             {/* Left Content Area */}
        //             <div className="w-[565px] flex flex-col gap-[35px]">
        //                 <div className="relative">
        //                     {/* Illustration */}
        //                     <img
        //                         src='https://res.cloudinary.com/dswwp9dju/image/upload/v1736349938/image-13_rrdsor.svg'
        //                         alt="Educational illustration"
        //                         className="w-[50vw] px-[36px] py-3"
        //                     />
        //                 </div>
        //             </div>

        //             {/* Right Content Area - Text Content */}
        //             <Paragraph />
        //             {/* <div className="w-[565px] flex flex-col gap-6 pr-8">
        //             <div className="absolute left-[477px] top-[8px] flex flex-col items-start gap-4">
        //                 <div className="w-[94px] h-[7px] bg-[#e64040]" />
        //                 <h1 className="text-[40px] font-bold font-montserrat text-[#252b42] leading-[50px] tracking-tight">
        //                     OUR MISSION
        //                 </h1>
        //             </div>

        //             <p className="text-gray-600">
        //                 Imagine a world where parents are doing exactly what teachers do-actively
        //                 participating in their child's education. This application helps bridge that
        //                 gap. Education is a shared responsibility between parents and institutions.
        //             </p>

        //             <p className="text-gray-600">
        //                 Children spend nearly half their waking hours in school, while parents
        //                 have very little experience. This application gives parents empowering
        //                 information. The homework section explains assignments, covered
        //                 topics, and needed support areas.
        //             </p>

        //             <p className="text-gray-600">
        //                 It helps schools in understanding methods of teaching, pinpointing areas
        //                 where students would need special support. "This is a very powerful tool
        //                 that recognizes dedication and helps kids thrive".
        //             </p>

        //             <p className="text-gray-600">
        //                 We are empowering parents, teachers, and school administrators. The app
        //                 transforms parents into active participants in their child's journey,
        //                 celebrating successes and supporting challenges.
        //             </p>

        //             <p className="font-medium text-gray-800">
        //                 Together, we're enriching education, not just managing it.
        //             </p>
        //         </div> */}
        //         </div>
        //     </div>
        // </div>
    )
}

export default Mission