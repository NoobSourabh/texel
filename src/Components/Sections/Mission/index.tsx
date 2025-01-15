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
                <div className="left-part-para  ">
                    <div className='hidden md:block '>
                        <RedHeading heading='OUR MISSION' />
                    </div>
                    <div className='md:hidden block md:pl-0 pl-[27px] md:py-0 py-[26px] '>
                        <RedHeadingMob heading='OUR MISSION' />
                    </div>
                    <Paragraph />
                    <img className='mobile-vector-mission' src='https://res.cloudinary.com/dswwp9dju/image/upload/v1736493151/image-33_xv9hmi.svg' />
                </div>
            </div>
            <div className='md:w-[83vw] mx-auto md:mt-[107px]'>
                <div className='core-values'>
                    <div className='hidden md:block'>
                        <RedHeading heading='OUR CORE VALUES' />
                    </div>

                    <div className='md:hidden block pb-[26px]'>
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


    )
}

export default Mission