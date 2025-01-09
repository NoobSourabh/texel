import './styles.css'

type propType = {
  url: string,
  title: string,
  description: string
}
const HomeCard = ({ url, title, description }: propType) => {
  return (
    <div className="homecard-container" >
      <div className='home-img-container'>
        <img className="" src={url} />
      </div>
      <h3 className="home-card-title">{title}</h3>
      <div className='red-border'> </div>
      <p className="home-card-description">{description}</p>
    </div >
  )
}

export default HomeCard