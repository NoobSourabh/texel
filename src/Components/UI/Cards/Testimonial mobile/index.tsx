import React from "react";
import "./styles.css"; // Import external Tailwind CSS styles

type TestimonialCardProps = {
    img: string; // Image URL
    name: string; // Name of the person
    role: string; // Role (e.g., parent)
    testimonial: string; // Testimonial text
};

const TestimonialMb: React.FC<TestimonialCardProps> = ({
    img,
    name,
    role,
    testimonial,
}) => {
    return (
        <div className="testimonial-card testimonial-scroll">
            {/* Image */}
            <div className="testimonial-img-container">
                <img
                    src={img}
                    alt={name}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Name and Role */}
            <h3 className="testimonial-name">{name}</h3>
            <p className="testimonial-role">{role}</p>

            {/* Testimonial */}
            <p className="testimonial-text">"{testimonial}"</p>
        </div>
    );
};

export default TestimonialMb;
