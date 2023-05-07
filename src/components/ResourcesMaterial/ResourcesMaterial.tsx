import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import "./ResourcesMaterial.css";

interface MaterialProps {
  title: string,
  desc: string,
  backgroundColor?: string,
}

const defaultProps: MaterialProps = {
  title: '',
  desc: '',
  backgroundColor: '#ffffff'
}

const ResourcesMaterial = ({ title, desc, backgroundColor}: MaterialProps) => {
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

ResourcesMaterial.defaultProps = defaultProps;

export default ResourcesMaterial;
