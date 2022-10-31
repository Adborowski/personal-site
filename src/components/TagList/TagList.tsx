import { OmitProps } from "antd/lib/transfer/ListBody";
import styles from "./TagList.module.css";

const TagList = ({ tagList, heading }: any) => {
  //
  const tagTypes: any = {
    code: { color: "#bae1ff" },
    design: { color: "#ffb3ba" },
    business: { color: "#baffc9" },
  };

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

  return (
    <div className={styles.TagList}>
      {heading && <h2>{heading}</h2>}
      {tagElements}
    </div>
  );
};

export default TagList;
