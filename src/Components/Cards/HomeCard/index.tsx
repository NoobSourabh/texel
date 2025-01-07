import './styles.css'

type propType = {
  url: string,
  title: string,
  description: string
}
const HomeCard = ({ url, title, description }: propType) => {
  return (
    <div className="card-container" >
      <div className='img-container'>
        <img className="" src={url} />
      </div>
      <h3 className="card-title">{title}</h3>
      <div className='red-border'> </div>
      <p className="card-description">{description}</p>
    </div >
  )
}

export default HomeCard