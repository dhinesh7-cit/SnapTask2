// src/components/TaskList.js
import React, { useEffect } from 'react';

export default function TaskList({ tasks }) {
  useEffect(() => {
    console.log("Tasks updated:", tasks);
  }, [tasks]);

  return (
    <ul className="task-list">
      {tasks.map((t, i) => (
        <li key={i}>{t}</li>
      ))}
    </ul>
  );
}
