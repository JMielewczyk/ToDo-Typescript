import React, { ReactEventHandler, useState } from 'react';

//interfaces
import { ITask } from '../App';
import { IActions, IHandleTaskActions } from './handleTaskActions';

//styles
import { Task } from '../assets/styles/App/Task';
import { Trash } from '../assets/styles/App/Trash';
import { Circle } from '../assets/styles/App/Circle';

//fontAwesome
import {
    faCheck,
    faTrash,
    faArrowDown,
    faEllipsisVertical,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container } from '../assets/styles/App/Container';
import { BtnEditSubmit } from '../assets/styles/App/BtnEditSubmit';
import { RightContainer } from '../assets/styles/App/RightContainer';
import { OptionsArrow } from '../assets/styles/App/OptionsArrow';

export const renderTasks = (
    array: Array<ITask>,
    handleTaskActions: IHandleTaskActions,
    actions: IActions,
    tasks: Array<ITask>,
    setTasks: React.Dispatch<React.SetStateAction<ITask[]>>
) => {
    const [inputValue, setInputValue] = useState('');
    const handleEditInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };
    return array.map((task) => {
        return (
            <Task
                className={task.editIsActive ? 'active' : undefined}
                key={task.id}
            >
                <Container>
                    <Circle
                        onClick={() =>
                            handleTaskActions(
                                actions.toggleDone,
                                task.id,
                                tasks,
                                setTasks
                            )
                        }
                        className={task.isDone === true ? 'done' : undefined}
                    >
                        <FontAwesomeIcon icon={faCheck} />
                    </Circle>
                    <p>{task.description}</p>
                    <RightContainer
                        className={
                            task.moreOptions === true ? 'active' : undefined
                        }
                    >
                        <OptionsArrow
                            onClick={() =>
                                handleTaskActions(
                                    actions.moreOptions,
                                    task.id,
                                    tasks,
                                    setTasks
                                )
                            }
                        >
                            {task.moreOptions === true ? (
                                <FontAwesomeIcon icon={faArrowDown} />
                            ) : (
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            )}
                        </OptionsArrow>
                        <button
                            onClick={() =>
                                handleTaskActions(
                                    actions.editTask,
                                    task.id,
                                    tasks,
                                    setTasks
                                )
                            }
                        >
                            {task.editIsActive === true ? 'Close' : 'Edit'}
                        </button>
                        <Trash
                            onClick={() =>
                                handleTaskActions(
                                    actions.removeTask,
                                    task.id,
                                    tasks,
                                    setTasks
                                )
                            }
                        >
                            <FontAwesomeIcon icon={faTrash} />
                        </Trash>
                    </RightContainer>
                </Container>
                {task.editIsActive === true ? (
                    <Container>
                        <form
                            onSubmit={() => {
                                if (inputValue === '') return;
                                handleTaskActions(
                                    actions.pushNewText,
                                    task.id,
                                    tasks,
                                    setTasks,
                                    inputValue
                                );
                                setInputValue('');
                            }}
                        >
                            <input
                                onChange={(e) => handleEditInput(e)}
                                value={inputValue}
                                type="text"
                                placeholder="New text here..."
                            />
                            <BtnEditSubmit>
                                <FontAwesomeIcon icon={faArrowDown} />
                            </BtnEditSubmit>
                        </form>
                    </Container>
                ) : null}
            </Task>
        );
    });
};
