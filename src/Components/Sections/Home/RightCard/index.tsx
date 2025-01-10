import Vector from "../../../../assets/images/Vector";
import '../styles.css'
// import './rightcard.css'

type VectorbgProps = {
    className?: string;  // Optional className prop
}
const RightCard = ({ className }: VectorbgProps) => {
    return (
        <div className={className}>
            <div className='vector'>
                <Vector url="https://res.cloudinary.com/dswwp9dju/image/upload/v1736452102/image-26_yanone.svg" className="vector-img-full" />
                {/* <Vector url="https://res.cloudinary.com/dswwp9dju/image/upload/v1736454971/image-27_gq3a6j.svg" className="vector-img-mobile" /> */}
                {/* <Vectorbg className='vector-bg' /> */}
                
            </div>
            {/* <img className="right-vector-img" src="https://res.cloudinary.com/dswwp9dju/image/upload/v1736452102/image-26_yanone.svg" /> */}

        </div>
    )
}

export default RightCard