//hooks
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, NavLink, Navigate } from 'react-router-dom';

//routes
import All from './Routes/All';
import ToDo from './Routes/ToDo';
import Done from './Routes/Done';

//styles
import Global from './assets/styles/Global';
import { AppWrapp } from './assets/styles/App/AppWrapp';
import { H1 } from './assets/styles/App/H1';
import { TasksWrapp } from './assets/styles/App/TasksWrapp';
import { Links } from './assets/styles/App/Links';

//interfaces
import { ITask } from './Interfaces/interfaces';

//features
import { actions } from './Features/handleTaskActions';

//components
import Header from './Components/Header';
import Options from './Components/AdditionalContainer';
import Footer from './Components/Footer';

function App() {
    const [inputValue, setInputValue] = useState('');
    const [isInputEmpty, setIsInputEmpty] = useState(false);
    const [dateOption, setDateOption] = useState(false);
    const [date, setDate] = useState(new Date().toLocaleDateString('en-CA'));
    const [flagOption, setFlagOption] = useState(false);
    const [priorityOption, setPriorityOption] = useState('');
    const [moreOptionsActive, setMoreOptionsActive] = useState(false);
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
                <Header
                    handleInputChange={handleInputChange}
                    inputValue={inputValue}
                    setInputValue={setInputValue}
                    setIsInputEmpty={setIsInputEmpty}
                    setTasks={setTasks}
                    dateOption={dateOption}
                    date={date}
                    priorityOption={priorityOption}
                    flagOption={flagOption}
                    isInputEmpty={isInputEmpty}
                />
                <Options
                    moreOptionsActive={moreOptionsActive}
                    setMoreOptionsActive={setMoreOptionsActive}
                    dateOption={dateOption}
                    setDateOption={setDateOption}
                    setDate={setDate}
                    date={date}
                    priorityOption={priorityOption}
                    setPriorityOption={setPriorityOption}
                    flagOption={flagOption}
                    setFlagOption={setFlagOption}
                />
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
            <Footer />
        </HashRouter>
    );
}

export default App;
