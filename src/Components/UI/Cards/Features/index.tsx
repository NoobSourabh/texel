import './styles.css';

type cardProps = {
    iconUrl: string;
    heading: string;
    description: string;
};

const FeatureCard = ({ iconUrl, heading, description }: cardProps) => {
    return (
        <div className="ftr-card-wrapper">
            <div className="ftr-card-container">
                {/* Icon Container */}
                <div className="icon-container">
                    <img src={iconUrl} alt="Icon" className="icon-image" />
                </div>

                {/* Layout Container */}
                <div className="layout">
                    {/* Heading */}
                    
                    <h3 className="heading">{heading}</h3>
                    {/* Description */}
                    <p className="description">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default FeatureCard;
