import Modal from 'react-modal';
import styles from './style.module.scss';

import { ModalEditTask } from "../ModalEditTask";
import pencilIcon from '../../../public/images/pencil.svg';
import trashIcon from '../../../public/images/trash.svg';
import Image from 'next/image';
import { ModalProps } from '../../types/ModalProps'
import { useState } from 'react';

export function ModalOptions({ isOpen, onRequestClose }: ModalProps) {
    const [isModalOptionsOpen, setIsModalOptionsOpen] = useState(false);

    function handleModalOptionsOpen() {
        setIsModalOptionsOpen(true);
        onRequestClose();
    };

    function handleModalOptionsClose() {
        setIsModalOptionsOpen(false);
        onRequestClose();
    };

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
                    onClick={handleModalOptionsClose}
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
            />
        </div>
    )
}