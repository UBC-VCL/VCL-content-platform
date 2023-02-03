import CategorySelect from "@/components/EditTimeline/CategorySelect/CategorySelect";
import EditDateSelect from "@/components/EditTimeline/DateSelect/EditDateSelect";
import EditTextInput from "@/components/EditTimeline/EditTextInput/EditTextInput";
import ProjectSelect from "@/components/EditTimeline/ProjectSelect/ProjectSelect";
import axios from "axios";
import React, { useState } from "react";
import { useRouter } from "next/router";
import styles from "./edit.module.css";
import { useAuthStore } from "stores/AuthStore";
import { GetServerSidePropsContext } from "next";

type TimelineParams = {
  id: string;
};

export type TimelineInfo = {
  title: string;
  description: string;
  date: string;
  project: string;
  author: string;
  categories: Array<string>;
  contributors: string;
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const res = await fetch(`${process.env.BACKEND_URL}/api/snapshots/${context.params?.id}`)
  const {data} = await res.json();

  return { props: { timelineInfo: {
    title: data.title,
    description: data.description,
    date: data.date,
    project: data.project,
    author: data.author.username,
    categories: data.categories,
    contributors: data.contributors.map((c: { username: string; }) => c.username).join(", "),
  } } }
}

const EditTimelineEntry = ({timelineInfo}: {timelineInfo: TimelineInfo}) => {
  const access_token = useAuthStore((state) => state.access_token);

  const [timeline, setTimeline] = useState<TimelineInfo>(timelineInfo);

  const router = useRouter();
  const { id } = router.query as TimelineParams;
  const baseURL = process.env.NEXT_PUBLIC_API_URL;

  // TODO: loading screen
  if (!timeline) return <h1>Loading</h1>


  const save = async () => {
    const updatedTimeline = {
      ...timeline,
      contributors: timeline.contributors
        .split(",")
        .map((c: string) => c.trim()),
    };
    const editResponse = await axios({
      method: "put",
      url: `${baseURL}/api/snapshots/${id}`,
      data: updatedTimeline,
      headers: {
        authorization: access_token,
      },
    });
    if (editResponse.status === 200) {
      router.push("/timeline");
      //TODO: success message
      return;
    }
    //TODO: handle error
  };

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.headers}>
          <h1 className={styles.header}>Edit Timeline Entry</h1>
          <h2 className={styles.subHeader}>
            Edit the blanks below to edit the timeline entry
          </h2>
        </div>
        <main>
          <div className={styles.gridContainer}>
            <div className={styles.basicInfo}>
              <EditTextInput timeline={timeline} setTimeline={setTimeline} />
              <EditDateSelect timeline={timeline} setTimeline={setTimeline} />
              <ProjectSelect timeline={timeline} setTimeline={setTimeline} />
              <CategorySelect timeline={timeline} setTimeline={setTimeline} />
            </div>
            <div className={styles.descriptionGroup}>
              <label
                className={styles.descriptionLabel}
                htmlFor="timeline-description"
              >
                Timeline Entry Description
              </label>
              <textarea
                name="description"
                id="timeline-description"
                value={timeline?.description}
                onChange={(e) =>
                  setTimeline(
                    (prev) =>
                      ({ ...prev, description: e.target.value } as TimelineInfo)
                  )
                }
              ></textarea>
            </div>
          </div>
          <div className={styles.controls}>
            <button
              className={styles.cancelButton}
              onClick={() => router.push("/timeline")}
            >
              Cancel
            </button>
            <button
              className={styles.saveButton}
              disabled={!timeline.author || !timeline.title}
              onClick={save}
            >
              Save
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default EditTimelineEntry;
