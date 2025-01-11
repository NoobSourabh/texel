import './styles.css';

import { TextCardProps } from '../../../../Types/PropTypes';

const TextCard = ({ heading, paragraph }: TextCardProps) => {
    return (
        // <div className="textcard">
        //     <h1 className='textcard-h1'>{heading}</h1>
        //     <p className='textcard-p'  dangerouslySetInnerHTML={{ __html: paragraph }} />
        // </div>

        <div className="textcard-container">
            <div className="textcard">
                <h1 className="textcard-heading">{heading}</h1>
                <p
                    className="textcard-paragraph"
                    dangerouslySetInnerHTML={{ __html: paragraph }}
                />
            </div>

        </div>

    );
};

export default TextCard;