import Vector from "../../../../assets/images/Vector";
import '../styles.css'

type VectorbgProps = {
    className?: string;  // Optional className prop
}
const RightCard = ({ className }: VectorbgProps) => {
    return (
        <div className={className}>
            <div className='relative flex max-w-[60vw]   overflow-x-hidden'>
                <Vector url="https://res.cloudinary.com/dswwp9dju/image/upload/v1736452102/image-26_yanone.svg" className="vector-img-full" />
          
                
            </div>

        </div>
    )
}

export default RightCard