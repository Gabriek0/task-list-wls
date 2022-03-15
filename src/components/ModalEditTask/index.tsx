import Modal from 'react-modal';
import styles from './styles.module.scss';

import { ModalProps } from '../../types/ModalProps'
import { useState } from 'react';
import { useTasks } from '../../hooks/TaskContext';

export function ModalEditTask({ id, isOpen, onRequestClose }: ModalProps) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [isTaskCompleted, setIsTaskCompleted] = useState(false);

    const { tasks, editTask } = useTasks();

    function toggleTaskCompleted(isTaskCompleted: boolean) {
        if (isTaskCompleted) {
            setIsTaskCompleted(true);
        } else {
            setIsTaskCompleted(false);
        }
    };

    function handleChangeTask() {
        if (id) {
            editTask(id, title, description, isTaskCompleted)
        }
        onRequestClose();
    }

    return (
        <>
            <Modal
                isOpen={isOpen}
                onRequestClose={onRequestClose}
                overlayClassName={styles.modalEditTaskOverlay}
                className={styles.modalEditTask}
            >
                <div className={styles.modalEditTaskContainer}>
                    <h2>Editar tarefa</h2>

                    <div className={styles.inputsContainer}>
                        <div className={styles.inputName}>
                            <input
                                type="text"
                                placeholder=""
                                onChange={(event) => setTitle(event.target.value)}
                            />
                            <label htmlFor="">Nome da tarefa</label>
                        </div>

                        <div className={styles.inputDescription}>
                            <input
                                type="text"
                                placeholder=""
                                onChange={(event) => setDescription(event.target.value)}
                            />
                            <label htmlFor="">Descrição da tarefa</label>
                        </div>
                    </div>

                    <div className={styles.toggleContainer}>
                        <button
                            onClick={() => toggleTaskCompleted(false)}
                        >
                            Em progresso
                        </button>
                        <button
                            onClick={() => toggleTaskCompleted(true)}
                        >
                            Concluído
                        </button>
                    </div>

                    <div className={styles.buttonsContainer}>
                        <button
                            onClick={onRequestClose}
                        >
                            Cancelar
                        </button>
                        <button
                            onClick={handleChangeTask}
                        >
                            Salvar
                        </button>
                    </div>
                </div>

            </Modal>
        </>
    )
};