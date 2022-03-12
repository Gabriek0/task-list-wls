import { NewTaskButton } from "../NewTaskButton";
import styles from './styles.module.scss';

export function Footer() {
    return (
        <div className={styles.footerContainer}>
            <NewTaskButton />
        </div>
    )
}