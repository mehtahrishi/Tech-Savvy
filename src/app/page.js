'use client'
import ChatComponent from "./Components/ChatComponent";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <ChatComponent />
        </main>
    </div>
  );
}