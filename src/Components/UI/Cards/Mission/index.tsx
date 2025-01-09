import './styles.css'
type missionCardProp = {
    title: string,
    content: string,
}

const MissionCard = ({ title, content }: missionCardProp) => {
    return (
        <div className='mission-card'>
            <h2 className="mission-card-title">{title}</h2>
            <div className='red-border'></div>
            <p className="mission-card-content">{content}</p>
        </div>
    )
}

export default MissionCard