import githubLogo from '../../statics/images/logo/github-logo.png';
import "./ResourcesTool.css";

interface ToolProps {
  title: string,
  desc: string,
  backgroundColor?: string,
}

const defaultProps: ToolProps = {
  title: '',
  desc: '',
  backgroundColor: '#ffffff'
}

const ResourcesTool = ({ title, desc, backgroundColor}: ToolProps) => {
  return (
    <div className="ResourcesTool">
      <div className="resource-tool-section-one">
        <img src={githubLogo} alt="Logo" style={{width: '100px'}} />
      </div>
      <div className="resource-tool-section-two">
        <div id="resource-tool-title">{title}</div>
      </div>
    </div>
  );
};

ResourcesTool.defaultProps = defaultProps;

export default ResourcesTool;
