import { Link, Outlet } from 'react-router';
import './App.css';
import logo from './logo.svg';

function App() {
  return (
    <div className="container">
      {/* Sidebar */}
      <div className="sidebar">
        <img src={logo} alt="Logo" className="logo" />
        <ul className="nav-links">
          <li>
            <Link to="/task-manager">Task Manager</Link>
          </li>
          <li>
            <Link to="/add-task">Add to Task</Link>
          </li>
        </ul>
      </div>

      {/* Content Area */}
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}
export default App;
