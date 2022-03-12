import { NewTaskButton } from '../NewTaskButton';
import { Task } from '../Task';
import styles from './styles.module.scss';

export function Body() {
    return (
        <>
            <div className={styles.bodyContainer}>
                <h1>Tarefas</h1>

                <div className={styles.bodyContent}>
                    <Task />
                </div>
            </div>
        </>
    )
}