import MissionCard from '../Cards/Mission'
import Paragraph from './paragraph'
import './style.css'
import {  missionData } from '../../data/data'
const Mission = () => {

    return (
        <div className='mission' >
            <div className="mission-bg ">
                <img className='left-part' src='https://res.cloudinary.com/dswwp9dju/image/upload/v1736349938/image-13_rrdsor.svg' />
                <div className="left-part-para">
                    <div className='red-border-mission'></div>

                    <h1 className="right-heading"><span >OUR</span> MISSION</h1>
                    <Paragraph />
                </div>
            </div>
            <div className='core-values'>
                <div>
                    <div className='red-border-mission'></div>
                    <h1 className="right-heading"><span >OUR</span> CORE VALUES</h1>
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