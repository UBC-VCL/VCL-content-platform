import React from 'react'
// import { RouteComponentProps } from 'react-router';
// import { useAppSelector } from '@redux/hooks';
// import { selectProjects } from '@redux/slices/ProjectRedux';
// import AddIcon from '@mui/icons-material/Add';
// import { Person } from '../../components/ProjectPeople/ProjectPeople';
// import './Project.css'

// //TODO: refactor Project page to use a Project generic component for displaying project content

// interface MatchParams {
//     project_id: string;
// }

// interface ProjectProps extends RouteComponentProps<MatchParams> {
// }

// const Project: React.FC<ProjectProps> = ({match}) => {
//     const projects = useAppSelector(selectProjects); 

//     return (
//     <div>
//         {/* this is a {match.params.project_id} page
//         <ul>
//         {projects.map((p, i) => {
//             return <li key={i}>{p.name}</li>
//         })} 
//         </ul> */}
//         <div className='btn__container'>
//             <button className='btn btn--add-member'>
//                 <AddIcon className="icon icon--plus" />
//                 <h3 className='btn__title'>add member</h3>
//             </button>
//         </div>
//         {/* TODO: refactor to fetch data from backend, currently hard-coded */}
//         <Person 
//             name="Maddison Eliot"
//             involvement='Project Lead, Graduate Student, Coding Team Manager, Analytics Manager'
//             description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?'
//             email='mellio10@psych.ubc.ca'
//             phone='604 000 0000'
//             linkedIn='linkedin.com'
//             isCurrentMember={false}
//         />
//         <Person 
//             name="Robinson John"
//             involvement='Project Lead, Graduate Student, Coding Team Manager, Analytics Manager'
//             description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?'
//             email='mellio10@psych.ubc.ca'
//             phone='604 000 0000'
//             linkedIn='linkedin.com'
//             isCurrentMember={false}
//         />
//         <Person 
//             name="Kevin Peng"
//             involvement='Project Lead, Graduate Student, Coding Team Manager, Analytics Manager'
//             description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?'
//             email='mellio10@psych.ubc.ca'
//             phone='604 000 0000'
//             linkedIn='linkedin.com'
//             isCurrentMember={false}
//         />
//     </div>
//     );
// }

// export default Project
