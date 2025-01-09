import Para from './Para'
import './styles.css'
const School = () => {
    return (
        <section className='sec-1'>
            <img src='https://res.cloudinary.com/dswwp9dju/image/upload/v1736325164/image-12_dyseh5.svg' />
            <div className="sec-1-para">
                <p className="sec-1-p">
                    Inside every school lies a very precious resource – the <strong>eager students</strong> with a <strong>passion</strong> for learning, <strong>dedicated teachers</strong> who share knowledge and promote growth, and <strong>caring parents</strong> who are deeply invested in their children’s success. However, this great potential within everyone is suppressed due to many reasons such as <strong>complicated</strong>, <strong>outdated</strong>, and <strong>messy systems</strong>. Fortunately, Texel has now entered to change the game and transform educational technology for the better.
                </p>
                <p className="sec-1-p">
                    Texel is started with a very <strong>clear purpose</strong> in mind that is to provide actually <strong>helpful</strong> and <strong>meaningful</strong> support to schools in their journeys in such a way that it prioritizes new ideas and <strong>innovative concepts</strong>.
                </p>
            </div>
            <Para />
            <p className='mx-[4vw] text-center text-xxl my-[15vh]'>Join us in our journey to help <strong>boost your school success</strong> and showing the true potential of every single child. <strong>With Texel in charge, the future of learning is bright, promising and brilliantly simple in concept.</strong></p>
        </section>
    )
}

export default School