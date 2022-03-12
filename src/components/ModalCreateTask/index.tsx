import Modal from 'react-modal';

import styles from './style.module.scss';

import { ModalProps } from '../../types/ModalProps';

export function ModalCreateTask({ isOpen, onRequestClose }: ModalProps) {
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
                        <input type="text" placeholder="" />
                        <label htmlFor="">Nome da tarefa</label>
                    </div>

                    <div className={styles.inputDescription}>
                        <input type="text" placeholder="" />
                        <label htmlFor="">Descrição da tarefa</label>
                    </div>
                </div>

                <div className={styles.buttonsContainer}>
                    <button
                        onClick={onRequestClose}
                    >
                        Cancelar

                    </button>
                    <button>Salvar</button>
                </div>
            </div>

        </Modal>
    )
}