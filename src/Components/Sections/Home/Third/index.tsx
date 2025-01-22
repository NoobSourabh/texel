
import { testimonial } from '../../../UI/Cards/Testimonials new/reviews'
import TestimonialScroll from '../../../UI/ScrollTestimonials'
import './styles.css'

const ThirdSection = () => {
    return (
        <div className='trd-container'>
            <div className='trd-upper'>
                <div className='left-flex'>
                    <img className='left-h' src='https://res.cloudinary.com/dswwp9dju/image/upload/v1736269170/Group_54_1_lllhxc.png' />
                    <img className='left-h-mb' src='https://res.cloudinary.com/dswwp9dju/image/upload/v1736917804/image-64_etcikx.svg' />
                    <p className='left-p'>In a world where education often feels like a puzzle with missing pieces, Texel emerged as the bridge that connects parents, teachers, and schools, transforming the way we engage with learning.</p>
                    <p className='left-p'>By seamlessly integrating into daily routines, Texel ensures parents are always in the loop with real-time updates on assignments and progress. This empowers them to support and celebrate their child's academic journey effectively, creating a cohesive educational ecosystem.</p>
                </div>
                <img className='rt-vector ml-[5vw] hidden md:inline-block lg:hidden   ' src='https://res.cloudinary.com/dswwp9dju/image/upload/v1737107236/image-72_co93nw.svg' />
                <img className='rt-vector  inline-block lg:inline-block md:hidden sm:inline-block' src='https://res.cloudinary.com/dswwp9dju/image/upload/v1736264263/f3cfc659-2a93-47db-a66a-5814dd815297.png' />

            </div>

            <div className='trd-row'>
                <img className='trd-img' src='https://res.cloudinary.com/dswwp9dju/image/upload/v1736265826/04c58275-8f99-46cb-b4ea-808f2140a51a.png' />
                <p className='left-p'>Imagine a bustling classroom where children are not just passive recipients of knowledge but active participants in their educational journey. Now, imagine parents stepping into that vibrant world, empowered and informed, ready to support their child every step of the way. </p>
            </div>
            <div className='md:flex hidden my-[4vw]'>
                <TestimonialScroll testimonials={testimonial} />
            </div>
        </div>
    )
}
export default ThirdSection


