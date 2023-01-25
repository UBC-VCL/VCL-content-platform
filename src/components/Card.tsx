import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

interface CardProps {
  title: string,
  desc: string,
  backgroundColor?: string,
}

const defaultProps: CardProps = {
  title: '',
  desc: '',
  backgroundColor: '#ffffff'
}

const Card = ({ title, desc, backgroundColor}: CardProps) => {
  return (
    <div className="card">
      <div className="circle" style={{backgroundColor: backgroundColor}}>
        <SettingsOutlinedIcon fontSize="large" color='primary' id="icon" />
      </div>
      <h3 id="card-title">{title}</h3>
      <p id="card-desc">{desc}</p>
    </div>
  );
};

Card.defaultProps = defaultProps;

export default Card;
