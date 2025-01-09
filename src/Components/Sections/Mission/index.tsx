import MissionCard from '../../UI/Cards/Mission'
import Paragraph from './paragraph'
import './style.css'
import { missionData } from '../../../data/data'
import RedHeading from '../../UI/Cards/Red Border Heading'
const Mission = () => {

    return (
        <div className='mission' >
            <div className="mission-bg ">
                <img className='left-part' src='https://res.cloudinary.com/dswwp9dju/image/upload/v1736349938/image-13_rrdsor.svg' />
                <div className="left-part-para">
                    <RedHeading heading='OUR MISSION' />
                    <Paragraph />
                </div>
            </div>
            <div className='core-values'>
                <div>
                    <RedHeading heading='OUR CORE VALUES' />
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
    )
}

export default Mission