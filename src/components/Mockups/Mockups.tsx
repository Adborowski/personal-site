import styles from "./Mockups.module.css";

const Mockups = ({ urls }: any) => {
  const mockupElements = urls.map((url: any) => {
    return (
      <div
        key={url}
        className={styles.mockupFrame}
        style={{ backgroundImage: `url(${url})` }}
      ></div>
    );
  });

  return <div className={styles.mockups}>{mockupElements}</div>;
};
export default Mockups;
