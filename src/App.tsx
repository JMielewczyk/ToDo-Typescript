//hooks
import React, { useState } from 'react';
import { HashRouter, Routes, Route, NavLink } from 'react-router-dom';

//routes
import All from './assets/routes/All';
import ToDo from './assets/routes/ToDo';
import Done from './assets/routes/Done';

//styles
import { AppWrapp } from './assets/styles/App/AppWrapp';
import { Form } from './assets/styles/App/Form';
import { H1 } from './assets/styles/App/H1';
import { Input } from './assets/styles/App/Input';
import { ButtonSubmit } from './assets/styles/App/ButtonSubmit';
import { TasksWrapp } from './assets/styles/App/TasksWrapp';
import Global from './assets/styles/Global';

//FontAwesome
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Links } from './assets/styles/App/Links';

export interface ITask {
    id: number;
    description: string;
    isDone: boolean;
}

function App() {
    const [inputValue, setInputValue] = useState('');
    const [isInputEmpty, setIsInputEmpty] = useState(false);
    const [tasks, setTasks] = useState<ITask[]>([]);

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
        const task: ITask = {
            id: randomID,
            description: inputValue,
            isDone: false,
        };
        setTasks((prevState) => [...prevState, task]);
        setInputValue('');
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
                <TasksWrapp>
                    <Routes>
                        <Route
                            path="/all"
                            element={
                                <All
                                    tasks={tasks}
                                    handleTaskActions={handleTaskActions}
                                    actions={actions}
                                />
                            }
                        ></Route>
                        <Route
                            path="/todo"
                            element={
                                <ToDo
                                    tasks={tasks}
                                    handleTaskActions={handleTaskActions}
                                    actions={actions}
                                />
                            }
                        ></Route>
                        <Route
                            path="/done"
                            element={
                                <Done
                                    tasks={tasks}
                                    handleTaskActions={handleTaskActions}
                                    actions={actions}
                                />
                            }
                        ></Route>
                    </Routes>
                </TasksWrapp>
                <Links>
                    <NavLink to="all">All</NavLink>
                    <NavLink to="todo">ToDo</NavLink>
                    <NavLink to="done">Done</NavLink>
                </Links>
            </AppWrapp>
        </HashRouter>
    );
}

export default App;
