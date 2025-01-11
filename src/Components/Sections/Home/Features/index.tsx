import FeatureCard from '../../../UI/Cards/Features'
import './styles.css'
const Features = () => {
    return (
        // <div className="ftr-container">
        <div className="w-[100vw] lg:h-[1024px] md:h-[1200px] h-[2040px] pb-20 bg-[#e9d7ca]  flex flex-col justify-center items-center inline-flex">

            <div className="w-[518px] h-[103px] text-center text-[#8a6d59] text-5xl font-normal font-konkhmer leading-[48px]">FEATURES <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /></div>
            <div className="ftr-cards">
                <FeatureCard iconUrl="https://res.cloudinary.com/dswwp9dju/image/upload/v1736230741/dee039ead5e4df247307897d969daddf_u3gr17.png"
                    heading="Attendance Tracking"
                    description="Simplify the process of recording attendance with intuitive dashboards, ensuring accurate and easily accessible records for all stakeholders."
                />
                <FeatureCard iconUrl="https://res.cloudinary.com/dswwp9dju/image/upload/v1736230741/c1eca134d1a3c9536d3dd21e010c340b_drv0jp.png"
                    heading="Timetable Management"
                    description="Keep everyone informed with real-time updates on class schedules, making it easy for students, teachers, and parents to stay organized."
                />
                <FeatureCard iconUrl="https://res.cloudinary.com/dswwp9dju/image/upload/v1736230740/8e1135f8669cfaac3976fc71ea42b3ca_xb8zcp.png"
                    heading="Progress Reports"
                    description="Provide detailed insights into academic performance, combining attendance data and grades for comprehensive evaluations."
                />
                <FeatureCard iconUrl="https://res.cloudinary.com/dswwp9dju/image/upload/v1736230794/homework-svgrepo-com_1_1_jnuvfw.png"
                    heading="Homework Submission"
                    description="Simplify assignment management with easy submissions, allowing teachers to track progress and parents to monitor workload."
                />
                <FeatureCard iconUrl="https://res.cloudinary.com/dswwp9dju/image/upload/v1736230741/f773fa6511fa5d3df879659f0ed821f9_vgs5ro.png"
                    heading="Notices & Announcements"
                    description="Facilitate effective communication through a centralized platform for important updates, ensuring everyone stays informed."
                />
                <FeatureCard iconUrl="https://res.cloudinary.com/dswwp9dju/image/upload/v1736230741/379cc07f5de19b88052111fd322032d4_votn9r.png"
                    heading="GPS Tracking"
                    description="Enhance student safety with ID card tracking, securing access to attendance, transport updates, and real-time activity monitoring."
                />

            </div>
        </div>
    )
}

export default Features