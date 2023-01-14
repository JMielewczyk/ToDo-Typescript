import React, { FC } from 'react';

//interfaces
import { ITask } from '../App';
import { IActions } from '../Features/handleTaskActions';

export interface IProps {
    tasks: Array<ITask>;
    setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
    actions: IActions;
}

//features
import { renderTasks } from '../Features/renderTasks';
import { handleTaskActions } from '../Features/handleTaskActions';

const All = ({ tasks, setTasks, actions }: IProps) => {
    const mapAllTasks = [...tasks];
    return (
        <>
            {renderTasks(
                mapAllTasks,
                handleTaskActions,
                actions,
                tasks,
                setTasks
            )}
        </>
    );
};

export default All;
