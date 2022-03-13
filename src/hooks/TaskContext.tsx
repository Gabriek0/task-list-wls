import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { TaskType } from '../types/TaskType';
import api from '../services/api';

interface TaskContextProviderProps {
    children: ReactNode;
}

interface TaskContextData {
    tasks: TaskType[],
    deleteTask: (id: string) => void;
    createTask: (title: string, description: string) => void;
}

const TaskContext = createContext<TaskContextData>(
    {} as TaskContextData
);

export function TaskContextProvider({ children }: TaskContextProviderProps) {
    const [tasks, setTasks] = useState<TaskType[]>([])


    useEffect(() => {
        getTasks();
    }, [])

    async function getTasks() {
        const getTaskResponse = await api.get('tasks');
        setTasks(getTaskResponse.data);
    }

    function deleteTask(id: string) {
        api.delete(`tasks/${id}`);
        setTasks((prevState: any) => {
            return prevState.filter((task: TaskType) => task.guid !== id)
        })
    }

    async function createTask(title: string, description: string) {
        const newTask = await api.post('tasks', {
            title: title,
            description: description
        })

        const task = newTask.data;


        setTasks((prevState: any) => {
            return [...prevState, task]
        })
    }

    return (
        <TaskContext.Provider
            value={{ tasks, deleteTask, createTask }}
        >
            {children}
        </TaskContext.Provider>
    )
}

export function useTasks() {
    const context = useContext(TaskContext);

    return context
}