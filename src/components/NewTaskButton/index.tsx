import Image from 'next/image';
import styles from './styles.module.scss';
import plusIcon from '../../../public/images/plus.svg';
import { ModalCreateTask } from '../ModalCreateTask';
import { useState } from 'react';

export function NewTaskButton() {
    const [isNewTaskOpenModal, setIsNewTaskOpenModal] = useState(false);

    function handleOpenNewTaskModal() {
        setIsNewTaskOpenModal(true);
    }

    function handleCloseMenuModal() {
        setIsNewTaskOpenModal(false)
    }

    return (
        <>
            <button
                className={styles.newTaskButton}
                onClick={handleOpenNewTaskModal}
            >
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

            <ModalCreateTask
                isOpen={isNewTaskOpenModal}
                onRequestClose={handleCloseMenuModal}
            />
        </>
    )
}