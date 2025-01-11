import RedHeading from '../../UI/Cards/Red Border Heading'
import ContactForm from './ContactForm'
import './styles.css'

const ContactUs = () => {
    return (
        <div className='contact-container'>
            <div className='left-contact'>
                <RedHeading heading="CONTACT US" />
                <p className='left-contact-p'>We are dedicated to continuous improvement and innovation. Our team is constantly working to enhance the platform based on user feedback, ensuring that we meet the evolving needs of the educational community. At Texel, we're more than just a technology provider—we're a partner in education, committed to helping schools overcome challenges and achieve their goals. Our commitment extends beyond the platform; we're devoted to exceptional support, ensuring that every user can make the most of Texel's features with ease. Whether through updates, new tools, or helpful resources, we're committed to delivering a solution that grows with the needs of each school. We believe that with the right tools, the future of education will be more connected, more inclusive, and more inspiring for everyone involved.</p>
                <img className="about-img" src='https://res.cloudinary.com/dswwp9dju/image/upload/v1736408851/image-20_smihgd.svg' />
            </div>
            <div className='right-contact '>
                <div className='right-contact-div'>
                    <h1 className='contact-heading'>SEND US A MESSAGE</h1>
                    <ContactForm />
                </div>
            </div>
        </div>

        // <div className="w-[1620px] h-[756px] relative bg-white ">
        //     <div className="w-[536px] left-[268px] top-[58px] absolute text-[#1d1f26] text-[40px] font-semibold font-['Inter'] leading-[48px]">CONTACT US </div>
        //     <img className="w-[489px] h-[461px] left-[281px] top-[362px] absolute" src="https://via.placeholder.com/489x461" />
        //     <div className="w-[94px] h-[7px] left-[268px] top-[38px] absolute bg-[#e64040]" />
        //     <div className="w-[555px] left-[268px] top-[119px] absolute opacity-90 text-[#727272] text-[15px] font-normal font-['MS UI Gothic'] leading-tight tracking-tight">We are dedicated to continuous improvement and innovation. Our team is constantly working to enhance the platform based on user feedback, ensuring that we meet the evolving needs of the educational community. At Texel, we're more than just a technology provider—we're a partner in education, committed to helping schools overcome challenges and achieve their goals .Our commitment extends beyond the platform; we're devoted to exceptional support, ensuring that every user can make the most of Texel's features with ease. Whether through updates, new tools, or helpful resources, we're committed to delivering a solution that grows with the needs of each school. We believe that with the right tools, the future of education will be more connected, more inclusive, and more inspiring for everyone involved.</div>
        //     <div className="h-[82px] left-[937px] top-[178px] absolute flex-col justify-start items-start gap-2 inline-flex">
        //         <div className="self-stretch text-[#666666] text-xs font-semibold font-['Noto Sans'] leading-[18px]">Your name</div>
        //         <div className="self-stretch h-14 p-4 bg-white rounded-lg border border-[#cccccc] flex-col justify-start items-start gap-2.5 flex">
        //             <div className="self-stretch justify-between items-start inline-flex">
        //                 <div className="w-[304px] text-[#666666] text-base font-normal font-['Noto Sans'] leading-normal">Enter your full name</div>
        //                 <div className="w-6 h-6 relative opacity-0  overflow-hidden" />
        //             </div>
        //         </div>
        //     </div>
        //     <div className="h-[82px] left-[937px] top-[280px] absolute flex-col justify-start items-start gap-2 inline-flex">
        //         <div className="self-stretch text-[#666666] text-xs font-semibold font-['Noto Sans'] leading-[18px]">Your Email Address</div>
        //         <div className="self-stretch h-14 p-4 bg-white rounded-lg border border-[#cccccc] flex-col justify-start items-start gap-2.5 flex">
        //             <div className="self-stretch justify-between items-start inline-flex">
        //                 <div className="w-[304px] text-[#666666] text-base font-normal font-['Noto Sans'] leading-normal">Enter your email address</div>
        //                 <div className="w-6 h-6 relative opacity-0  overflow-hidden" />
        //             </div>
        //         </div>
        //     </div>
        //     <div className="h-[82px] left-[937px] top-[388px] absolute flex-col justify-start items-start gap-2 inline-flex">
        //         <div className="self-stretch text-[#666666] text-xs font-semibold font-['Noto Sans'] leading-[18px]">Your Mobile Number</div>
        //         <div className="self-stretch h-14 p-4 bg-white rounded-lg border border-[#cccccc] flex-col justify-start items-start gap-2.5 flex">
        //             <div className="self-stretch justify-between items-start inline-flex">
        //                 <div className="w-[304px] text-[#666666] text-base font-normal font-['Noto Sans'] leading-normal">Enter your mobile number</div>
        //                 <div className="w-6 h-6 relative opacity-0  overflow-hidden" />
        //             </div>
        //         </div>
        //     </div>
        //     <div className="left-[1114px] top-[110px] absolute text-[#6a4f3f] text-xl font-semibold font-['Inter'] leading-[48px]">SEND US A MESSAGE </div>
        // </div>

    )
}

export default ContactUs