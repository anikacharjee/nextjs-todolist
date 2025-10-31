import { useState } from 'react';
import styles from '../styles/Home.module.css';

export default function TodoList() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      setTasks([...tasks, task.trim()]);
      setTask('');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a task"
          className={styles.input}
        />
        <button type="submit" className={styles.button}>Add</button>
      </form>

      <ol className={styles.list}>
        {tasks.map((t, index) => (
          <li key={index}>{t}</li>
        ))}
      </ol>
    </div>
  );
}
