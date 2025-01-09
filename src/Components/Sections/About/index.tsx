import RedHeading from '../../UI/Cards/Red Border Heading'
import './styles.css'

const About = () => {
    return (
        <div className='about-container'>
            <div className='about-header'>
                <div className='px-8 pb-8'>
                    <RedHeading heading="ABOUT US" />
                </div>
                <img src='https://res.cloudinary.com/dswwp9dju/image/upload/v1736359263/image-15_h9qvx7.svg' />
            </div>
            <div className='about-flex'>
                <div className='about-para'>
                    <p>Texel helps <b>busy parents </b>juggle work and home responsibilities together. A grateful mother wrote that she has reduced a lot of stress since she started using Texel as she receives real-time updates regarding her child's homework and exams.</p>
                    <p>Texel makes it <b>easy for parents to communicate</b> with their children since it keeps them informed, condensing school assignments, and improves the home atmosphere due to fewer reminders. With Texel, parents can enjoy updates on regular school alerts. </p>
                </div>
                <img src='https://res.cloudinary.com/dswwp9dju/image/upload/v1736365099/image-18_zhrbgp.svg' />
            </div>

            <div className='lower-flex'>
                <img src='https://res.cloudinary.com/dswwp9dju/image/upload/v1736365096/image-19_osefol.svg' />

                <div className='lower-flex-para'>
                    <div className='vision-flex'>
                        <RedHeading heading="OUR VISION" />
                        <p>
                            At Texel, we believe that <b>education is the foundation of a bright future. </b>
                            We see ourselves as a company that empowers teachers, engages students,
                            and supports parents by offering tools that make administrative work easier and
                            improve learning experiences. We see a world where schools can focus again on the
                            <b> fun of teaching </b> and <b>learning without the heavy burden</b> of too much paperwork and
                            fragmented communication. Our ultimate goal is to develop an education ecosystem that
                            enables each user-being a teacher, student, or parent-to feel inspired, informed, and
                            empowered. We strive to deliver powerful tools and streamlined workflows to stimulate
                            environments that facilitate academic excellence in students, innovative and inspiring
                            activity among teachers, and engagement about children's education.
                        </p>
                    </div>

                    <div className='commit-flex'>
                        <RedHeading heading="OUR COMMITMENT" />
                        <p>We are dedicated to <b>continuous improvement</b> and <b>innovation.</b> Our team is
                            constantly working to enhance the platform based on user feedback, ensuring that we
                            meet the evolving needs of the educational community. At Texel, we're more than just
                            a technology provider—we're a partner in education, committed to helping schools overcome
                            challenges and achieve their goals .Our commitment extends beyond the platform; we're devoted
                            to exceptional support, ensuring that every user can make the most of Texel's features with ease.
                            Whether through updates, new tools, or helpful resources, we're committed to delivering a
                            solution that grows with the needs of each school. We believe that with the right tools, the
                            future of education will be more connected, more inclusive, and more inspiring for everyone involved.</p>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default About