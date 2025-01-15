import Para from './Para'
import './styles.css'
const School = () => {
    return (
        <section className='sec-1'>
            <img className='sec-1-img' src='https://res.cloudinary.com/dswwp9dju/image/upload/v1736554062/image-47_lj46zq.svg' />
            <img className='sec-1-img-mob' src='https://res.cloudinary.com/dswwp9dju/image/upload/v1736554392/image-49_uywwcd.svg' />

            <div className="centered-container">
                <p className="custom-text">
                    Inside every school lies a very precious resource – the <strong className="highlighted-text">eager students</strong> with a <strong className="highlighted-text">passion</strong> for learning, <strong className="highlighted-text">dedicated teachers</strong> who share knowledge and promote growth, and <strong className="highlighted-text">caring parents</strong> who are deeply invested in their children’s success. However, this great potential within everyone is suppressed due to many reasons such as <strong className="highlighted-text">complicated</strong>, <strong className="highlighted-text">outdated</strong>, and <strong className="highlighted-text">messy systems</strong>. Fortunately, Texel has now entered to change the game and transform educational technology for the better.
                </p>
                <p className="custom-text-2">
                    Texel is started with a very <strong className="highlighted-text">clear purpose</strong> in mind that is to provide actually <strong className="highlighted-text">helpful</strong> and <strong className="highlighted-text">meaningful</strong> support to schools in their journeys in such a way that it prioritizes new ideas and <strong className="highlighted-text">innovative concepts</strong>.
                </p>
            </div>
            <Para />
            <div className="w-[85vw] md:h-28 md:mb-0 mb-[130px] opacity-90 text-center mx-auto">
                <span className="text-[#727272] md:text-[32px]  text-[15px]  font-normal font-msUIGothic md:leading-[29px] leading-snug  tracking-tight">Join us in our journey to help </span>
                <span className="text-black/60 md:text-[27.20px] text-[13px] font-bold font-ptsans md:leading-[29px] leading-snug  tracking-tight">boost your school success</span>
                <span className="text-[#727272] md:text-[32px]  text-[15px]  font-normal font-msUIGothic md:leading-[29px] leading-snug  tracking-tight"> and showing the true potential of every single child. </span>
                <span className="text-black/60 md:text-[27.20px] text-[13px] font-bold font-ptsans md:leading-[29px] leading-snug  tracking-tight">With Texel in charge, the future of learning is bright, promising and brilliantly simple in concept</span>
                <span className="text-[#727272] md:text-[32px]  text-[15px]  font-normal font-msUIGothic md:leading-[29px] leading-snug  tracking-tight">.</span>
            </div>
        </section>
    )
}

export default School


