// The TaskContext is global
// Can be accessed by any file

import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { TaskType } from '../types/TaskType';
import api from '../services/api';

interface TaskContextProviderProps {
    children: ReactNode;
}

// Typing all exported functions
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


    // Method to get data
    useEffect(() => {
        getTasks();
    }, [])


    async function getTasks() {
        const getTaskResponse = await api.get('tasks');
        setTasks(getTaskResponse.data);
    }

    // Method for search tasks filter for letters
    async function searchTask(searchTerm: string) {
        if (searchTerm === '') {
            getTasks();
        } else if (searchTerm !== '') {
            setTasks((prevState: any) => {
                return prevState.filter((task: TaskType) =>
                    task.title.toLowerCase().includes(searchTerm.toLowerCase()) || task.description.toLowerCase().includes(searchTerm.toLowerCase()))
            });
        }




    }

    // Delete tasks by id
    async function deleteTask(id: string) {
        await api.delete(`tasks/${id}`);
        setTasks((prevState: any) => {
            return prevState.filter((task: TaskType) => task.guid !== id)
        })
    }

    // Create task and check for title and description
    async function createTask(title?: string, description?: string) {

        // Handling errors if one of the data is not passed
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

    // Editing task by id
    async function editTask(guid: string, title?: string, description?: string, situation?: boolean) {

        //If a user only wants to change the status of the task, is allowed.
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

    // Export all functionality for all files to use.
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