import Para from './Para';
import SchoolVector from '/assets-public/images/svgs/school-vector.svg'
import SchoolVectorMob from '/assets-public/images/svgs/school-vector-mob.svg'
const School = () => {
    return (
        <section className="flex flex-col md:py-[8vh] py-2 w-full md:items-center justify-center">
            <img
                className="md:block hidden w-full px-4"
                src={SchoolVector}
                alt="School Vector"
            />
            <img
                className="md:hidden block px-4"
                src={SchoolVectorMob}
                alt="Mobile School Vector"
            />

            <div className="mx-auto flex flex-col items-center justify-center text-center md:pt-[52px] mt-0 pt-[10px] md:pb-0 md:gap-6 gap-8 px-6">
                <p className="md:w-[78vw] w-full text-[#727272] md:text-[26px] text-[15px] font-normal font-msUIGothic md:leading-[29px] leading-6 tracking-tight md:text-center md:mb-[69px] mb-[-14px]">
                    Inside every school lies a very precious resource – the <strong className="text-black/60 md:text-[22.40px]  text-[13px] font-bold font-ptsans leading-[29px] tracking-tight">eager students</strong> with a <strong className="text-black/60 md:text-[22.40px]  text-[13px] font-bold font-ptsans leading-[29px] tracking-tight">passion</strong> for learning, <strong className="text-black/60 md:text-[22.40px]  text-[13px] font-bold font-ptsans leading-[29px] tracking-tight">dedicated teachers</strong> who share knowledge and promote growth, and <strong className="text-black/60 md:text-[22.40px]  text-[13px] font-bold font-ptsans leading-[29px] tracking-tight">caring parents</strong> who are deeply invested in their children’s success. However, this great potential within everyone is suppressed due to many reasons such as <strong className="text-black/60 md:text-[22.40px]  text-[13px] font-bold font-ptsans leading-[29px] tracking-tight">complicated</strong>, <strong className="text-black/60 md:text-[22.40px]  text-[13px] font-bold font-ptsans leading-[29px] tracking-tight">outdated</strong>, and <strong className="text-black/60 md:text-[22.40px]  text-[13px] font-bold font-ptsans leading-[29px] tracking-tight">messy systems</strong>. Fortunately, Texel has now entered to change the game and transform educational technology for the better.
                </p>
                <p className="md:w-[78vw] w-full text-[#727272] md:text-[26px] text-[15px] font-normal font-msUIGothic
                 md:leading-[29px] leading-6 tracking-tight md:text-center md:mt-[-34px]">
                    Texel is started with a very <strong className="text-black/60 md:text-[22.40px]  text-[13px] 
                    font-bold font-ptsans leading-[29px] tracking-tight">clear purpose</strong> in mind that is to provide
                    actually <strong className="text-black/60 md:text-[22.40px]  text-[13px] font-bold font-ptsans leading-[29px]
                     tracking-tight">helpful</strong> and <strong className="text-black/60 md:text-[22.40px]  text-[13px] font-bold 
                     font-ptsans leading-[29px] tracking-tight">meaningful</strong> support to schools in their journeys in
                    such a way that it prioritizes new ideas and <strong className="text-black/60 md:text-[22.40px]  text-[13px] 
                    font-bold font-ptsans leading-[29px] tracking-tight">innovative concepts</strong>.

                </p>
            </div>
            <Para />
            <div className="w-[85vw] md:h-28 md:mb-[220px] md:mt-[130px] mt-0 mb-[130px] opacity-90 text-center mx-auto">
                <span className="text-[#727272] md:text-[32px] text-[15px] font-normal font-msUIGothic md:leading-[29px] leading-snug tracking-tight">
                    Join us in our journey to help&nbsp;
                </span>
                <span className="text-black/60 md:text-[27.20px] text-[13px] font-bold font-ptsans md:leading-[29px] leading-snug tracking-tight">
                    boost your school success
                </span>
                <span className="text-[#727272] md:text-[32px] text-[15px] font-normal font-msUIGothic md:leading-[29px] leading-snug tracking-tight">
                    &nbsp;and showing the true potential of every single child.
                </span>
                <span className="text-black/60 md:text-[27.20px] text-[13px] font-bold font-ptsans md:leading-[29px] leading-snug tracking-tight">
                    &nbsp;With Texel in charge, the future of learning is bright, promising and brilliantly simple in concept
                </span>
                <span className="text-[#727272] md:text-[32px] text-[15px] font-normal font-msUIGothic md:leading-[29px] leading-snug tracking-tight">.</span>
            </div>
        </section>
    );
};

export default School;
