import { TaskItem } from '../TaskItem/TaskItem';
import styles from './TaskList.module.css';

/*
Please create the <TaskList /> component following the design from the Figma file.
Please make sure to add styles using CSS Modules.
Create a taskItems array and return a list of <TaskItem /> components.
*/

export function TaskList() {
  // create some task items here and return one task list for each item you have
  const taskItems = [
    {
      id: 1,
      title: "Re-work UI/UX",
      priority: "low",
      dueDate: "12/04/2021",
      members: ["Said", "Rechal"],
      description:"Timmer App"
    },
    {
      id: 2,
      title: "Dark Mode Toggle",
      priority: "low",
      dueDate: "12/05/2025",
      members: ["Umair", "Precious"],
       description:"Asa Dark Mode Feature"
    },
    {
      id: 3,
      title: "Assessibility Checks",
      priority: "high",
      dueDate: "11/03/2025",
      members: ["Ebtesam", "Deborah"],
      description:"Timer App"
    },
    {
      id: 4,
      title: "Notification Checks",
      priority: "medium",
      dueDate: "15/04/2025",
      members: ["Michel", "Ricardo"],
      description:"Timer App"
    },
  ];
  return (
    <div className={`${styles.listWrapper}`}>
      {taskItems.map((task) => (
        <TaskItem
          key={task.id} 
          title={task.title} 
          priority={task.priority} 
          dueDate={task.dueDate} 
          members={task.members}
          description={task.description}
        />
      ))}
    </div>
  );
}
