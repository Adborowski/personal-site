import styles from "./TagList.module.css";

const TagList = ({ tagList }: any) => {
  //
  const tagTypes: any = {
    code: { color: "#bae1ff" },
    design: { color: "#ffb3ba" },
    business: { color: "#baffc9" },
  };
  console.log(tagList);

  const tagElements = tagList.map((tag: any) => {
    return (
      <div
        key={tag.label}
        style={{ backgroundColor: tagTypes[tag.type].color }}
        className={styles.tag}
      >
        {tag.label}
      </div>
    );
  });

  return <div className={styles.TagList}>{tagElements}</div>;
};

export default TagList;
