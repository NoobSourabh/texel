import React, { useState } from "react";

type FormData = {
    name: string;
    email: string;
    mobile: string;
    message: string;
};

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
        <form
            className="flex flex-col gap-[20px] items-center pt-4 w-full"
            onSubmit={handleSubmit}
        >
            {/* Name Input */}
            <div className="flex flex-col gap-2 w-[80vw] md:w-[40vw] items-center md:items-stretch text-xs">
                <label
                    htmlFor="name"
                    className="text-xs font-semibold text-[#666666] mr-auto"
                >
                    Your Name
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-[80vw] md:w-[40vw] h-[56px] p-4 rounded-[8px] border border-[#cccccc]  text-[#666666] text-[16px] leading-[24px]"
                />
            </div>

            {/* Email Input */}
            <div className="flex flex-col gap-2 w-[80vw] md:w-[40vw] items-center md:items-stretch text-xs">
                <label
                    htmlFor="email"
                    className="text-xs font-semibold text-[#666666] mr-auto"
                >
                    Your Email Address
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-[80vw] md:w-[40vw] h-[56px] p-4 rounded-[8px] border border-solid border-[#cccccc] text-[#666666] text-[16px] leading-[24px]"
                />
            </div>

            {/* Mobile Number Input */}
            <div className="flex flex-col gap-2 w-[80vw] md:w-[40vw] items-center md:items-stretch text-xs">
                <label
                    htmlFor="mobile"
                    className="text-xs font-semibold text-[#666666] mr-auto"
                >
                    Your Mobile Number
                </label>
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
                    className="w-[80vw] md:w-[40vw] h-[56px] p-4 rounded-[8px] border border-solid border-[#cccccc] text-[#666666] text-[16px] leading-[24px]"
                />
            </div>

            {/* Message Input */}
            <div className="flex flex-col gap-2 w-[80vw] md:w-[40vw] items-center md:items-stretch text-xs">
                <label
                    htmlFor="message"
                    className="text-xs font-semibold text-[#666666] mr-auto"
                >
                    Your Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    placeholder="Enter your message here..."
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full md:w-[40vw] h-[100px] p-4 rounded-[8px] border border-solid border-[#cccccc] text-[#666666] text-[16px] leading-[24px]"
                ></textarea>
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                className="bg-[#79B4B5] w-1/3 px-6 py-3 md:px-5 md:py-4 rounded-md text-white text-[16px]"
            >
                Submit
            </button>
        </form>
    );
};

export default ContactForm;
