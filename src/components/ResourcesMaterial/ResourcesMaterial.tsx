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

const ResourcesMaterial = ({ title, desc}: MaterialProps) => {
  return (
    <div className="resources-material">
      <p id="resources-material-title">{title}</p>
      <p id="resources-material-desc">{desc}</p>
    </div>
  );
};

ResourcesMaterial.defaultProps = defaultProps;

export default ResourcesMaterial;
