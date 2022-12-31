import React from 'react';

//interfaces
import { IProps } from './All';

//features
import { renderTasks } from '../../features/renderTasks';
import { handleTaskActions } from '../../features/handleTaskActions';

const ToDo = ({ tasks, setTasks, actions }: IProps) => {
    const toDoTasks = tasks.filter((task) => task.isDone !== true);
    return (
        <>
            {renderTasks(
                toDoTasks,
                handleTaskActions,
                actions,
                tasks,
                setTasks
            )}
        </>
    );
};

export default ToDo;
