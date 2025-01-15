import SCard from "../SchoolCard";
import { schoolCardPropData1 } from "../../../../data/data";
import './styles.css'
const Para = () => {
    return (
        <div className="md:w-full">
            {schoolCardPropData1.map((item, index) => (
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