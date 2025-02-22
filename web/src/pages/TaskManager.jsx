import { TaskList } from '../components/domains/task/TaskList/TaskList';
import { useState } from 'react';
//import { NewFormTask } from '../components/domains/task/TaskItem/NewFormTask';
export const TaskManager = () => {
  const [taskList, setTaskList] = useState([
    {
      id: 1,
      title: 'Re-work UI/UX',
      priority: 'low',
      dueDate: '12/04/2021',
      members: ['Said', 'Rechal'],
      description: 'Timmer App',
    },
    {
      id: 2,
      title: 'Dark Mode Toggle',
      priority: 'low',
      dueDate: '12/05/2025',
      members: ['Umair', 'Precious'],
      description: 'Asa Dark Mode Feature',
    },
    {
      id: 3,
      title: 'Assessibility Checks',
      priority: 'high',
      dueDate: '11/03/2025',
      members: ['Ebtesam', 'Deborah'],
      description: 'Timer App',
    },
    {
      id: 4,
      title: 'Notification Checks',
      priority: 'medium',
      dueDate: '15/04/2025',
      members: ['Michel', 'Ricardo'],
      description: 'Timer App',
    },
  ]);
  const newTask = (taskName, projectName, event) => {
    event.preventDefault();
    setTaskList((prevTaskInfo) => [
      ...prevTaskInfo,
      {
        id: `${prevTaskInfo.length + 1}`,
        title: taskName,
        priority: 'High',
        dueDate: '11/03/2025',
        members: ['Syed', 'Said'],
        description: projectName,
      },
    ]);
  };
  return (
    <div>
      <TaskList tasks={taskList} />
    </div>
  );
};
