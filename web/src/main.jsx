import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';
import App from './App.jsx';

import './index.css';
import { TaskManager } from './pages/TaskManager.jsx';
import { AddToTask } from './pages/AddToTask.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/task-manager" element={<TaskManager />} />
          <Route path="/add-task" element={<AddToTask />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
