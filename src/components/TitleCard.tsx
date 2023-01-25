import COLORS, { Colors } from '@statics/colors';

const TitleCard = ({number, title, textColor, color}: {number: string, title: string, textColor: Colors, color: Colors}) => {
    return (
        <div className='title-container'>
            <h2 className='number' style={{ "color": COLORS[color] }}>{number}</h2>
            <h1 className='project-title' style={{ "color": COLORS[textColor] }}>{title}</h1>
            <p className='underline' style={{ "borderColor": COLORS[color] }}></p>
        </div>
    )
}

export default TitleCard;