
import './styles.css'
const LastSection = () => {
    return (
        <div className='lst-container'>
            <div className="ladder-background-image ">
                <div className='inner-lst-container pt-8'>
                    <div className='lst-flex'>
                        {/* <h1 className='last-section-h1'>" Quality comes without your permission "</h1> */}
                        <div className="w-[100vw] text-center text-[#252b42] md:text-[32px] text-[26px] font-bold font-arimo italic md:pb-[29px]">“ Quality comes without your permission “</div>                        {/* <img className='hidden md:block' src='https://res.cloudinary.com/dswwp9dju/image/upload/v1736437192/image-22_qllmxs.svg' /> */}
                        {/* <img className='last-section-h1' src='https://res.cloudinary.com/dswwp9dju/image/upload/v1736487739/image-30_d9nbhb.svg' /> */}
                        <p className='lst-flex-p'>At Texel, we believe that education thrives when it's a
                            shared responsibility. Our innovative application dismantles
                            the barriers that keep parents in the dark, providing them
                            with clear insights into homework assignments, covered
                            topics, and areas where their children need support.</p>
                        <img className='md:hidden' src='https://res.cloudinary.com/dswwp9dju/image/upload/v1736849891/image-63_znh4xr.svg' />
                    </div>
                </div>
                <div className='lst-lower-flex'>
                    <p className='lst-lower-flex-p'>By harnessing the power of technology, we empower schools with essential tools that monitor engagement and highlight student achievements. Imagine a community where teachers can focus on inspiring young minds, while parents celebrate milestones and tackle challenges together. With Texel, we’re not just managing education; we’re enriching it, creating a vibrant ecosystem where every user—teachers, students, and parents—feels inspired and informed.</p>
                    {/* <h2 className='lst-lower-flex-h2'>“Join us in our mission to cultivate a future where education is a collaborative adventure, and together, let’s illuminate the path to academic excellence, one child at a time.“</h2> */}
                    {/* <img className='hidden md:block w-[60vw]' src='https://res.cloudinary.com/dswwp9dju/image/upload/v1736439048/image-23_ide1hk.svg' /> */}
                    {/* <img className='lst-lower-quote' src='https://res.cloudinary.com/dswwp9dju/image/upload/v1736490346/image-32_nghyib.svg' /> */}
                    <div className="w-full md:text-left text-center   md:w-[400px]   lg:w-[948px]  md:text-[#252b42]  md:text-[32px] text-[19px] font-bold font-arimo italic  md:leading-[43.52px]">“Join us in our mission to cultivate a future where education is a collaborative adventure, and together, let’s illuminate the path to academic excellence, one child at a time.“</div>
                </div>

            </div>
        </div>
    )
}

export default LastSection