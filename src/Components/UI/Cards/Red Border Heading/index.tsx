import { RedHeadingProp } from '../../../../Types/PropTypes'
import './styles.css'
const RedHeading = ({ heading }: RedHeadingProp) => {
    return (
        <div className='hidden md:block mb-10 '>
            <div className="red-border-heading"> </div>
            <div className="red-heading">{heading}</div>
        </div>
    )
}

export default RedHeading