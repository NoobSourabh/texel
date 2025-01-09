import React, { useState } from "react";

type FormData = {
    name: string;
    email: string;
    mobile: string;
    message: string;
}

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        mobile: "",
        message: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form Submitted", formData);
        // Add your form submission logic here
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            {/* Name Input */}
            <div className="input-div">

                <label htmlFor="name">Your Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="input-div">

                {/* Email Input */}
                <label htmlFor="email">Your Email Address</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>

            {/* Mobile Number Input */}
            <div className="input-div">

                <label htmlFor="mobile">Your Mobile Number</label>
                <input
                    type="tel"
                    id="mobile"
                    name="mobile"
                    placeholder="Enter your mobile number"
                    pattern="[0-9]{10}"
                    title="Please enter a 10-digit phone number"
                    value={formData.mobile}
                    onChange={handleChange}
                    required
                />
            </div>

            {/* Message Input */}
            <div className="input-div ">

                <label htmlFor="message">Your Message</label>
                <textarea
                    className="textarea"
                    id="message"
                    name="message"
                    placeholder="Enter your message here..."
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                ></textarea>
            </div>

            {/* Submit Button */}
            <button type="submit">Submit</button>
        </form>
    );
};

export default ContactForm;
