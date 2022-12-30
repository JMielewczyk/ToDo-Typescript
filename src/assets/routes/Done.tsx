import React from 'react';

//interfaces
import { IProps } from './All';

//features
import { renderTasks } from '../../features/renderTasks';

const Done = ({ tasks, handleTaskActions, actions }: IProps) => {
    const filteredTasks = tasks.filter((task) => task.isDone);
    return <>{renderTasks(filteredTasks, handleTaskActions, actions)}</>;
};

export default Done;
