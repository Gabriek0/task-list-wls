import styles from './style.module.scss';

import checkIcon from '../../../public/images/check.svg';
import dotsIcon from '../../../public/images/dots.svg';
import Image from 'next/image';
import { EditTaskButton } from '../EditTaskButton';

export function Task() {
    return (
        <>
            <div className={styles.tasksContainer}>
                <EditTaskButton />

                <h2>Nome</h2>
                <p>Descrição da tarefa.</p>

                <div className={styles.buttonContainer}>
                    <button >
                        <Image
                            src={checkIcon}
                            alt="Check"
                            height={24}
                            width={24}
                        />
                        Concluído
                    </button>
                </div>
            </div>
        </>
    )
}