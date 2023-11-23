import "./ProjectV2Default.css";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";

interface PropOBJ {
  project_id: string;
}

const ProjectV2Default = (props: PropOBJ) => {
  const { project_id } = props;

  return (
    <div className="projectV2-default-content-container">
      <div className="project-default-hero-section project-default-content-section">
        <div className="project-default-titles">
          <h2 className="project-default-number-title">01</h2>
          <h1 className="project-default-main-title">{project_id}</h1>
          <p className="project-default-title-underline" />
        </div>
        <div className="project-default-hero-descriptions">
          <div
            className="project-default-hero-description project-default-description"
            id="project-default-hero-description-1"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            accumsan ligula eu est vulputate, nec varius augue feugiat. Nulla
            facilisi. Integer nec justo et justo hendrerit gravida. Vestibulum
            ante ipsum primis in faucibus orci luctus et ultrices posuere
            cubilia Curae; Suspendisse potenti. Fusce nec ante a neque volutpat
            malesuada. Sed eget tortor ac nisi luctus tristique. Ut vitae
            tincidunt dolor. Quisque eu augue sit amet tortor consectetur
            imperdiet non ac velit.
          </div>
          <div className="project-default-hero-description project-default-description">
            Pellentesque auctor, sapien non semper malesuada, elit odio eleifend
            libero, vel fermentum tellus sapien vel dui. Morbi vel urna metus.
            Sed eu odio vel massa fermentum tincidunt. Nullam luctus dapibus
            risus vel gravida. In hac habitasse platea dictumst. Proin bibendum
            purus vel quam tincidunt, eu auctor justo dapibus.
          </div>
          <div className="project-dexcription-emphasis-div">
            {
              // TODO
            }
          </div>
        </div>
        <div className="project-default-gallery-slider">
          {
            // TODO
          }
        </div>
      </div>
      <div className="project-default-QA-section project-default-content-section">
        <h2 className="project-default-number-title">03</h2>
        <h1 className="project-default-main-title" style={{ color: "#60779A" }}>
          Q&A
        </h1>
        <p className="project-default-title-underline" />
        <div className="project-default-QA-content ">
          <div style={{ margin: "2rem  0" }}>
            <h1 className="project-default-QA-question">
              What methods are used to derive the measures?
            </h1>
            <div className="project-default-QA-answer project-default-description">
              We use two classic methods from psychophysics to derive our
              measures – discrimination tasks using the staircase method to
              measure precision, and a magnitude estimation task to measure
              accuracy. Performance in both respects is regular and well
              described by Weber and Fechner laws – a linear relationship for
              discrimination and a logarithmic curve for estimation – regardless
              of which visual variables are chosen to represent the data.
            </div>
          </div>
          <div>
            <h1 className="project-default-QA-question">
              What are we currently studying?
            </h1>
            <div className="project-default-QA-answer project-default-description">
              Our working theory for these results is based on participants
              using the information entropy of the visualization to make their
              judgements. Currently we’re studying how different gamma levels
              impact the perception of correlation in black and white luminance
              strip plots, and evaluating the effects of mixed populations in
              scatter plots.
            </div>
          </div>
        </div>
      </div>
      <div className="project-default-back-to-top">
        <div className="project-default-back-to-top-arrow">
          <MdKeyboardDoubleArrowUp
            size={45}
          />
        </div>
        <h1 className="project-default-back-to-top-title">Back to Top</h1>
      </div>
    </div>
  );
};

export default ProjectV2Default;
