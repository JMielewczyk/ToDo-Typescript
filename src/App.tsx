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
import { faArrowDown, faCheck } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Links } from './assets/styles/App/Links';

//interfaces
export interface ITask {
    id: number;
    description: string;
    isDone: boolean;
    editIsActive: boolean;
    moreOptions?: boolean;
    deleteContainerActive?: boolean;
    dateOption: boolean;
    date: string;
    priorityOption: string;
    flagOption: boolean;
}

//features
import { actions } from './features/handleTaskActions';
import { handleSubmit, IHandleSubmit } from './features/handleSubmit';
import { AdditionalContainer } from './assets/styles/App/AdditionalContainer';
import { OptionsContainer } from './assets/styles/App/OptionsContainer';
import { CircleOptions } from './assets/styles/App/CircleOptions';
import { OptionContainer } from './assets/styles/App/OptionContainer';
import { DateContainer } from './assets/styles/App/DateContainer';
import { FooterWrap } from './assets/styles/Footer/FooterWrap';

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

    console.log(tasks);
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
                            setTasks,
                            dateOption,
                            date,
                            priorityOption,
                            flagOption
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
                <AdditionalContainer
                    className={moreOptionsActive ? 'active' : undefined}
                >
                    <button
                        onClick={() => {
                            setMoreOptionsActive((prevState) => !prevState);
                        }}
                    >
                        More options <FontAwesomeIcon icon={faArrowDown} />
                    </button>
                    <OptionsContainer>
                        <DateContainer
                            className={dateOption ? 'active' : undefined}
                        >
                            <div>
                                Date:
                                <CircleOptions
                                    style={
                                        dateOption
                                            ? { backgroundColor: '#4ade80' }
                                            : undefined
                                    }
                                    onClick={() => {
                                        setDateOption(
                                            (prevState) => !prevState
                                        );
                                        if (dateOption === false) {
                                            setDate(
                                                new Date().toLocaleDateString(
                                                    'en-CA'
                                                )
                                            );
                                        }
                                    }}
                                >
                                    {dateOption && (
                                        <FontAwesomeIcon icon={faCheck} />
                                    )}
                                </CircleOptions>
                            </div>
                            <input
                                onChange={(e) => setDate(e.target.value)}
                                value={date}
                                type="date"
                            />
                        </DateContainer>
                        <OptionContainer>
                            <label htmlFor="priority">Priority:</label>
                            <select
                                value={priorityOption}
                                onChange={(e) => {
                                    setPriorityOption(e.target.value);
                                }}
                                id="priority"
                            >
                                <option value="">None</option>
                                <option value="Low">Low</option>
                                <option value="Medium">Medium</option>
                                <option value="High">High</option>
                            </select>
                        </OptionContainer>
                        <OptionContainer>
                            Flag:
                            <CircleOptions
                                style={
                                    flagOption
                                        ? { backgroundColor: '#4ade80' }
                                        : undefined
                                }
                                onClick={() =>
                                    setFlagOption((prevState) => !prevState)
                                }
                            >
                                {flagOption && (
                                    <FontAwesomeIcon icon={faCheck} />
                                )}
                            </CircleOptions>
                        </OptionContainer>
                    </OptionsContainer>
                </AdditionalContainer>
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
            <FooterWrap>
                <p>Created by: Jakub Mielewczyk</p>
                <div>
                    <a href="https://www.linkedin.com/in/jakub-mielewczyk-b411a6221/">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a href="https://github.com/JMielewczyk">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </div>
            </FooterWrap>
        </HashRouter>
    );
}

export default App;
