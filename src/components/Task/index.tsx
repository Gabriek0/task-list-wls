import Image from "next/image";
import styles from './styles.module.scss';
import checkIcon from '../../../public/images/check.svg';
import { EditTaskButton } from '../EditTaskButton';
import { TaskProps } from "../../types/TaskProps";


export function Task({ task }: TaskProps) {
    const { guid, title, description, situation } = task;

    return (
        <div className={styles.tasksContainer}>
            <EditTaskButton
                id={guid}
            />

            <h2>{title}</h2>
            <p>{description}</p>

            <div className={styles.buttonContainer}>
                <button >
                    <Image
                        src={checkIcon}
                        alt="Check"
                        height={24}
                        width={24}
                    />
                    {situation === 'completed' ? 'Concluído' : 'Em progresso'}
                </button>
            </div>
        </div>
    );
}