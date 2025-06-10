import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/TaskPage.module.css';

export default function TaskPage() {
  const router = useRouter();
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState(() => {
    if (typeof window !== 'undefined') {
      return JSON.parse(localStorage.getItem('snaptask-tasks')) || [];
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem('snaptask-tasks', JSON.stringify(taskList));
  }, [taskList]);

  const handleAddTask = () => {
    if (!task.trim()) return;
    setTaskList([...taskList, { text: task, completed: false }]);
    setTask('');
  };
  useEffect(() => {
    console.log('%c🚀 SnapTask mounted! Ready to roll...', 'color: #7b61ff; font-weight: bold;');
    
    const title = document.querySelector(`.${styles.title}`);
    if (title) {
      title.classList.add(styles.animate);
      setTimeout(() => {
        title.classList.remove(styles.animate);
      }, 600);
    }
  }, []);

  const toggleTask = (index) => {
    const updated = [...taskList];
    updated[index].completed = !updated[index].completed;
    setTaskList(updated);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleAddTask();
  };

  return (
    <div className={styles.container}>
      <video autoPlay muted loop className={styles.video}>
        <source src="/bg.mp4" type="video/mp4" />
      </video>

      <div className={styles.overlay}>
        <button onClick={() => router.push('/')} className={styles.homeBtn}>
          ⬅️ Back to Home
        </button>

        <h1 className={styles.title}>Your SnapTasks</h1>

        <div className={styles.inputContainer}>
          <input
            type="text"
            placeholder="Enter your task..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
            onKeyDown={handleKeyPress}
            className={styles.input}
          />
          <button onClick={handleAddTask} className={styles.addBtn}>+</button>
        </div>

        <ul className={styles.taskList}>
          {taskList.map((t, idx) => (
            <li
              key={idx}
              className={`${styles.taskItem} ${t.completed ? styles.completed : ''}`}
              onClick={() => toggleTask(idx)}
            >
              {t.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
