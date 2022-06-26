import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import "./Card.css";

interface CardProps {
  title: string,
  desc: string,
}

const Card = ({ title, desc }: CardProps) => {
  return (
    <div className="card">
      <SettingsOutlinedIcon fontSize="large" color="primary" id="icon" />
      <h3 id="card-title">{title}</h3>
      <p id="card-desc">{desc}</p>
    </div>
  );
};

export default Card;
