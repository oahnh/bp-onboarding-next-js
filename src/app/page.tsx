import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <p>Welcome! Create a new page at <code>/todos</code> and follow the steps outlined in the tasks</p>
    </main>
  );
}
