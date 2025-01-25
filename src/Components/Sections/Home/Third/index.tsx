
const ThirdSection = () => {
    return (
        <div className="px-[34px] md:px-[8vh] md:flex flex-col items-center justify-center md:gap-0 ">
            {/* Upper Section */}
            <div className="flex justify-between md:flex-row flex-col-reverse">
                <div className="flex flex-col items-start md:pl-[50px] pt-[15vh] gap-8 md:gap-14">
                    <img
                        className="hidden md:block md:w-[400px] mb-8 mt-[5vh]"
                        src="https://res.cloudinary.com/dswwp9dju/image/upload/v1736269170/Group_54_1_lllhxc.png"
                        alt="Texel Banner"
                    />
                    <img
                        className="block md:hidden w-[600px]"
                        src="https://res.cloudinary.com/dswwp9dju/image/upload/v1736917804/image-64_etcikx.svg"
                        alt="Texel Mobile Banner"
                    />
                    <p className="md:w-[401px] opacity-90 text-[#727272] md:text-2xl text-[15px] font-normal leading-[29px] tracking-tight md:text-left text-center">
                        In a world where education often feels like a puzzle with missing pieces, Texel emerged as the
                        bridge that connects parents, teachers, and schools, transforming the way we engage with
                        learning.
                    </p>
                    <p className="md:w-[401px] opacity-90 text-[#727272] md:text-2xl text-[15px] font-normal leading-[29px] tracking-tight md:text-left text-center">
                        By seamlessly integrating into daily routines, Texel ensures parents are always in the loop with
                        real-time updates on assignments and progress. This empowers them to support and celebrate
                        their child's academic journey effectively, creating a cohesive educational ecosystem.
                    </p>
                </div>
                <img
                    className="mb-[-10vh] md:w-[50%] md:h-[50%] md:mb-0 w-[100vw] hidden md:inline-block lg:hidden"
                    src="https://res.cloudinary.com/dswwp9dju/image/upload/v1737107236/image-72_co93nw.svg"
                    alt="Right Vector"
                />
                <img
                    className="mb-[-10vh] md:w-[50%] md:h-[50%] md:mb-0 w-[100vw] inline-block lg:inline-block md:hidden sm:inline-block"
                    src="https://res.cloudinary.com/dswwp9dju/image/upload/v1736264263/f3cfc659-2a93-47db-a66a-5814dd815297.png"
                    alt="Right Vector"
                />
            </div>

            {/* Row Section */}
            <div className="flex flex-col md:flex-row md:gap-[20vw] justify-center items-center gap-[10vw] mt-8 md:mt-[20vh] md:mb-0 mb-10">
                <img
                    className="w-[100vw] md:w-[50%]"
                    src="https://res.cloudinary.com/dswwp9dju/image/upload/v1736265826/04c58275-8f99-46cb-b4ea-808f2140a51a.png"
                    alt="Texel Classroom"
                />
                <p className="md:w-[401px] opacity-90 text-[#727272] md:text-2xl text-[15px] font-normal leading-[29px] tracking-tight md:text-left text-center">
                    Imagine a bustling classroom where children are not just passive recipients of knowledge but active
                    participants in their educational journey. Now, imagine parents stepping into that vibrant world,
                    empowered and informed, ready to support their child every step of the way.
                </p>
            </div>

        </div>
    );
};

export default ThirdSection;
