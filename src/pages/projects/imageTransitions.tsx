import React from "react";
import Image from "next/image";
import { Project } from "@/services/adapters/projectAdapter";
import ProjectBreadcrumbs from "@/components/ProjectBreadcrumbs";
import { TEXT } from "@/statics";
import img1 from "../../statics/images/it/it1.gif";
import img2 from "../../statics/images/it/it2.gif";
import img3 from "../../statics/images/it/it3.gif";
import img4 from "../../statics/images/it/it4.png";
import img5 from "../../statics/images/it/it5.gif";

interface ProjectProps {
  project: Project;
}

const ImageTransitions: React.FC<ProjectProps> = () => {
  // FIX
  const props = { project: { name: "" } };
  return (
    <div className="project-subcontent-container">
      <ProjectBreadcrumbs
        project_name={props.project.name}
        page_name={TEXT.PROJECT_NAV.PROJECT_DESCRIPTION}
      />
      <br />
      <h1>{props.project.name}</h1>
      <br />
      <p>
        A mental representation is a theoretical entity believed to be the
        brain’s construction of the outside world. It allows us to interact with
        objects, store and retrieve memory, and see what we think we see—mental
        representations are the means by which we internalize what we know about
        the world. Mental representations are somewhat flexible because they
        must be able to account for changes that may be occurring in the world;
        a water bottle slightly rotated to the side is still a water bottle, for
        instance. Therefore, we are wondering how much can we change the object
        before having to reconstruct its representation.
      </p>
      <br />
      <p>
        Several studies in the past have examined the mental representations of
        individual objects. However, we’re interested in looking at the mental
        representation of space itself and how flexible it is to various
        transformations.
      </p>
      <br />
      <div
        style={{
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div>
          <Image height={600} width={800} alt="" src={img1} />
          <p>Transforming an individual object…</p>
        </div>
        <div>
          <Image height={600} width={800} alt="" src={img2} />
          <p>Transforming all the individual objects…</p>
        </div>
        <div>
          <Image height={600} width={800} alt="" src={img3} />
          <p>Transforming the entire search space!</p>
        </div>
      </div>
      <br />
      <p>
        This study uses a visual search paradigm (finding a target stimulus
        among distractors on a display) to investigate how performance is
        affected by transforming the search space. For the past several years,
        we have been dealing with several kinds of transformations – mainly
        image scaling (think of zooming in vs. out):
      </p>
      <br />
      <p>
        The other aspect of the NOVA project is cueing. Cueing occurs when the
        viewers' attention is intentionally re-focused on another object without
        them realizing that this cue happened. For example, if the viewer sees
        an arrow pointing to an object, they will likely shift their attention
        to that object even if they did not consciously perceive the arrow.
      </p>
      <br />
      <div style={{ textAlign: "center" }}>
        <Image height={600} width={800} alt="" src={img4} />
        <p>
          A 2 x 2 design with varying spacing and physical size to study the
          effect of size and spacing on visual search
        </p>
      </div>
      <br />
      <div style={{ textAlign: "center" }}>
        <Image height={600} width={800} alt="" src={img5} />
        <p>An example of a display being scaled</p>
      </div>
      <br />
      <p>
        In the current stage of the project, we are looking for the conditions
        that affect our visual search speed by scaling the displays by various
        amounts. Moreover, we’re using our paradigm to explore the differences
        between feature search and conjunction search.
      </p>
      <br />
      <p>
        From the patterns we find in our results, we can gain insights into how
        space is represented in the brain and what the role of attention is in
        visual search. Additionally, like other projects at our lab, we hope the
        results from this project can ultimately help us improve the designs of
        various visual displays – from game apps to airplane cockpits!
      </p>
      <br />

      <h3>You might like this project if...</h3>
      <ul>
        <li>You like basic, exploratory research</li>
        <li>You’re interested in learning how we perceive space</li>
        <li>You want to learn about different kinds of visual search</li>
      </ul>
      <br />
      <h3>Relevant Articles</h3>
      <a href="http://dl.acm.org/citation.cfm?id=1140515">
        Lam, H., Rensink, R. A., & Munzner, T. (2006, July). Effects of 2D
        geometric transformations on visual memory. In Proceedings of the 3rd
        symposium on Applied perception in graphics and visualization (pp.
        119-126). ACM.
      </a>
      <a href="http://jov.arvojournals.org/article.aspx?articleid=2130823">
        Rensink, R. (2004). The Invariance of Visual Search to Geometric
        Transformation. Journal of Vision, 4(8), 178.
      </a>
    </div>
  );
};

export default ImageTransitions;
