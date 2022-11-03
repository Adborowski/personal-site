import styles from "./Mockups.module.css";

const Mockups = ({ urls, isDesktop }: any) => {
  const mockupElements = urls.map((url: any) => {
    return (
      <div
        key={url}
        className={styles.mockupFrame}
        style={{ backgroundImage: `url(${url})` }}
      ></div>
    );
  });

  return (
    <div className={isDesktop == true ? styles.desktopMockups : styles.mockups}>
      {mockupElements}
    </div>
  );
};
export default Mockups;
