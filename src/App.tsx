//hooks
import React, { useState } from 'react';
import { HashRouter } from 'react-router-dom';

//styles
import { AppWrapp } from './assets/styles/App/AppWrapp';
import { Form } from './assets/styles/App/Form';
import { H1 } from './assets/styles/App/H1';
import { Input } from './assets/styles/App/Input';
import { ButtonSubmit } from './assets/styles/App/ButtonSubmit';
import { Task } from './assets/styles/App/Task';
import { TasksWrapp } from './assets/styles/App/TasksWrapp';
import { Circle } from './assets/styles/App/Circle';
import { Trash } from './assets/styles/App/Trash';
import Global from './assets/styles/Global';

//FontAwesome
import {
    faS,
    faCheck,
    faTrash,
    faArrowDown,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Task {
    id: number;
    description: string;
    isDone: boolean;
}

function App() {
    const [inputValue, setInputValue] = useState('');
    const [isInputEmpty, setIsInputEmpty] = useState(false);
    const [tasks, setTasks] = useState<Task[]>([]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
        setIsInputEmpty(false);
    };

    const handleSubmit = (e: React.KeyboardEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (inputValue === '') {
            setIsInputEmpty(true);
            return;
        }
        const randomID: number = Math.floor(Math.random() * 100000);
        const task = {
            id: randomID,
            description: inputValue,
            isDone: false,
        };
        setTasks((prevState) => [...prevState, task]);
    };

    const handleTaskActions = (action: string, id: number) => {
        switch (action) {
            case actions.toggleDone:
                const newArray = [...tasks];
                newArray.forEach((object) => {
                    if (object.id === id) {
                        object.isDone = !object.isDone;
                    }
                    setTasks(newArray);
                });
                break;
            case actions.removeTask:
                const smallerArray = tasks.filter((object) => object.id !== id);
                setTasks(smallerArray);
                break;
            default:
                return tasks;
        }
    };

    const actions = {
        toggleDone: 'toggleDone',
        removeTask: 'removeTask',
    };

    const mapTasks = tasks.map((task) => (
        <Task key={task.id}>
            <Circle
                onClick={() => handleTaskActions(actions.toggleDone, task.id)}
                className={task.isDone === true ? 'done' : undefined}
            >
                <FontAwesomeIcon icon={faCheck} />
            </Circle>
            <p>{task.description}</p>
            <Trash
                onClick={() => handleTaskActions(actions.removeTask, task.id)}
            >
                <FontAwesomeIcon icon={faTrash} />
            </Trash>
        </Task>
    ));

    return (
        <HashRouter>
            <Global />
            <AppWrapp>
                <H1>ToDo</H1>
                <Form onSubmit={handleSubmit}>
                    <Input
                        onChange={handleInputChange}
                        value={inputValue}
                        placeholder={
                            isInputEmpty === true
                                ? 'Task cannot be empty, write here...'
                                : 'New task write here ....'
                        }
                        className={
                            isInputEmpty === true ? 'warning' : undefined
                        }
                    />
                    <ButtonSubmit type="submit">
                        <FontAwesomeIcon icon={faArrowDown} />
                    </ButtonSubmit>
                </Form>
                <TasksWrapp>{tasks.length > 0 && mapTasks}</TasksWrapp>
            </AppWrapp>
        </HashRouter>
    );
}

export default App;
