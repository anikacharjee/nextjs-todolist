import Head from 'next/head';
import TodoList from '../components/TodoList';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Simple ToDo List</title>
      </Head>
      <main className={styles.main}>
        <h1>📝 My ToDo List</h1>
        <TodoList />
      </main>
    </div>
  );
}
