import { TaskItem } from '../TaskItem/TaskItem';
import styles from './TaskList.module.css';
/*
Please create the <TaskList /> component following the design from the Figma file.
Please make sure to add styles using CSS Modules.
Create a taskItems array and return a list of <TaskItem /> components.
*/

export function TaskList(props) {
  // create some task items here and return one task list for each item you have
  return (
    <div className={`${styles.listWrapper}`}>
      {props.tasks.map((task) => (
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
