const LastSection = () => {
    return (
        <div className="md:my-[46px] mt-[24px] md:pb-[10vh] pb-8 h-fit [@media(max-height:750px)]:min-h-[1000px]">
            <div className="w-[100vw] text-center text-[#252b42] md:text-[32px] text-[26px] font-bold font-arimo italic md:pb-0">
                “ Quality comes without your permission “
            </div>
            <div
                className="md:bg-[url('/assets-public/images/svgs/home-lastsection-vector.svg')] bg-no-repeat lg:bg-center md:bg-[50%_20%] md:w-[100vw] md:h-[125vh] flex flex-col justify-between "
                style={{ backgroundSize: '100vw' }}
            >
                <div className="flex flex-col justify-between items-center py-8 mb-10">
                    <div className="flex flex-col gap-6 text-center items-center w-full md:w-[602px] left-[61px] ">
                        <p className="font-publicsans  text-gray text-[15px] md:text-2xl px-4 leading-[29px] tracking-tight">
                            At Texel, we believe that education thrives when it's a shared responsibility. Our
                            innovative application dismantles the barriers that keep parents in the dark, providing them
                            with clear insights into homework assignments, covered topics, and areas where their
                            children need support.
                        </p>
                        <img
                            className="md:hidden"
                            src='/assets-public/images/svgs/home-lastsection-vector-mob.svg'
                            alt="Texel Illustration"
                        />
                    </div>
                </div>
                {/* <div className="flex w-full flex-col lg:pt-[31vh] md:pt-[12vh] md:pl-[59px] md:pr-0 pl-[20px] pr-[20px] md:gap-2 gap-0 items-center md:items-start md:pb-0"> */}
                <div className="flex w-full flex-col md:pl-[59px] md:pr-0 pl-[20px] pr-[20px] ">
                    <p className="font-ptsans md:w-[40vw]  text-[11px] md:text-[22px] py-2 md:text-left text-center text-gray font-bold md:leading-[29px] leading-tight tracking-tight">

                        By harnessing the power of technology, we empower schools with essential tools that monitor
                        engagement and highlight student achievements. Imagine a community where teachers can focus on
                        inspiring young minds, while parents celebrate milestones and tackle challenges together. With
                        Texel, we’re not just managing education; we’re enriching it, creating a vibrant ecosystem where
                        every user—teachers, students, and parents—feels inspired and informed.
                    </p>
                    <div className="w-full md:text-left text-center md:w-full lg:w-[65vw] md:text-[#252b42] md:text-[32px] text-[19px] font-bold font-arimo italic md:leading-[43.52px] leading-relaxed">
                        “Join us in our mission to cultivate a future where education is a collaborative adventure, and
                        together, let’s illuminate the path to academic excellence, one child at a time.“
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LastSection;


// import './styles.css'
// const LastSection = () => {
  

//     return (
//         <div className="md:my-[46px] my-0 mt-[44px] md:pb-0  h-fit [@media(max-height:750px)]:min-h-[1000px]">
//             <div className="w-[100vw] text-center text-[#252b42] md:text-[32px] text-[26px] font-bold font-arimo italic md:pb-0 ">
//                 “ Quality comes without your permission “
//             </div>
//             <div
//                 className="md:bg-vector bg-no-repeat lg:bg-center md:bg-[50%_20%] md:w-[100vw] md:h-[125vh] flex flex-col"
//                 style={{ backgroundSize: '100vw' }}
//             >
//                 <div className="flex flex-col items-center py-8">
//                     <div className="flex flex-col gap-6 text-center items-center w-full md:w-[602px] left-[61px]">
//                         <p className="text-gray text-[15px] md:text-2xl px-4 leading-[29px] tracking-tight">
//                             At Texel, we believe that education thrives when it's a shared responsibility. Our
//                             innovative application dismantles the barriers that keep parents in the dark, providing them
//                             with clear insights into homework assignments, covered topics, and areas where their
//                             children need support.
//                         </p>
//                         <img
//                             className="md:hidden"
//                             src="https://res.cloudinary.com/dswwp9dju/image/upload/v1736849891/image-63_znh4xr.svg"
//                             alt="Texel Illustration"
//                         />
//                     </div>
//                 </div>
//                 <div className="flex w-full flex-col lg:pt-[31vh] md:pt-[12vh] md:pl-[59px] md:pr-0 pl-[20px] pr-[20px] md:gap-2 gap-0 items-center md:items-start md:pb-0">
//                     <p className="md:w-[40vw] font-ptsans text-[11px] md:text-[22px] py-2 md:text-left text-center text-gray font-bold md:leading-[29px] leading-relaxed tracking-wide">
//                         By harnessing the power of technology, we empower schools with essential tools that monitor
//                         engagement and highlight student achievements. Imagine a community where teachers can focus on
//                         inspiring young minds, while parents celebrate milestones and tackle challenges together. With
//                         Texel, we’re not just managing education; we’re enriching it, creating a vibrant ecosystem where
//                         every user—teachers, students, and parents—feels inspired and informed.
//                     </p>
//                     <div className="w-full md:text-left text-center lg:pt-0 md:pt-4 pt-0  md:w-full lg:w-[65vw] md:text-[#252b42] md:text-[32px] text-[19px] font-bold font-arimo italic md:leading-[43.52px] leading-relaxed">
//                         “Join us in our mission to cultivate a future where education is a collaborative adventure, and
//                         together, let’s illuminate the path to academic excellence, one child at a time.“
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default LastSection;



// import BgVector from '/assets-public/images/svgs/lastsection-bg.svg'

// const LastSection = () => {
//     // Define a custom CSS class dynamically in the component
//     const dynamicStyle = `
//         .bg-vector {
//             background-image: url(${BgVector});
//             background-size: 100vw;
//             background-position: center;
//             background-repeat: no-repeat;
//             background-position: 50% 20%; /* Correct background position */

//         }
        
//         @media (max-width: 768px) {
//             .bg-vector {
//                 background-image: none; /* Hide background for screens below md */
//             }
//         }
//     `;

//     return (
//         <>
//             {/* Inject the custom CSS */}
//             <style>{dynamicStyle}</style>

//             <div className="md:my-[46px] my-0 mt-[44px] md:pb-0 h-fit [@media(max-height:750px)]:min-h-[1000px]">
//                 <div className="w-[100vw] text-center text-[#252b42] md:text-[32px] text-[26px] font-bold font-arimo italic md:pb-0 ">
//                     “ Quality comes without your permission “
//                 </div>
//                 <div
//                     className={`bg-vector md:w-[100vw] md:h-[125vh] flex flex-col`}
//                 >
//                     <div className="flex flex-col items-center py-8">
//                         <div className="flex flex-col gap-6 text-center items-center w-full md:w-[602px] left-[61px]">
//                             <p className="text-gray text-[15px] md:text-2xl px-4 leading-[29px] tracking-tight">
//                                 At Texel, we believe that education thrives when it's a shared responsibility. Our
//                                 innovative application dismantles the barriers that keep parents in the dark, providing them
//                                 with clear insights into homework assignments, covered topics, and areas where their
//                                 children need support.
//                             </p>
//                             <img
//                                 className="md:hidden"
//                                 src="https://res.cloudinary.com/dswwp9dju/image/upload/v1736849891/image-63_znh4xr.svg"
//                                 alt="Texel Illustration"
//                             />
//                         </div>
//                     </div>
//                     <div className="flex w-full flex-col lg:pt-[31vh] md:pt-[12vh] md:pl-[59px] md:pr-0 pl-[20px] pr-[20px] md:gap-2 gap-0 items-center md:items-start md:pb-0">
//                         <p className="md:w-[40vw] font-ptsans text-[11px] md:text-[22px] py-2 md:text-left text-center text-gray font-bold md:leading-[29px] leading-relaxed tracking-wide">
//                             By harnessing the power of technology, we empower schools with essential tools that monitor
//                             engagement and highlight student achievements.
//                         </p>
//                         <div className="w-full md:text-left text-center lg:pt-0 md:pt-4 pt-0  md:w-[65vw] md:text-[#252b42] md:text-[32px] text-[19px] font-bold font-arimo italic md:leading-[43.52px] leading-relaxed">
//                             “Join us in our mission to cultivate a future where education is a collaborative adventure, and
//                             together, let’s illuminate the path to academic excellence, one child at a time.“
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default LastSection;
