import LeftCard from './LeftCard';
import RightCard from './RightCard';
import './styles.css'
const Home = () => {
    return (
        <div className="relative home-bg flex justify-between ">

            <LeftCard className=' px-[4vw] pt-[18vh]' />
            <RightCard className='top-[40vh]' />
            <button> </button>

        </div>


    )
}

export default Home