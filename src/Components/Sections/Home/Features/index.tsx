import FeatureCard from '../../../UI/Cards/Features'
import './styles.css'
const Features = () => {
    return (
        // <div className="ftr-container">
        <div className="w-[100vw] lg:h-[1024px] md:h-[1200px] h-[2040px] pb-20 bg-[#e9d7ca]  flex flex-col justify-center items-center ">

            <div className="w-[518px] h-[103px] text-center text-[#8a6d59] md:text-5xl  text-4xl font-normal font-konkhmer md:pt-0 pt-[30px]">FEATURES <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /></div>
            <div className="ftr-cards">
                <FeatureCard iconUrl="https://res.cloudinary.com/dswwp9dju/image/upload/v1736921729/image-66_jzwq2x.svg"
                    heading="Attendance Tracking"
                    description="Simplify the process of recording attendance with intuitive dashboards, ensuring accurate and easily accessible records for all stakeholders."
                />
                <FeatureCard iconUrl="https://res.cloudinary.com/dswwp9dju/image/upload/v1736921565/image-65_wkkqhz.svg"
                    heading="Timetable Management"
                    description="Keep everyone informed with real-time updates on class schedules, making it easy for students, teachers, and parents to stay organized."
                />
                <FeatureCard iconUrl="https://res.cloudinary.com/dswwp9dju/image/upload/v1736921808/image-67_tortih.svg"
                    heading="Progress Reports"
                    description="Provide detailed insights into academic performance, combining attendance data and grades for comprehensive evaluations."
                />
                <FeatureCard iconUrl="https://res.cloudinary.com/dswwp9dju/image/upload/v1736921803/image-68_ayxgre.svg"
                    heading="Homework Submission"
                    description="Simplify assignment management with easy submissions, allowing teachers to track progress and parents to monitor workload."
                />
                <FeatureCard iconUrl="https://res.cloudinary.com/dswwp9dju/image/upload/v1736921800/image-69_ojxsxi.svg"
                    heading="Notices & Announcements"
                    description="Facilitate effective communication through a centralized platform for important updates, ensuring everyone stays informed."
                />
                <FeatureCard iconUrl="https://res.cloudinary.com/dswwp9dju/image/upload/v1736921796/image-70_wmql6c.svg"
                    heading="GPS Tracking"
                    description="Enhance student safety with ID card tracking, securing access to attendance, transport updates, and real-time activity monitoring."
                />

            </div>
        </div>
    )
}

export default Features