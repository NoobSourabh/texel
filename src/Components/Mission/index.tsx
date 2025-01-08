import Paragraph from './paragraph'
import './style.css'

const Mission = () => {

    return (
        <div className='m-10 space-y-32' >
        <div className="mission-bg ">
            <div className="left-part">
                <h1 >Left Part</h1>
            </div>
        <div className="flex flex-col right-part pt-4">
            <h1 className="right-heading"><span className="border-t-8 border-[#E74040] pt-4">OUR</span> MISSION</h1>
            <Paragraph/>
        </div>
        </div>
            <div className='flex flex-col'>
                <div>
                    <h1 className="right-heading"><span className="border-t-8 border-[#E74040] pt-4">OUR</span> CORE VALUES</h1>
                </div>
                <div className='flex flex-row justify-between space-x-4'> 
                    <div>
                        <h1>Heading</h1>
                        <h2>Content</h2>
                    </div>

                    <div>
                        <h1>Heading</h1>
                        <h2>Content</h2>
                    </div>

                    <div>
                        <h1>Heading</h1>
                        <h2>Content</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mission