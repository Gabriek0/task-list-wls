import Modal from 'react-modal';
import styles from './styles.module.scss';

import { ModalProps } from '../../types/ModalProps'

export function ModalEditTask({ isOpen, onRequestClose }: ModalProps) {
    return (
        <>
            <Modal
                isOpen={isOpen}
                onRequestClose={onRequestClose}
                overlayClassName={styles.modalEditTaskOverlay}
                className={styles.modalEditTask}
            >
                <div className={styles.modalEditTaskContainer}>
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

                    <div className={styles.toggleContainer}>
                        <button>Em progresso</button>
                        <button>Concluído</button>
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
        </>
    )
};