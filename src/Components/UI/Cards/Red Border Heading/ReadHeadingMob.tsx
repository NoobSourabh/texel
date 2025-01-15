import { RedHeadingProp } from '../../../../Types/PropTypes'
import './styles.css'
const RedHeadingMob = ({ heading }: RedHeadingProp) => {
    return (
        <div className='md:hidden'>
            <div className="red-border-heading"> </div>
            <div className="red-heading-mob">{heading}</div>
        </div>
    )
}

export default RedHeadingMob