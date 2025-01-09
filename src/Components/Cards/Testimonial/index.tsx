import './styles.css'
type CardProp = {
    img: string,
    name: string,
    rating: string,
    testimonial: string,
    role: string,
}


const TestimonialCard = ({ img, name, rating, testimonial, role }: CardProp) => {
    return (
        <div>
            <div>
                <div>
                    <img src={img} />
                    <h1>{name}</h1>
                </div>
                <div>{rating}</div>
            </div>
            <p>{testimonial}</p>
            <p>{role}</p>
        </div>
    )
}

export default TestimonialCard