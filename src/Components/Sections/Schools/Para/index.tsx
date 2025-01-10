import SCard from "../SchoolCard";
import { schoolCardPropData } from "../../../../data/data";
const Para = () => {
    return (
        <div className="">
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
    );
};

export default Para;