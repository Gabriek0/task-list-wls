import Image from 'next/image';
import styles from './styles.module.scss';
import plusIcon from '../../../public/images/plus.svg';

export function NewTaskButton() {
    return (
        <button className={styles.newTaskButton}>
            <div className={styles.imagePlusWrapper}>
                <Image
                    src={plusIcon}
                    alt='plus'
                    height={14}
                    width={14}
                />
            </div>
            Nova tarefa
        </button>
    )
}