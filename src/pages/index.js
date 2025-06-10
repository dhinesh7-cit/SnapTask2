import { useState, useEffect } from 'react';


export default function Home() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleAdd = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  return (
    <div>
      {/* 🔥 Background Video */}
      <video autoPlay muted loop className="background-video">
        <source src="/bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 🧊 Main App */}
      <main className="home">
        <h1>SnapTask ✨</h1>
        <div className="task-input">
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter a task..."
          />
          <button onClick={handleAdd}>Add</button>
        </div>
        <ul className="task-list">
          {tasks.map((t, index) => (
            <li key={index}>{t}</li>
          ))}
        </ul>
      </main>
    </div>
  );
}
