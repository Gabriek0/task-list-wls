import { Task } from '../Task';
import { useTasks } from '../../hooks/TaskContext';


export function TaskList() {
    const { tasks } = useTasks();

    return (
        <>
            {tasks && tasks?.map(task => (
                <Task
                    key={task.guid}
                    task={task}
                />
            ))}

        </>
    )
}