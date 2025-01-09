import RedHeading from '../../UI/Cards/Red Border Heading'
import ContactForm from './ContactForm'
import './styles.css'

const ContactUs = () => {
    return (
        <div className='contact-container'>
            <div className='left-contact'>
                <RedHeading heading="CONTACT US" />
                <p className='left-contact-p'>We are dedicated to continuous improvement and innovation. Our team is constantly working to enhance the platform based on user feedback, ensuring that we meet the evolving needs of the educational community. At Texel, we're more than just a technology provider—we're a partner in education, committed to helping schools overcome challenges and achieve their goals .Our commitment extends beyond the platform; we're devoted to exceptional support, ensuring that every user can make the most of Texel's features with ease. Whether through updates, new tools, or helpful resources, we're committed to delivering a solution that grows with the needs of each school. We believe that with the right tools, the future of education will be more connected, more inclusive, and more inspiring for everyone involved.</p>
                <img className="about-img" src='https://res.cloudinary.com/dswwp9dju/image/upload/v1736408851/image-20_smihgd.svg' />
            </div>
            <div className='right-contact'>
                <div className='flex  flex-col items-center'>
                    <h1 className='contact-heading'>SEND US A MESSAGE</h1>
                    <ContactForm />
                </div>
            </div>
        </div>
    )
}

export default ContactUs