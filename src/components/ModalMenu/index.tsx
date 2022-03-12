import Image from 'next/image';
import Modal from 'react-modal';
import styles from './styles.module.scss';

import

export function ModalMenu() {
    return (
        <Modal
            isOpen={true}
            className={styles.modalMenuContainer}
        >
            <div className={styles.modalMenuContent}>
                <div className={styles.avatarContainer}>
                    <div className={styles.imageAvatarWrapper}>
                        <Image
                            src={ }
                            alt='Avatar'
                            height={41}
                            width={41}
                        />
                    </div>
                    <div>
                        <h2>Nome</h2>
                        <p>Função</p>
                    </div>
                </div>

                <div className={styles.buttonsContainer}>
                    <button>Tarefas</button>
                    <button>Sobre</button>
                </div>
            </div>

        </Modal>
    )
}
