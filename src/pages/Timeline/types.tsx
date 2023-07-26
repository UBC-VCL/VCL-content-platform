
// Object that defines the premise of what the results should be filtered for
//  Any of the defined items can be defined as a empty string to define that it shouldn't be filtered for that item
export interface SearchFilter  {
    project: Array<string>;
    category: Array<string>;
    date: [['initial', string], ['target', string]]; // Logic is that this will be an array of at max 2 tuples, and a minimum of 0
    author: Array<string>;
    keyword: string;
  }

export type dateTuple = ['initial' | 'target', string]

// the response from the server will be a list of objects, and the structure of a single obj is CommitOBJ
export interface SnapshotOBJ {
  _id: string;
  author: string;
  title: string;
  project: string;
  date: string;
  categories: Array<string>;
  descriptions: Array<string>;
  hyperlinks: Array<string>;
  contributors: Array<string>;
  updatedTime: string;
}