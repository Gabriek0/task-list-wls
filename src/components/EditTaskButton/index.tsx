import Image from "next/image";
import { useState } from "react";
import dotsIcon from '../../../public/images/dots.svg'
import { ModalOptions } from "../ModalOptions";
import styles from './styles.module.scss'

export function EditTaskButton() {
    const [isEditTaskModalOpen, setIsEditTaskModalOpen] = useState(false);

    function handleOpenEditTaskModal() {
        setIsEditTaskModalOpen(true);
    }

    function handleCloseEditTaskModal() {
        setIsEditTaskModalOpen(false);
    }

    return (
        <>
            <button
                className={styles.buttonContainer}
                onClick={handleOpenEditTaskModal}
            >
                <div className={styles.imageDotsWrapper}>
                    <Image
                        src={dotsIcon}
                        alt="Edit"
                        height={16}
                        width={4}
                    />
                </div>
            </button>
            <ModalOptions
                isOpen={isEditTaskModalOpen}
                onRequestClose={handleCloseEditTaskModal}
            />
        </>
    )
}