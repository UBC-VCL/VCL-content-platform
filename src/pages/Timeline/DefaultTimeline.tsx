import {Timeline} from "./Timeline";
import { SearchFilter } from "@pages/Timeline/types";

const timeLineDefaultFilter: SearchFilter = {
    project: ['Correlation', 'NOVA', 'SHIVA', 'IDEO', 'Project'],
      category: ['Website', 'Meeting', 'Workshop'],
      date: [['initial', ''], ['target', '']],
      author: ['Samanshiang Chiang', 'Michael Rotman', 'John Doe', 'Jane Doe'],
      keyword: ""
  };

const DefaultTimeline: React.FC<void>  = () => {
    return <Timeline defaultFilter={timeLineDefaultFilter}/>
  };

export {DefaultTimeline};