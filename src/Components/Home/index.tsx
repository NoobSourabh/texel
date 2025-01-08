import HomeCard from '../Cards/HomeCard';
import Features from './Features';
import LastSection from './LastSection';
import LeftCard from './LeftCard'; 
import RightCard from './RightCard';
import './styles.css'
import ThirdSection from './Third';
const Home = () => {
    return (
        <div className=' flex flex-col'>
            <div className="home-bg flex justify-between ">
                <LeftCard className=' px-[4vw] pt-[18vh]' />
                <RightCard className='top-[40vh]' />
            </div>

            <div className='cards'>
                <HomeCard
                    url='https://res.cloudinary.com/dswwp9dju/image/upload/v1736225069/b31997dbc83bc1743782e79d556364f5_iyauhx.png'
                    title="7+ Cities"
                    description='Connecting educational communities across multiple cities for a united learning experience' />
                <HomeCard
                    url='https://res.cloudinary.com/dswwp9dju/image/upload/v1736227819/f6401fbd87dbcda96c29cd8a720b2907_rpcff3.png'
                    title="118+  Schools"
                    description='Fostering collaboration and growth in schools with state-of-the-art educational technology' />
                <HomeCard
                    url='https://res.cloudinary.com/dswwp9dju/image/upload/v1736225068/8628da21ae0eded15a1d77d2f1659641_apiuhu.png'
                    title="1.4Lakh+  Students	"
                    description='Empowering students with seamless access to assignments, resources, and communication.' />
            </div>
            <Features />
            <ThirdSection />
            <LastSection />
        </div>



    )
}

export default Home