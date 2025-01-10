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
                <div className="icon-container">
                    <img src={iconUrl} alt="Icon" className="icon-image" />
                </div>

                <div className="feature-layout">

                    <h3 className="feature-heading">{heading}</h3>
                    <p className="feature-description">{description}</p>
                </div>
            </div>
        </div>

        // <div className="feature-card">
        //     <div className="feature-card-content">
        //         <div className="feature-card-icon">
        //             <img src={iconUrl} alt="Feature Icon" className="feature-card-image" />
        //         </div>
        //         <div className="feature-card-details">
        //             <h3 className="feature-card-title">{heading}</h3>
        //             <p className="feature-card-text">{description}</p>
        //         </div>
        //     </div>
        // </div>


    );
};

export default FeatureCard;
