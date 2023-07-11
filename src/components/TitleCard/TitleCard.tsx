 import './TitleCard.css'
import COLORS, { Colors } from '@statics/colors';

const TitleCard = ({number, title, textColor}: {number: string, title: string, textColor: Colors}) => {
    return (
        <div className='title-container'>
            <h2 className='section-number' style={{ "color": "lightBlue" }}>
                {number}
            </h2>
            <h1 className='section-title' style={{ "color": COLORS[textColor] }}>
                {title}
            </h1>
            <p className='section-title-underline' />
        </div>
    )
}

export default TitleCard;