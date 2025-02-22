import styles from './TaskItem.module.css';
import PropTypes from 'prop-types';
/*
Please create the <TaskItem /> component following the design from the Figma file.
Please make sure to add styles using CSS Modules.
Add the necessary props to the component.
*/
export function TaskItem(props) {
  return (
    <div className={styles.itemWrapper}>
      <h3>{props.title}</h3>

      {/* Priority with dynamic color */}
      <p className={`${styles.priority} ${styles[props.priority]}`}>
        {props.priority}
      </p>

      {/* Date with icon */}
      <div className={styles.infoWrapper}>
        <img
          src="https://img.icons8.com/plumpy/24/birthday-date.png"
          alt="Calendar"
          className={styles.icon}
        />
        <p>{props.dueDate}</p>
      </div>

      {/* Members with icon */}
      <div className={styles.infoWrapper}>
        <img
          src="https://img.icons8.com/color/48/person-male.png"
          alt="User"
          className={styles.icon}
        />
        <p>{props.members}</p>
      </div>

      <p>{props.description}</p>
    </div>
  );
}
TaskItem.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string.isRequired,
  priority: PropTypes.string.isRequired,
  dueDate: PropTypes.string.isRequired,
  members: PropTypes.arrayOf(PropTypes.string).isRequired,
  description: PropTypes.string.isRequired,
};
