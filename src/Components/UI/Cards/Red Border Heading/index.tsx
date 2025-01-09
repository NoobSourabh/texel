
import { RedHeadingProp } from "../../../Types/PropTypes"
import './styles.css'
const RedHeading = ({ heading }: RedHeadingProp) => {
    return (
        <div>
            <div className="red-border-heading"> </div>
            <div className="heading">{heading}</div>
        </div>
    )
}

export default RedHeading