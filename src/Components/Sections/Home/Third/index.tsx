import Review from '../../../UI/Cards/Testimonials new'
import { testimonial } from '../../../UI/Cards/Testimonials new/reviews'
// import TestimonialMb from '../../../UI/Cards/Testimonial mobile'
import './styles.css'

const ThirdSection = () => {
    return (
        <div className='trd-container'>
            <div className='trd-upper'>
                <div className='left-flex'>
                    <img className='left-h' src='https://res.cloudinary.com/dswwp9dju/image/upload/v1736269170/Group_54_1_lllhxc.png' />
                    <img className='left-h-mb' src='https://res.cloudinary.com/dswwp9dju/image/upload/v1736457037/image-28_xgqqqa.svg' />
                    <p className='left-p'>In a world where education often feels like a puzzle with missing pieces, Texel emerged as the bridge that connects parents, teachers, and schools, transforming the way we engage with learning.</p>
                    <p className='left-p'>By seamlessly integrating into daily routines, Texel ensures parents are always in the loop with real-time updates on assignments and progress. This empowers them to support and celebrate their child's academic journey effectively, creating a cohesive educational ecosystem.</p>
                </div>
                <img className='rt-vector' src='https://res.cloudinary.com/dswwp9dju/image/upload/v1736264263/f3cfc659-2a93-47db-a66a-5814dd815297.png' />

            </div>

            <div className='trd-row'>
                <img className='trd-img' src='https://res.cloudinary.com/dswwp9dju/image/upload/v1736265826/04c58275-8f99-46cb-b4ea-808f2140a51a.png' />
                <p className='left-p'>Imagine a bustling classroom where children are not just passive recipients of knowledge but active participants in their educational journey. Now, imagine parents stepping into that vibrant world, empowered and informed, ready to support their child every step of the way. </p>
            </div>

            <div className='w-full auto-scroll flex justify-evenly gap-[40px] mt-[20px]'>
                {testimonial.map((testimonial, index) => (
                    <Review key={index} testimonial={testimonial} />
                ))}   
            </div>

        

        </div>
    )
}
export default ThirdSection



{/* <TestimonialCard
                    img='https://res.cloudinary.com/dswwp9dju/image/upload/v1736416392/image-21_w35ugb.svg'
                    name='Ananya R.'
                    rating={5}
                    testimonial="Texel has made our lives so much easier. As a busy parent, staying on top of my child's schoolwork was stressful. Now, I get instant updates on everything. We're more connected and I have more information about my child’s education."
                    role="A Parent"
                />
                <TestimonialCard
                    img='https://res.cloudinary.com/dswwp9dju/image/upload/v1736416392/image-21_w35ugb.svg'
                    name='Ms Shreya S.'
                    rating={5}
                    testimonial="Texel is fantastic for keeping parents in the loop. They know what's going on with their kids, which makes my job easier and helps the students do better. It's a win-win!"
                    role="A Parent"
                />
                <TestimonialCard
                    img='https://res.cloudinary.com/dswwp9dju/image/upload/v1736416392/image-21_w35ugb.svg'
                    name='Mr. Amit M.'
                    rating={5}
                    testimonial="Texel helps us talk better with parents by sharing updates about their children right away. The system keeps all our school data organized and error-free. Its easy-to-read reports help us make better choices for our students, teachers and staff. Parents love being more involved, which has naturally boosted our admissions."
                    // testimonial=""
                    role="A Principal"
                />
                <TestimonialCard
                    img='https://res.cloudinary.com/dswwp9dju/image/upload/v1736416392/image-21_w35ugb.svg'
                    name='Ravi P.'
                    rating={5}
                    testimonial="Texel is a lifesaver! I don't have to nag about homework to my child. The app tells me everything I need to know, so I can help my child better. It's been a game-changer for us."
                    // testimonial=""
                    role="A Parent"
                /> */}




{/* <div className=' auto-scroll hidden md:flex'>
                <TestimonialMb
                    img='https://res.cloudinary.com/dswwp9dju/image/upload/v1736416392/image-21_w35ugb.svg'
                    name='Ananya R.'
                    testimonial="Texel has made our lives so much easier. As a busy parent, staying on top of my child's schoolwork was stressful. Now, I get instant updates on everything. We're more connected and I have more information about my child’s education."
                    role="A Parent"
                />
                <TestimonialMb
                    img='https://res.cloudinary.com/dswwp9dju/image/upload/v1736416392/image-21_w35ugb.svg'
                    name='Ms Shreya S.'
                    testimonial="Texel is fantastic for keeping parents in the loop. They know what's going on with their kids, which makes my job easier and helps the students do better. It's a win-win!"
                    role="A Parent"
                />
                <TestimonialMb
                    img='https://res.cloudinary.com/dswwp9dju/image/upload/v1736416392/image-21_w35ugb.svg'
                    name='Mr. Amit M.'
                    testimonial="Texel helps us talk better with parents by sharing updates about their children right away. The system keeps all our school data organized and error-free. Its easy-to-read reports help us make better choices for our students, teachers and staff. Parents love being more involved, which has naturally boosted our admissions."
                    // testimonial=""
                    role="A Principal"
                />
                <TestimonialMb
                    img='https://res.cloudinary.com/dswwp9dju/image/upload/v1736416392/image-21_w35ugb.svg'
                    name='Ravi P.'
                    testimonial="Texel is a lifesaver! I don't have to nag about homework to my child. The app tells me everything I need to know, so I can help my child better. It's been a game-changer for us."
                    // testimonial=""
                    role="A Parent"
                />
            </div> */}