import { Footer } from '../Footer';
import { Header } from '../Header';
import { NewTaskButton } from '../NewTaskButton';
import { TaskList } from '../TaskList';
import styles from './styles.module.scss';

export function Body() {
    return (
        <>
            <Header />
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