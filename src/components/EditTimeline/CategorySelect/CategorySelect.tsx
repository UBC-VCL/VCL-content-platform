import React from 'react'
import styles from '../Select.module.css';

const CategorySelect = () => {
  const [selectedCategory, setSelectedCategory] = React.useState<string[]>([]);

  const categories = ["Workshops", "Conditions", "hiring", "Meetings", "Guest Speaker", "Resources", "Dev/Code", "Progress", "Analysis"];

  const toggleCategory = (category: string) => {
    if (selectedCategory.includes(category)) {
        setSelectedCategory(selectedCategory.filter((c) => c !== category));
    } else {
        setSelectedCategory([...selectedCategory, category]);
    }
  };

  return (
    <div>
        <label className={styles.label}>Categories</label>
        <div className={styles.optionsContainer}>
            {categories && categories.length > 0 && (
                categories.map((category) => {
                    return (
                        <span className={styles.item} key={category}>
                            <input type="checkbox"
                            id={category}
                            checked={selectedCategory.includes(category)}
                            onChange={() => toggleCategory(category)} />
                            <label className={`${styles.itemButton} ${selectedCategory.includes(category) ? styles.activeButton : styles.inactiveButton}`}
                            tabIndex={0}
                            htmlFor={category}>{category}</label>
                        </span>
                    )}
                )
            )}
        </div>
    </div>
  )
}

export default CategorySelect