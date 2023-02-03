import { TimelineInfo } from "@/pages/timeline/[id]/edit";
import React from "react";
import styles from "../Select.module.css";

type Props = {
  timeline: TimelineInfo;
  setTimeline: React.Dispatch<React.SetStateAction<TimelineInfo>>;
};

const CategorySelect = ({ timeline, setTimeline }: Props) => {
  let selectedCategories = timeline?.categories || [];

  const categories = [
    "Workshops",
    "Conditions",
    "hiring",
    "Meetings",
    "Guest Speaker",
    "Resources",
    "Dev/Code",
    "Progress",
    "Analysis",
  ];

  const toggleCategory = (category: string) => {
    if (selectedCategories.includes(category)) {
      selectedCategories = selectedCategories.filter((c) => c !== category);
      setTimeline({ ...timeline, categories: selectedCategories });
    } else {
      selectedCategories = [...selectedCategories, category];
      setTimeline({ ...timeline, categories: selectedCategories });
    }
  };

  return (
    <div className={styles.selectContainer}>
      <label className={styles.label}>Select Applicable Categories</label>
      <div className={styles.optionsContainer}>
        {categories &&
          categories.length > 0 &&
          categories.map((category) => {
            return (
              <span className={styles.item} key={category}>
                <input
                  className={styles.input}
                  type="checkbox"
                  id={category}
                  checked={selectedCategories.includes(category)}
                  onChange={() => toggleCategory(category)}
                />
                <label
                  className={`${styles.itemButton} ${
                    selectedCategories.includes(category)
                      ? styles.activeButton
                      : styles.inactiveButton
                  }`}
                  tabIndex={0}
                  htmlFor={category}
                >
                  {category}
                </label>
              </span>
            );
          })}
      </div>
    </div>
  );
};

export default CategorySelect;
