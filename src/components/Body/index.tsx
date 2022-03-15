import { Footer } from '../Footer';
import { TaskList } from '../TaskList';
import styles from './styles.module.scss';

export function Body() {
    return (
        <>
            <div className={styles.bodyContainer}>
                <h1>Tarefas</h1>

                <div className={styles.bodyContent}>
                    <TaskList />
                </div>

                <Footer />
            </div>
        </>
    )
}