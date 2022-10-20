import styles from "./App.module.css";
import Hero from "./components/Hero/Hero";
import Technologies from "./components/Technologies/Technologies";

function App() {
  return (
    <div className={styles.home}>
      <Hero />
      <Technologies />
    </div>
  );
}

export default App;
