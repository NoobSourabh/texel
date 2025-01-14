import './styles.css';

type propType = {
  url: string;
  title: string;
  description: string;
};

const HomeCard = ({ url, title, description }: propType) => {
  return (
    <div className="home-card mob-home-card">
      <div className="home-card-header mob-home-card-header">
        <img className="home-card-image mob-home-card-image" src={url} alt={title} />
      </div>
      <h3 className="home-card-title mob-home-card-title">{title}</h3>
      <div className="home-card-divider mob-home-card-divider"></div>
      <p className="home-card-description mob-home-card-description">{description}</p>
    </div>
  );
};

export default HomeCard;
