import TextCard from "../../../UI/Cards/Text"
import { SchoolCard } from "../../../../Types/PropTypes"
import './styles.css'

type cardProp = SchoolCard & {
  position: string,
}

const SCard = ({ heading, paragraph, imgUrl, position }: cardProp) => {
  return (
    <div className={position}>
      <TextCard heading={heading} paragraph={paragraph} />
      <img className="md:w-[40vw] w-full" src={imgUrl} />
    </div>
  )
}


export default SCard