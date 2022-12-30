import React from 'react';

//interfaces
import { IProps } from './All';

//features
import { renderTasks } from '../../features/renderTasks';

const ToDo = ({ tasks, handleTaskActions, actions }: IProps) => {
    const filteredTasks = tasks.filter((task) => task.isDone !== true);
    return <>{renderTasks(filteredTasks, handleTaskActions, actions)}</>;
};

export default ToDo;
