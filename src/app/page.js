'use client'
import ChatComponent from "./Components/ChatComponent";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div style={{ backgroundColor: 'black', padding: '10px' }}>
    {/* Chatbot content */}

    <div className={styles.page}>
      <main className={styles.main}>
        <ChatComponent />
        </main>
        
    </div>
    </div>
  );
}