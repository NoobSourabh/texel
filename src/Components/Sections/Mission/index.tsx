import MissionCard from '../../UI/Cards/Mission';
import Paragraph from './paragraph';
import { missionData } from '../../../data/data';
import RedHeadingMob from '../../UI/Cards/Red Border Heading/ReadHeadingMob';
import RedHeading from '../../UI/Cards/Red Border Heading';
import MissionVector from '../../../assets/images/svgs/mission-vector.svg'
import MissionVectorMob from '../../../assets/images/svgs/mission-vector-mob.svg'
const Mission = () => {
    return (
        <div className="flex flex-col mx-auto md:pt-0 pt-[16px]">
            {/* Mission Background Section */}
            <div className="w-[100vw] flex justify-around px-auto pt-[32px]">
                <img
                    className="hidden md:block lg:w-[784px] md:w-[500px] h-fit lg:mr-[-5vw] md:mr-[-12vw]  lg:mt-0 "
                    src={MissionVector}
                    alt="Mission Background"
                />
                <div className="w-full flex flex-col md:w-1/2 md:pl-8 pl-0 content-center text-wrap pt-0">
                    <div className="hidden md:block">
                        <RedHeading heading="OUR MISSION" />
                    </div>
                    <div className="md:hidden block pl-[27px] pb-[25px]">
                        <RedHeadingMob heading="OUR MISSION" />
                    </div>
                    <Paragraph />
                    <img
                        className="md:hidden py-8"
                        src={MissionVectorMob}
                        alt="Mission Mobile Vector"
                    />
                </div>
            </div>

            {/* Core Values Section */}
            <div className="md:mx-auto md:mt-[107px]">
                <div className="flex flex-col  h-auto pb-0 md:pb-[161px]">
                    <div className="hidden md:block md:pb-4 lg:pb-0">
                        <RedHeading heading="OUR CORE VALUES" />
                    </div>
                    <div className="md:hidden block pl-[28px] pb-[25px]">
                        <RedHeadingMob heading="OUR CORE VALUES" />
                    </div>
                    <div className="flex flex-col lg:flex-row items-center gap-[5vw]  mx-auto">
                        {missionData.map((item, index) => (
                            <MissionCard
                                key={index}
                                title={`${index + 1}.  ${item.title}`}
                                content={item.content}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Mission;
