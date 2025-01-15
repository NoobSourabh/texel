
// Defining the type for the props that will be passed to the Review component
interface Testimonial {
    role: string;
    testimonialText: string;
    userName: string;
}

interface ReviewProps {
    testimonial: Testimonial;
}

const getBookmarkIconUrl = (role: string): string => {
    switch (role) {
        case "Parent":
            return "https://res.cloudinary.com/dswwp9dju/image/upload/v1736545194/image-45_ptbgnj.svg"; // Replace with the actual URL for Parent
        case "Teacher":
            return "https://res.cloudinary.com/dswwp9dju/image/upload/v1736630498/image-59_hytzar.svg"; // Replace with the actual URL for Teacher
        case "Principal":
            return "https://res.cloudinary.com/dswwp9dju/image/upload/v1736630496/image-60_kb6psf.svg"; // Replace with the actual URL for Principal
        default:
            return "https://res.cloudinary.com/dswwp9dju/image/upload/v1736545194/image-45_ptbgnj.svg"; // Optional: A fallback URL
    }
};

const Review: React.FC<ReviewProps> = ({ testimonial }) => {
    const bookmarkIcon = getBookmarkIconUrl(testimonial.role);

    return (
        <div className="w-[294px] h-[340px] bg-[#d9d9d9] rounded-[15px] relative pb-[-10px]">
            {/* Top row with quote and bookmark */}
            <div className="flex justify-between items-center pt-[17.48px]">
                <img
                    src="https://res.cloudinary.com/dswwp9dju/image/upload/v1736625765/image-57_tv2v4v.svg"
                    alt="quote"
                    className="left-3 relative"
                />

                <div className="relative pr-[-8px]">
                    <img src={bookmarkIcon} alt="role icon" className="w-[100px]" />
                    <span className="font-afacad absolute inset-0 flex text-[16px] items-center mx-10 text-black font-medium">
                        {testimonial.role}
                    </span>
                </div>
            </div>

            {/* Testimonial Text */}
            <div className="px-[17px] pt-[20px]">
                <div className="w-[259.24px] h-[175.38px] text-black text-sm font-[500] font-inter leading-[18.20px]">
                    {testimonial.testimonialText}
                </div>
            </div>

            {/* User Info */}
            <div className="absolute bottom-0 flex items-center bg-white rounded-tr-[15px] rounded-bl-[15px]">
                <div className="w-fit mx-2 h-[66px] bg-white rounded-tr-[15px] rounded-bl-[15px] flex justify-between items-center gap-4">
                    {/* Hardcoded image URL for the user */}
                    <img
                        src="https://res.cloudinary.com/dswwp9dju/image/upload/v1736629723/image-58_qozuki.svg"
                        alt="user"
                    />
                    <div className="w-fit h-[16.92px] text-[#756e6e]/90 text-sm font-bold font-arimo">
                        {testimonial.userName}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;
