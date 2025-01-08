import TextCard from "../../Cards/Text"
import { SchoolCard } from "../../../Types/PropTypes"
import './styles.css'
type cardProp = SchoolCard & {
  position: string,
}

const SCard = ({ heading, paragraph, imgUrl, position }: cardProp) => {
  return (
    <div className={position}>
      <TextCard heading={heading} paragraph={paragraph} />
      <img className="w-[40vw]" src={imgUrl} />
    </div>
  )
}

export default SCard