//interfaces
import { ITask } from '../App';
import { IProps } from '../assets/routes/All';
//styles
import { Task } from '../assets/styles/App/Task';
import { Trash } from '../assets/styles/App/Trash';
import { Circle } from '../assets/styles/App/Circle';

//fontAwesome
import { faCheck, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const renderTasks = (
    array: Array<ITask>,
    handleTaskActions: (actions: string, id: number) => void,
    actions: {
        toggleDone: string;
        removeTask: string;
    }
) => {
    return array.map((task) => {
        return (
            <Task key={task.id}>
                <Circle
                    onClick={() =>
                        handleTaskActions(actions.toggleDone, task.id)
                    }
                    className={task.isDone === true ? 'done' : undefined}
                >
                    <FontAwesomeIcon icon={faCheck} />
                </Circle>
                <p>{task.description}</p>
                <Trash
                    onClick={() =>
                        handleTaskActions(actions.removeTask, task.id)
                    }
                >
                    <FontAwesomeIcon icon={faTrash} />
                </Trash>
            </Task>
        );
    });
};
