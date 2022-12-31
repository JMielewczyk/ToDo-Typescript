import React, { FC } from 'react';

//interfaces
import { ITask } from '../../App';
import { IActions } from '../../features/handleTaskActions';

export interface IProps {
    tasks: Array<ITask>;
    setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
    actions: IActions;
}

//features
import { renderTasks } from '../../features/renderTasks';
import { handleTaskActions } from '../../features/handleTaskActions';

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
