import React from 'react';

//interfaces
import { IProps } from './All';

//features
import { renderTasks } from '../Features/renderTasks';
import { handleTaskActions } from '../Features/handleTaskActions';

const Done = ({ tasks, setTasks, actions }: IProps) => {
    const doneTasks = tasks.filter((task) => task.isDone);
    return (
        <>
            {renderTasks(
                doneTasks,
                handleTaskActions,
                actions,
                tasks,
                setTasks
            )}
        </>
    );
};

export default Done;
