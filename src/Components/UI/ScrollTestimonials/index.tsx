import React, { useEffect, useRef, useState } from 'react';
import Review from '../Cards/Testimonials new';
import './styles.css'
 // Assuming the Review component is in the same folder

interface Testimonial {
    bookmarkIcon: string;
    role: string;
    testimonialText: string;
    userName: string;
}

interface TestimonialScrollProps {
    testimonials: Testimonial[];
}

const TestimonialScroll: React.FC<TestimonialScrollProps> = ({ testimonials }) => {
    const scrollContainerRef = useRef<HTMLDivElement | null>(null);
    const [items, setItems] = useState<Testimonial[]>(testimonials);

    useEffect(() => {
        const scrollContainer = scrollContainerRef.current;

        if (scrollContainer) {
            const handleScroll = () => {
                if (scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth - 1) {
                    // When the scroll reaches the end, move the scroll position back to the start
                    scrollContainer.scrollLeft = 0;
                }
            };

            // Set interval to auto-scroll
            const intervalId = setInterval(() => {
                if (scrollContainer) {
                    scrollContainer.scrollLeft += 1; // Adjust the increment to control scroll speed
                }
            }, 16); // ~60fps

            // Cleanup on unmount
            return () => clearInterval(intervalId);
        }
    }, []);

    return (
        <div className="relative overflow-hidden w-full">
            <div
                ref={scrollContainerRef}
                className="flex space-x-4 scrollbar-hidden overflow-auto w-full scroll-container"
                onScroll={(e) => {
                    const container = e.target as HTMLDivElement;
                    if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 10) {
                        // Add more items when scrolled to the end
                        setItems((prevItems) => [...prevItems, ...testimonials]);
                    }
                }}
            >
                {/* Render testimonials */}
                {items.map((testimonial, index) => (
                    <Review key={index} testimonial={testimonial} />
                ))}
            </div>
        </div>
    );
};

export default TestimonialScroll;
