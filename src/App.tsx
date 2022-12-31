//hooks
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, NavLink, Navigate } from 'react-router-dom';

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

//fontAwesome
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Links } from './assets/styles/App/Links';

//interfaces
export interface ITask {
    id: number;
    description: string;
    isDone: boolean;
    editIsActive: boolean;
    moreOptions: boolean;
}

//features
import { actions } from './features/handleTaskActions';
import { handleSubmit } from './features/handleSubmit';

function App() {
    const [inputValue, setInputValue] = useState('');
    const [isInputEmpty, setIsInputEmpty] = useState(false);
    const [tasks, setTasks] = useState<ITask[]>(() => {
        const storageTasks = localStorage.getItem('tasks');
        if (typeof storageTasks === 'string') {
            return JSON.parse(storageTasks);
        } else {
            return [];
        }
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
        setIsInputEmpty(false);
    };

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    return (
        <HashRouter>
            <Global />
            <AppWrapp>
                <H1>ToDo</H1>
                <Form
                    onSubmit={(e) =>
                        handleSubmit(
                            e,
                            inputValue,
                            setInputValue,
                            setIsInputEmpty,
                            setTasks
                        )
                    }
                >
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
                        <Route path="/" element={<Navigate to="/all" />} />
                        <Route
                            path="/all"
                            element={
                                <All
                                    tasks={tasks}
                                    setTasks={setTasks}
                                    actions={actions}
                                />
                            }
                        ></Route>
                        <Route
                            path="/todo"
                            element={
                                <ToDo
                                    tasks={tasks}
                                    setTasks={setTasks}
                                    actions={actions}
                                />
                            }
                        ></Route>
                        <Route
                            path="/done"
                            element={
                                <Done
                                    tasks={tasks}
                                    setTasks={setTasks}
                                    actions={actions}
                                />
                            }
                        ></Route>
                        <Route
                            path="*"
                            element={
                                <All
                                    tasks={tasks}
                                    setTasks={setTasks}
                                    actions={actions}
                                />
                            }
                        />
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
