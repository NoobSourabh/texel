import SCard from "../SchoolCard";
import { schoolCardPropData } from "../../../../data/data";
import './styles.css'
const Para = () => {
    return (
        // <div className="w-[1200px] flex flex-col mx-auto justify-between">
        <div>
            {schoolCardPropData.map((item, index) => (
                <div className="scard-position">

                    <SCard
                        key={index}
                        heading={item.heading}
                        paragraph={item.paragraph}
                        imgUrl={item.imgUrl}
                        position={item.position}
                    />
                </div>
            ))}
        </div>

        // <div>
        //     <div className="para-left">
        //         <div className="textcard-container">
        //             <div className="textcard">
        //                 <div className="textcard-heading w-[343px] text-right">
        //                     <span className="text-[#263238] text-[40px] font-normal font-freeman leading-[29px] tracking-tight">
        //                         1. Data Security
        //                     </span><span className="text-[#263238] text-[26px] font-normal font-freeman leading-[29px] tracking-tight"> </span></div>
        //                 <p className="textcard-paragraph" >
        //                     <div className="w-[668px] opacity-90"><span className="text-[#727272] text-[26px] font-normal font-msUIGothic leading-[29px] tracking-tight">With Texel your data is </span><span className="text-black/60 text-[22.40px] font-bold font-ptsans leading-[29px] tracking-tight">absolutely secure</span><span className="text-[#727272] text-[26px] font-normal font-msUIGothic leading-[29px] tracking-tight"> as we firmly believe that student data is very important and should only be used in school tasks and </span><span className="text-black/60 text-[22.40px] font-bold font-ptsans leading-[29px] tracking-tight">not by evil coaching centers and third parties</span><span className="text-[#727272] text-[26px] font-normal font-msUIGothic leading-[29px] tracking-tight">. We are </span><span className="text-[#727272] text-[22.50px] font-normal font-msUIGothic leading-[29px] tracking-tight">unlike other ERP systems</span><span className="text-[#727272] text-[26px] font-normal font-msUIGothic leading-[29px] tracking-tight"> in the market providing services at a discount but in return selling the important data and earning more profits from there. To ensure your safety Texel saves all your data in </span><span className="text-black/60 text-[22.40px] font-bold font-ptsans leading-[29px] tracking-tight">encrypted format rather than raw</span><span className="text-[#727272] text-[26px] font-normal font-msUIGothic leading-[29px] tracking-tight"> assuring that there will be </span><span className="text-black/60 text-[22.40px] font-bold font-ptsans leading-[29px] tracking-tight">no breach of data</span><span className="text-[#727272] text-[26px] font-normal font-msUIGothic leading-[29px] tracking-tight">.</span></div>
        //                 </p>
        //             </div>

        //         </div>
        //         <img className="md:w-[30vw] w-full" src="https://res.cloudinary.com/dswwp9dju/image/upload/v1736556690/image-50_oahfdt.svg" />
        //     </div>
            
        //     <div className="para-right">
        //         <div className="textcard-container">
        //             <div className="textcard">
        //                 <div className="textcard-heading w-[343px] text-right"><span className="text-[#263238] text-[40px] font-normal font-freeman leading-[29px] tracking-tight">2. Our Presence</span><span className="text-[#263238] text-[26px] font-normal font-freeman leading-[29px] tracking-tight"> </span></div>
        //                 <p className="textcard-paragraph" >
        //                     <div className="w-[668px] opacity-90">
        //                         <span className="text-[#727272] text-[26px] font-normal font-msUIGothic leading-[29px] tracking-tight">Texel is currently present in </span>
        //                         <span className="text-black/60 text-[22.40px] font-bold font-ptsans leading-[29px] tracking-tight">13 schools</span>
        //                         <span className="text-[#727272] text-[26px] font-normal font-msUIGothic leading-[29px] tracking-tight"> . After careful research and observation we have found out </span>
        //                         <span className="text-[#727272] text-[22.50px] font-normal font-msUIGothic leading-[29px] tracking-tight">certain patterns</span>
        //                         <span className="text-[#727272] text-[26px] font-normal font-msUIGothic leading-[29px] tracking-tight"> among students, teachers and parents and only after careful analyzation of these patterns </span>
        //                         <span className="text-black/60 text-[22.40px] font-bold font-ptsans leading-[29px] tracking-tight">we add only the useful features with no nonsense</span>
        //                         <span className="text-[#727272] text-[26px] font-normal font-msUIGothic leading-[29px] tracking-tight">. Currently we have more than </span>
        //                         <span className="text-black/60 text-[22.40px] font-bold font-ptsans leading-[29px] tracking-tight">118 schools</span>
        //                         <span className="text-[#727272] text-[26px] font-normal font-msUIGothic leading-[29px] tracking-tight"> that have joined hand with Texel and these numbers are just </span>
        //                         <span className="text-[#727272] text-[22.50px] font-normal font-msUIGothic leading-[29px] tracking-tight">increasing day by day</span>
        //                         <span className="text-[#727272] text-[26px] font-normal font-msUIGothic leading-[29px] tracking-tight">.</span>
        //                     </div>                        </p>
        //             </div>

        //         </div>
        //         <img className="schoolcard-img" src="https://res.cloudinary.com/dswwp9dju/image/upload/v1736556713/image-51_e5eq47.svg" />
        //     </div>

        //     <div className="para-left">
        //         <div className="textcard-container">
        //             <div className="textcard">
        //                 <div className="textcard-heading w-[343px] text-right">
        //                     <span className="text-[#263238] text-[40px] font-normal font-freeman leading-[29px] tracking-tight">
        //                         3. Impressive Growth
        //                     </span><span className="text-[#263238] text-[26px] font-normal font-freeman leading-[29px] tracking-tight"> </span></div>
        //                 <p className="textcard-paragraph" >
        //                     <div className="w-[668px] opacity-90">
        //                         <span className="text-[#727272] text-[26px] font-normal font-msUIGothic leading-[29px] tracking-tight">The schools that have started using Texel reported that they have seen an </span>
        //                         <span className="text-black/60 text-[22.40px] font-bold font-ptsans leading-[29px] tracking-tight">increase of 57% in student admissions</span>
        //                         <span className="text-[#727272] text-[26px] font-normal font-msUIGothic leading-[29px] tracking-tight">. This remarkable achievement just goes to show how Texel has the </span>
        //                         <span className="text-[#727272] text-[22.50px] font-normal font-msUIGothic leading-[29px] tracking-tight">ability to lead to successes</span>
        //                         <span className="text-[#727272] text-[26px] font-normal font-msUIGothic leading-[29px] tracking-tight"> in educational institutions.</span>
        //                     </div>
        //                 </p>
        //             </div>

        //         </div>
        //         <img className="schoolcard-img" src="https://res.cloudinary.com/dswwp9dju/image/upload/v1736556811/image-52_ftfxbo.svg" />
        //     </div>
        //     <div className="para-right">
        //         <div className="textcard-container">
        //             <div className="textcard">
        //                 <div className="textcard-heading w-[343px] text-right">
        //                     <span className="text-[#263238] text-[40px] font-normal font-freeman leading-[29px] tracking-tight">
        //                         4. Time-Saving Administration
        //                     </span><span className="text-[#263238] text-[26px] font-normal font-freeman leading-[29px] tracking-tight"> </span></div>
        //                 <p className="textcard-paragraph" >
        //                     <div className="w-[668px] opacity-90">
        //                         <span className="text-[#727272] text-[26px] font-normal font-msUIGothic leading-[29px] tracking-tight">With Texel, teachers and parents can be </span>
        //                         <span className="text-[#727272] text-[22.50px] font-normal font-msUIGothic leading-[29px] tracking-tight">relaxed and assured</span>
        //                         <span className="text-[#727272] text-[26px] font-normal font-msUIGothic leading-[29px] tracking-tight"> that the data they are seeing is </span>
        //                         <span className="text-black/60 text-[22.40px] font-bold font-ptsans leading-[29px] tracking-tight">100% consistent</span>
        //                         <span className="text-[#727272] text-[26px] font-normal font-msUIGothic leading-[29px] tracking-tight"> and accurate since Texel helps eliminate all the manual work </span>
        //                         <span className="text-black/60 text-[22.40px] font-bold font-ptsans leading-[29px] tracking-tight">helping reduce errors</span>
        //                         <span className="text-[#727272] text-[26px] font-normal font-msUIGothic leading-[29px] tracking-tight">. With such a system teachers can truly focus on things that actually matter that is </span>
        //                         <span className="text-black/60 text-[22.40px] font-bold font-ptsans leading-[29px] tracking-tight">teaching and learning</span>
        //                         <span className="text-[#727272] text-[26px] font-normal font-msUIGothic leading-[29px] tracking-tight">.</span>
        //                     </div>

        //                 </p>
        //             </div>

        //         </div>
        //         <img className="schoolcard-img" src="https://res.cloudinary.com/dswwp9dju/image/upload/v1736556838/image-53_bu8dxt.svg" />
        //     </div>
            
        //     <div className="para-left">
        //         <div className="textcard-container">
        //             <div className="textcard">
        //                 <div className="textcard-heading w-[343px] text-right">
        //                     <span className="text-[#263238] text-[40px] font-normal font-freeman leading-[29px] tracking-tight">
        //                         5. User - Friendly Interface
        //                     </span><span className="text-[#263238] text-[26px] font-normal font-freeman leading-[29px] tracking-tight"> </span></div>
        //                 <p className="textcard-paragraph" >
        //                     <div className="w-[668px] opacity-90">
        //                         <span className="text-[#727272] text-[26px] font-normal font-msUIGothic leading-[29px] tracking-tight">After reviewing many schools we have found out that ERP systems </span>
        //                         <span className="text-[#727272] text-[22.50px] font-normal font-msUIGothic leading-[29px] tracking-tight">do exist</span>
        //                         <span className="text-[#727272] text-[26px] font-normal font-msUIGothic leading-[29px] tracking-tight"> in these schools but due to their </span>
        //                         <span className="text-black/60 text-[22.40px] font-bold font-ptsans leading-[29px] tracking-tight">poor user interface and interaction</span>
        //                         <span className="text-[#727272] text-[26px] font-normal font-msUIGothic leading-[29px] tracking-tight">, the teachers have given up on them and do not use them. But Texel recognized this problem and hired </span>
        //                         <span className="text-[#727272] text-[22.50px] font-normal font-msUIGothic leading-[29px] tracking-tight">experienced UI/UX</span>
        //                         <span className="text-[#727272] text-[26px] font-normal font-msUIGothic leading-[29px] tracking-tight"> developers to ensure a </span>
        //                         <span className="text-black/60 text-[22.40px] font-bold font-ptsans leading-[29px] tracking-tight">seamless and easy to use platform</span>
        //                         <span className="text-[#727272] text-[26px] font-normal font-msUIGothic leading-[29px] tracking-tight">. </span>
        //                     </div>
        //                 </p>
        //             </div>

        //         </div>
        //         <img className="schoolcard-img" src="https://res.cloudinary.com/dswwp9dju/image/upload/v1736556930/image-55_jveggz.svg" />
        //     </div>

        //     <div className="para-right">
        //         <div className="textcard-container">
        //             <div className="textcard">
        //                 <div className="textcard-heading w-[343px] text-right">
        //                     <span className="text-[#263238] text-[40px] font-normal font-freeman leading-[29px] tracking-tight">
        //                         6. Increased Homework Participation
        //                     </span><span className="text-[#263238] text-[26px] font-normal font-freeman leading-[29px] tracking-tight"> </span></div>
        //                 <p className="textcard-paragraph" >
        //                     <div className="w-[668px] opacity-90">
        //                         <span className="text-[#727272] text-[26px] font-normal font-msUIGothic leading-[29px] tracking-tight">After talking with the administration of schools where Texel is being used, we were informed that the teachers have seen a</span>
        //                         <span className="text-[#727272] text-[26px] font-extrabold font-abhayaLibreExtraBold leading-[29px] tracking-tight"> </span>
        //                         <span className="text-black/60 text-[22.40px] font-bold font-ptsans leading-[29px] tracking-tight">major increase in student homework completion </span>
        //                         <span className="text-[#727272] text-[26px] font-normal font-msUIGothic leading-[29px] tracking-tight">because of the </span>
        //                         <span className="text-[#727272] text-[22.50px] font-normal font-msUIGothic leading-[29px] tracking-tight">involvement of parents</span>
        //                         <span className="text-[#727272] text-[26px] font-normal font-msUIGothic leading-[29px] tracking-tight"> in knowing their child’s homework and providing a sense of responsibility to parents making a </span>
        //                         <span className="text-black/60 text-[22.40px] font-bold font-ptsans leading-[29px] tracking-tight">win-win situation for everyone</span>
        //                         <span className="text-[#727272] text-[26px] font-normal font-msUIGothic leading-[29px] tracking-tight">.</span>
        //                     </div>

        //                 </p>
        //             </div>

        //         </div>
        //         <img className="schoolcard-img" src="https://res.cloudinary.com/dswwp9dju/image/upload/v1736556875/image-54_jggxz1.svg" />
        //     </div>


        // </div>
    );
};

export default Para;