import styles from "./Searchbar.module.scss";

export default function Searchbar() {
  return (
    <search>
      <div className={styles.searchbar}>
        <input type="text" placeholder="What do you want to watch?" />
        <button>Search</button>
      </div>
    </search>
  );
}
