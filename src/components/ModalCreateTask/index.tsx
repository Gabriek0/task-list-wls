import Modal from 'react-modal';

import styles from './style.module.scss';

import { ModalProps } from '../../types/ModalProps';
import { useState } from 'react';
import api from '../../services/api';
import { useTasks } from '../../hooks/TaskContext';

export function ModalCreateTask({ isOpen, onRequestClose }: ModalProps) {
    const [taskTitle, setTaskTitle] = useState('');
    const [taskDescription, setTaskDescription] = useState('');

    const { createTask } = useTasks();

    function handleCreateTask() {
        createTask(taskTitle, taskDescription);
        onRequestClose();
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName={styles.modalCreateTaskOverlay}
            className={styles.modalCreateTask}
        >
            <div className={styles.modalCreateTaskContainer}>
                <h2>Criar Tarefa</h2>

                <div className={styles.inputsContainer}>
                    <div className={styles.inputName}>
                        <input
                            type="text"
                            placeholder=""
                            onChange={(event) => setTaskTitle(event?.target.value)}
                        />
                        <label htmlFor="">Nome da tarefa</label>
                    </div>

                    <div className={styles.inputDescription}>
                        <input
                            type="text"
                            placeholder=""
                            onChange={(event) => setTaskDescription(event?.target.value)}
                        />
                        <label htmlFor="">Descrição da tarefa</label>
                    </div>
                </div>

                <div className={styles.buttonsContainer}>
                    <button
                        onClick={onRequestClose}
                    >
                        Cancelar

                    </button>
                    <button
                        onClick={handleCreateTask}
                    >Salvar
                    </button>
                </div>
            </div>

        </Modal>
    )
}