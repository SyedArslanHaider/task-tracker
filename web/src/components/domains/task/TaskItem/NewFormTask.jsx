import { useState } from 'react';
import './NewFormTask.css';
// eslint-disable-next-line react/prop-types
export function NewTaskForm({ handelButton }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  return (
    <form>
      <div>
        <label>Title:</label>
        <input
          type="text"
          placeholder="Enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label>Project:</label>
        <input
          type="text"
          placeholder="Enter project"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <button onClick={(event) => handelButton(title, description, event)}>
        Add Task
      </button>
    </form>
  );
}
