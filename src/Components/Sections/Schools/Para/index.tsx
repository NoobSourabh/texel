import SCard from "../SchoolCard";
import { schoolCardPropData } from "../../../../data/data";
const Para = () => {
    return (
        <div>
            {schoolCardPropData.map((item, index) => (
                <SCard
                    key={index}
                    heading={item.heading}
                    paragraph={item.paragraph}
                    imgUrl={item.imgUrl}
                    position={item.position}
                />
            ))}
        </div>
    );
};

export default Para;