import Modal from 'react-modal';
import styles from './style.module.scss';

import { ModalEditTask } from "../ModalEditTask";
import pencilIcon from '../../../public/images/pencil.svg';
import trashIcon from '../../../public/images/trash.svg';
import Image from 'next/image';
import { ModalProps } from '../../types/ModalProps'
import { useState } from 'react';
import api from '../../services/api';
import { useTasks } from '../../hooks/TaskContext';

export function ModalOptions({ id, isOpen, onRequestClose }: ModalProps) {
    const [isModalOptionsOpen, setIsModalOptionsOpen] = useState(false);

    const { deleteTask } = useTasks();

    function handleModalOptionsOpen() {
        setIsModalOptionsOpen(true);
        onRequestClose();
    };

    function handleModalOptionsClose() {
        setIsModalOptionsOpen(false);
        onRequestClose();
    };

    function handleDeleteTask() {
        if (id) {
            deleteTask(id);
        }

        handleModalOptionsClose();
    }

    return (
        <div>
            <Modal
                isOpen={isOpen}
                onRequestClose={onRequestClose}
                className={styles.modalOptions}
                overlayClassName={styles.modalOptionsOverlay}
            >
                <button
                    onClick={handleModalOptionsOpen}
                >
                    <Image
                        src={pencilIcon}
                        alt='Edit task'
                        height={16}
                        width={16}
                    />

                    Atualizar tarefa
                </button>
                <button
                    onClick={handleDeleteTask}

                >
                    <Image
                        src={trashIcon}
                        alt='Update task'
                        height={17}
                        width={14}
                    />
                    Remover tarefa
                </button>
            </Modal>
            <ModalEditTask
                isOpen={isModalOptionsOpen}
                onRequestClose={handleModalOptionsClose}
                id={id}
            />
        </div>
    )
}