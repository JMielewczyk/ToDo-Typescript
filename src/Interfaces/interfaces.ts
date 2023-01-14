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

export interface IPropOptions {
    moreOptionsActive: boolean;
    setMoreOptionsActive: React.Dispatch<React.SetStateAction<boolean>>;
    dateOption: boolean;
    setDateOption: React.Dispatch<React.SetStateAction<boolean>>;
    setDate: React.Dispatch<React.SetStateAction<string>>;
    date: string;
    priorityOption: string;
    setPriorityOption: React.Dispatch<React.SetStateAction<string>>;
    flagOption: boolean;
    setFlagOption: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IPropsHeader {
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    inputValue: string;
    setInputValue: React.Dispatch<React.SetStateAction<string>>;
    setIsInputEmpty: React.Dispatch<React.SetStateAction<boolean>>;
    setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
    dateOption: boolean;
    date: string;
    priorityOption: string;
    flagOption: boolean;
    isInputEmpty: boolean;
}

export interface IHandleTaskActions {
    (
        action: string,
        id: number,
        tasks: Array<ITask>,
        setTasks: React.Dispatch<React.SetStateAction<ITask[]>>,
        newText?: string
    ): void;
}

export interface IActions {
    toggleDone: 'toggleDone';
    removeTask: 'removeTask';
    editTask: 'editTask';
    pushNewText: 'pushNewText';
    moreOptions: 'moreOptions';
    deleteContainer: 'deleteContainer';
}

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
