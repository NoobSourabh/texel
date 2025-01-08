import './styles.css';

import { TextCardProps } from '../../../Types/PropTypes';

const TextCard = ({ heading, paragraph }: TextCardProps) => {
    return (
        <div className="textcard">
            <h1>{heading}</h1>
            <p  dangerouslySetInnerHTML={{ __html: paragraph }} />
        </div>
    );
};

export default TextCard;