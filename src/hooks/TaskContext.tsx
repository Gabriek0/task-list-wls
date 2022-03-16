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
    searchTask: (searchTerm: string) => void;
    editTask: (guid: string, title?: string, description?: string, situation?: boolean) => void;
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

    async function searchTask(searchTerm: string) {
        if (searchTerm === '') {
            getTasks();
        } else if (searchTerm !== '') {
            console.log('digitou algo')
            setTasks((prevState: any) => {
                return prevState.filter((task: TaskType) =>
                    task.title.includes(searchTerm) || task.description.includes(searchTerm))
            });
        }




    }

    async function deleteTask(id: string) {
        await api.delete(`tasks/${id}`);
        setTasks((prevState: any) => {
            return prevState.filter((task: TaskType) => task.guid !== id)
        })
    }

    async function createTask(title?: string, description?: string) {

        try {
            const newTask = await api.post('tasks', {
                title: title === '' ? '' : title,
                description: description === '' ? '' : description
            })

            const task = newTask.data;

            setTasks((prevState: any) => {
                return [...prevState, task]
            })

        } catch (err) {
            console.log(err)
        }
    }

    async function editTask(guid: string, title?: string, description?: string, situation?: boolean) {
        await api.patch(`tasks/${guid}`, {
            title,
            description,
            situation: situation === true ? 'completed' : 'uncompleted'
        })


        setTasks((prevState: any) => {
            return prevState.map((task: TaskType) => {
                if (task.guid === guid) {
                    return {
                        guid,
                        title: !title ? task.title : title,
                        description: !description ? task.description : description,
                        situation: situation === true ? 'completed' : 'uncompleted'
                    }
                }

                return task;
            })
        })
    }

    return (
        <TaskContext.Provider
            value={{ tasks, deleteTask, createTask, searchTask, editTask }}
        >
            {children}
        </TaskContext.Provider>
    )
}

export function useTasks() {
    const context = useContext(TaskContext);

    return context
}