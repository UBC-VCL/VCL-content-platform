import './ResourceCards.css';
import { useHistory } from 'react-router-dom';

interface PropsOBJ {
    title: string;
    link: string;
}

const ResourceCards = (props:PropsOBJ) => {

    const {title, link} = props;
    const history = useHistory();

    return (
        <div 
        className='resource-card-container'
        onClick={() => {
            history.push(link);
        }}>
            {title}
        </div>
    )
};

export default ResourceCards;