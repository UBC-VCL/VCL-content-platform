import { Timeline } from "./Timeline";
import { useState, useEffect } from "react";
import { SearchFilter, SnapshotOBJ, ProjectOBJ } from "./types";
import axios from "axios";

const DefaultTimeline: React.FC<void> = () => {
  const baseURL = process.env.REACT_APP_API_URL;

  // These will be the arrays that will contain dynamically generated list for optinos in the Timeline filter
  const [dynamicProjects, setDProjects] = useState<Array<string>>([]);
  const [dynamicAuthors, setDAuthors] = useState<Array<string>>([]);
  const [dynamicCategories, setDCategories] = useState<Array<string>>([]);

  useEffect(() => {
    getProjectCommit();
    // getAuthorList();
  }, []);

  //TODO: USE this react state variable  plus the hardcoded projects for the filter list
  // const [projectFilterList, setProjectFilterList] = useState<string[]>([]);
  const getProjectCommit = async () => {
    await axios
      .get(`${baseURL}/api/snapshots`)
      .then((response) => {
        if (response.status != 200) {
          throw new Error(response.data.message);
        }
        const projects: Array<SnapshotOBJ> = response.data.data;

        console.log(projects)

        const dummyProjects: Array<string> = [];
        const dummyCategories: Array<string> = [];
        const dummyAuthors: Array<string> = [];

        projects.map((item: SnapshotOBJ, index: number) => {
          if (!dummyProjects.includes(item.project))
            dummyProjects.push(item.project);

          item.categories.map((item2, index) => {
            if (!dummyCategories.includes(item2)) dummyCategories.push(item2);
          });

          if (!dummyAuthors.includes(item.author)) {
            dummyAuthors.push(item.author);
          }
        });

        setDAuthors(dummyAuthors)
        setDProjects(dummyProjects);
        setDCategories(dummyCategories);
      })
      .catch((err) => {
        //do nothing
      });
  };

  //make a seperate api call to get human readable author name
  // const getAuthorList = async () => {
  //   await axios
  //     .post(`${baseURL}/api/query`, {
  //       collection: "snapshot",
  //       conditions: [
  //         {
  //           $lookup: {
  //             from: "users",
  //             localField: "author",
  //             foreignField: "_id",
  //             as: "user",
  //           },
  //         },
  //         {
  //           $unwind: "$user",
  //         },
  //         {
  //           $lookup: {
  //             from: "members",
  //             localField: "user.member",
  //             foreignField: "_id",
  //             as: "member",
  //           },
  //         },
  //         {
  //           $unwind: "$member",
  //         },
  //         {
  //           $project: {
  //             lastname: "$member.name.lastname",
  //             firstname: "$member.name.firstname",
  //             _id: 0,
  //           },
  //         },
  //       ],
  //     })
  //     .then((response) => {
  //       if (response.status != 200) {
  //         throw new Error(response.data.message);
  //       }
  //       const names: Array<{ lastname: string; firstname: string }> =
  //         response.data.data;
  //       setDAuthors(
  //         names
  //           .map((name) => {
  //             return name.firstname + " " + name.lastname;
  //           })
  //           .concat([
  //             "Samanshiang Chiang",
  //             "Michael Rotman",
  //             "John Doe",
  //             "Jane Doe",
  //           ])
  //       );
  //     })
  //     .catch((err) => {
  //       //do nothing
  //     });
  // };

  // This defines the default filter settings that the Timeline filter will start off on
  const timeLineDefaultFilter: SearchFilter = {
    project: dynamicProjects,
    category: dynamicCategories,
    date: [
      ["initial", ""],
      ["target", ""],
    ],
    author: dynamicAuthors,
    keyword: "",
  };
  return (
    <Timeline
      defaultFilter={timeLineDefaultFilter}
      dynamicProjects={dynamicProjects}
      dynamicAuthors={dynamicAuthors}
      dynamicCategories={dynamicCategories}
    />
  );
};

export { DefaultTimeline };
