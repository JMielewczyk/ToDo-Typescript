import React, { FC } from 'react';

//interfaces
import { ITask } from '../../App';

export interface IProps {
    tasks: Array<ITask>;
    handleTaskActions: (actions: string, id: number) => void;
    actions: {
        toggleDone: string;
        removeTask: string;
    };
}

//features
import { renderTasks } from '../../features/renderTasks';

const All = ({ tasks, handleTaskActions, actions }: IProps) => {
    const mapAllTasks = [...tasks];
    return <>{renderTasks(mapAllTasks, handleTaskActions, actions)}</>;
};

export default All;
