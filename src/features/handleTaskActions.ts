import { ITask } from '../App';

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
}

export const actions: IActions = {
    toggleDone: 'toggleDone',
    removeTask: 'removeTask',
    editTask: 'editTask',
    pushNewText: 'pushNewText',
    moreOptions: 'moreOptions',
};

export const handleTaskActions: IHandleTaskActions = (
    action,
    id,
    tasks,
    setTasks,
    newText
) => {
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
        case actions.editTask:
            const newEditTask = [...tasks];
            newEditTask.forEach((object) => {
                if (object.id === id) {
                    object.editIsActive = !object.editIsActive;
                } else {
                    object.editIsActive = false;
                }
                setTasks(newEditTask);
            });
            break;
        case actions.pushNewText:
            const newTextArray = [...tasks];
            newTextArray.forEach((object) => {
                if (object.id === id) {
                    if (newText === undefined) return;
                    object.description = newText;
                    object.editIsActive = false;
                }
            });
            setTasks(newTextArray);
        case actions.moreOptions:
            const newMoreOptionsTask = [...tasks];
            newMoreOptionsTask.forEach((object) => {
                if (object.id === id) {
                    object.moreOptions = !object.moreOptions;
                } else {
                    object.moreOptions = false;
                }
                object.moreOptions === false
                    ? (object.editIsActive = false)
                    : null;
                setTasks(newMoreOptionsTask);
            });
        default:
            return tasks;
    }
};
