import FeatureCard from '../../../UI/Cards/Features'
import './styles.css'
import Attendence from '../../../../assets/images/svgs/feature-attendence.svg'
import Timetable from '../../../../assets/images/svgs/feature-timetable.svg'
import Progress from '../../../../assets/images/svgs/feature-progress.svg'
import Homework from '../../../../assets/images/svgs/feature-homework.svg'
import Notice from '../../../../assets/images/svgs/feature-notice.svg'
import GPS from '../../../../assets/images/svgs/feature-gps.svg'


const Features = () => {
    return (
        <div className="w-[100vw] lg:h-[1024px] md:h-[1200px] h-[2040px] pb-20 bg-[#e9d7ca]  flex flex-col justify-center items-center ">

            <div className="w-[518px] h-[103px] text-center text-[#8a6d59] md:text-5xl  text-4xl font-normal font-konkhmer md:pt-0 pt-[30px]">FEATURES <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6 px-8 py-4 ">
                <FeatureCard
                    iconUrl={Attendence}
                    heading="Attendance Tracking"
                    description="Simplify the process of recording attendance with intuitive dashboards, ensuring accurate and easily accessible records for all stakeholders."
                />
                <FeatureCard
                    iconUrl={Timetable}
                    heading="Timetable Management"
                    description="Keep everyone informed with real-time updates on class schedules, making it easy for students, teachers, and parents to stay organized."
                />
                <FeatureCard
                    iconUrl={Progress} heading="Progress Reports"
                    description="Provide detailed insights into academic performance, combining attendance data and grades for comprehensive evaluations."
                />
                <FeatureCard
                    iconUrl={Homework} heading="Homework Submission"
                    description="Simplify assignment management with easy submissions, allowing teachers to track progress and parents to monitor workload."
                />
                <FeatureCard
                    iconUrl={Notice} heading="Notices & Announcements"
                    description="Facilitate effective communication through a centralized platform for important updates, ensuring everyone stays informed."
                />
                <FeatureCard
                    iconUrl={GPS} heading="GPS Tracking"
                    description="Enhance student safety with ID card tracking, securing access to attendance, transport updates, and real-time activity monitoring."
                />

            </div>
        </div>
    )
}

export default Features