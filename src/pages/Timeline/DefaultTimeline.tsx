import {Timeline} from "./Timeline";
const timeLineDefaultFilter = {
    project: ['Correlation', 'NOVA', 'SHIVA', 'Ideo', 'Project'],
      category: ['Website', 'Meeting', 'Workshop'],
      date: "All",
      author: ['Samanshiang Chiang', 'Michael Rotman', 'John Doe', 'Jane Doe'],
      keyword: ""
  };

const DefaultTimeline: React.FC<void>  = () => {
    return <Timeline defaultFilter={timeLineDefaultFilter}/>
  };

export {DefaultTimeline};