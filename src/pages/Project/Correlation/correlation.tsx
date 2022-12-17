import React from 'react';
import '../Project.css';
import { Project } from '@entities/Project'
import ProjectBreadcrumbs from '@components/ProjectBreadcrumbs'
import { TEXT } from '@statics'
import img1 from '../../../statics/images/correlation/correlation1.png';
import img2 from '../../../statics/images/correlation/correlation2.png';
import img3 from '../../../statics/images/correlation/correlation3.png';
import img4 from '../../../statics/images/correlation/correlation4.png';

interface ProjectProps {
    project : Project,
}

const Correlation: React.FC<ProjectProps> = (props) => {
    return (
        <div className='project-individual-content'>
            <ProjectBreadcrumbs project_name={props.project.name} page_name={TEXT.PROJECT_NAV.PROJECT_DESCRIPTION} /> 
            <br />
            <h1>{props.project.name}</h1>

            <br />

            <p>The Correlation project studies the visual perception of correlation[https://en.wikipedia.org/wiki/Pearson_correlation_coefficient] in data visualizations.</p>
            <br /> 

            <p>Data visualization is a graphical representation of a data set. Scatterplots are a simple and common example of visualizing data with two variables.</p>
            <br />

            <div style={{'textAlign': 'center'}}>
                <img src={img1}/>
            </div>

            <br /> 

            <p>In a scatter plot, data is translated into a graphic form by placing points on a cartesian (x-y) coordinate plane according to their values on each variable. Correlation in a scatter-plot corresponds to the degree to which the points form a straight line. Scatter plots represent the variability in a data set with a single visual variable, position, but there are others (ie: size, color, texture, and brightness) which could be used instead. For example, consider the two ring strip-plots below. They represent the same data-set as the scatter plots above, but they use ring-size rather than y-position to represent variability in one of the variables.
            </p>

            <br />

            <div style={{'textAlign': 'center'}}>
                <img src={img2}/>
            </div>

            <br /> 

            <p>Classically, determining correlation in scatterplots has been a slow high-level cognitive process, like interpreting pictorial representations. However, there is evidence that scatterplot perception follows Weber’s law [https://en.wikipedia.org/wiki/Weber%E2%80%93Fechner_law] which is usually associated with quick perceptual processes –  a linear relationship for discrimination and a logarithmic curve for estimation.
            </p>

            <br />

            <p>We use a classic methods from psychophysics [https://en.wikipedia.org/wiki/Psychophysics] to derive our measures – discrimination tasks using the staircase method to measure precision. Performance in this aspect is regular and well described by Weber and Fechner laws regardless of which visual variables are chosen to represent the data.</p>

            <br />

            <p>Currently we are working on two projects: <br /> 
            We are studying how manipulating different visual attributes within the scatterplots affect the way we perceive the information shown in the scatterplot, and whether we are able to see Weber and Fechner’s law hold true. We are currently manipulating the dots within the scatterplot (the effect of size, shape, colour, opacity etc.), before moving onto manipulating the dot cloud (number of dots, scale, location etc.), and finally manipulating the frame of the scatter plot with different border thickness, location of axes and so on.</p>
            <br />

            <div style={{'textAlign': 'center'}}>
                <img src={img3} style={{'width': 500}}/>
            </div>
            <br />
            <p>We are also studying how different timings for the display duration of the scatterplots impact the perception of correlation in black and white luminance strip plots in different distribution types.</p> 

            <br />

            <div style={{'textAlign': 'center'}}>
                <img src={img4} style={{'width': 500}}/>
            </div>

            <br />    

            <h3>You might like this project if...</h3>
            <ul>
                <li>You are interested in applied research</li>
                <li>You are interested in data visualization</li>
                <li>You are interested in the limits of visual attention</li>
                <li>You like to program in JavaScript (or would like to learn more about it)</li>
            </ul>

            <br />

            <h3>Relevant Links</h3>
            <a href='http://jov.arvojournals.org/article.aspx?articleid=2141080'>Rensink RA (2012). Invariance of Correlation Perception. Journal of Vision, 2012;12(9):433. doi: 10.1167/12.9.433.
            </a>
            <a href='http://www2.psych.ubc.ca/~rensink/publications/abs.10.4.html'>Rensink RA, and Baldridge G (2010). The perception of correlation in scatterplots. Computer Graphics Forum, 29: 1203-1210.
            </a>
            <a href='http://www2.psych.ubc.ca/~rensink/publications/abs.14.1.html'>Rensink RA (2014a). On the Prospects for a Science of Visualization.  In W. Huang (Ed.) Handbook of Human Centric Visualization: Theories, Methodologies, and Case Studies. New York: Springer.  pp. 147-175.
            </a>
        </div>
    )
};

export default Correlation;
