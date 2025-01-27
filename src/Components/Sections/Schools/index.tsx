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

            <div className=" font-publicsans  mx-auto flex flex-col items-center justify-center text-center md:pt-[52px] mt-0 pt-[10px] md:pb-0 md:gap-6 gap-8 px-6">
                <p className="md:w-[78vw] w-full text-[#727272] md:text-[26px] text-[15px] font-normal font-publicsans  md:leading-[29px] leading-6 tracking-tight md:text-center md:mb-[69px] mb-[-14px]">
                    Inside every school lies a very precious resource – the <b>eager students</b> with a <b>passion</b> for learning, <b>dedicated teachers</b> who share knowledge and promote growth, and <b>caring parents</b> who are deeply invested in their children’s success. However, this great potential within everyone is suppressed due to many reasons such as <b>complicated</b>, <b>outdated</b>, and <b>messy systems</b>. Fortunately, Texel has now entered to change the game and transform educational technology for the better.
                </p>
                <p className="md:w-[78vw] w-full text-[#727272] md:text-[26px] text-[15px] font-normal font-publicsans 
                 md:leading-[29px] leading-6 tracking-tight md:text-center md:mt-[-34px]">
                    Texel is started with a very <b>clear purpose</b> in mind that is to provide
                    actually <b>helpful</b> and <b>meaningful</b> support to schools in their journeys in
                    such a way that it prioritizes new ideas and <b>innovative concepts</b>.

                </p>
            </div>
            <Para />
            <div className="w-[85vw] md:h-28 md:mb-[220px] md:mt-[130px] md:pt-0 pt-16 mb-8  opacity-90 text-center mx-auto">
                <p className="text-[#727272] md:text-[26px] text-[15px] font-normal font-publicsans  md:leading-[29px] leading-snug tracking-wider">
                    Join us in our journey to help&nbsp;
                    <b>boost your school success </b>
                    and showing the true potential of every single child. 
                    <b>
                         With Texel in charge, the future of learning is bright, promising and brilliantly simple in concept.
                    </b>
                </p>
            </div>
        </section>
    );
};

export default School;
