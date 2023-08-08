
// Object that defines the premise of what the results should be filtered for
//  Any of the defined items can be defined as a empty string to define that it shouldn't be filtered for that item
export interface SearchFilter  {
    project: Array<string>;
    category: Array<string>;
    date: string; // the logic is that this will either be a Date object or an empty string (meaning it shouldnt filter for this aspect)
    author: Array<string>;
    keyword: string;
  }

export   interface SnapshotOBJ {
  _id: string;
  author: string;
  title: string;
  project: string;
  date: Date;
  categories: Array<string>;
  descriptions: Array<string>;
  hyperlinks: Array<string>;
  contributors: Array<string>;
  updatedTime: string;
}

export interface ProjectOBJ {
  _id: string;
  members: string[];
  name: string;
  description: string;
  isActive: boolean;
}