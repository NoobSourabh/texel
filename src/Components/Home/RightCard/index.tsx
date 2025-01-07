import Vector from "../../../assets/images/Vector";
import Vectorbg from "../../../assets/images/Vectorbg";
import '../styles.css'
// import './rightcard.css'

type VectorbgProps = {
    className?: string;  // Optional className prop
}
const RightCard = ({ className }: VectorbgProps) => {
    return (
        <div className={className}>
            <div className='vector'>
                <Vector className="vector-img" />
                <Vectorbg className='vector-bg' />
            </div>

        </div>
    )
}

export default RightCard