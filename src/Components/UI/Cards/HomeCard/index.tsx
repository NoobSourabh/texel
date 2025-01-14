import './styles.css'

type propType = {
  url: string,
  title: string,
  description: string
}
const HomeCard = ({ url, title, description }: propType) => {
  return (
    // <div className="homecard-container" >
    //   <div className='home-img-container'>
    //     <img className="" src={url} />
    //   </div>
    //   <h3 className="home-card-title">{title}</h3>
    //   <div className='red-border'> </div>
    //   <p className="home-card-description">{description}</p>
    // </div >
    // <div className="h-[296px] justify-start items-center gap-[30px] inline-flex">

    <div className="mob-home-card md:home-card">
      <div className="md:home-card-header mob-home-card-header ">
        <img className="mob-home-card-image  md:home-card-image" src={url} />
      </div>
      <h3 className="mob-home-card-title md:home-card-title">{title}</h3>
        <div className="home-card-divider"></div>
      <p className="mob-home-card-description md:home-card-description">{description}</p>
      </div>
  )
}

export default HomeCard