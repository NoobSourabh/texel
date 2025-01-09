import './styles.css'
type CardProp = {
    img: string,
    name: string,
    rating: number,
    testimonial: string,
    role: string,
}


const TestimonialCard = ({ img, name, rating, testimonial, role }: CardProp) => {

    const renderStars = (rating: number) => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            stars.push(
                <span key={i} style={{ fontSize: '32px' }} className={i < rating ? "text-yellow-400 " : "text-gray"}>
                    ★
                </span>
            );
        }
        return stars;
    };

    return (
        <div className='testimonial-card testimonial-scroll'>
            <div className='upper-flex'>
                <div className='inner-upper-flex'>
                    <img src={img} />
                    <h1 className='testimonial-heading'>{name}</h1>
                </div>
                <div>{renderStars(rating)}</div>
            </div>
            <p className='testimonial-test'>{testimonial}</p>
            <p className='test-role-p'>{role}</p>
        </div>
    )
}

export default TestimonialCard