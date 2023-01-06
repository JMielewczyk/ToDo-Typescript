//interfaces
import { ITask } from '../App';

export interface IHandleSubmit {
    (
        e: React.FormEvent<HTMLFormElement>,
        inputValue: string,
        setInputValue: React.Dispatch<React.SetStateAction<string>>,
        setIsInputEmpty: React.Dispatch<React.SetStateAction<boolean>>,
        setTasks: React.Dispatch<React.SetStateAction<ITask[]>>,
        dateOption: boolean,
        date: string,
        priorityOption: string,
        flag: boolean
    ): void;
}

export const handleSubmit: IHandleSubmit = (
    e,
    inputValue,
    setInputValue,
    setIsInputEmpty,
    setTasks,
    dateOption,
    date,
    priorityOption,
    flagOption
) => {
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
        editIsActive: false,
        deleteContainerActive: false,
        dateOption,
        date,
        priorityOption,
        flagOption,
    };
    setTasks((prevState) => [...prevState, task]);
    setInputValue('');
};
