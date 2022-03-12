import Image from 'next/image';
import Modal from 'react-modal';
import styles from './styles.module.scss';

import avatarIcon from '../../../public/images/avatar.svg';
import clipBoardIcon from '../../../public/images/clipboard-list.svg';
import informationsIcon from '../../../public/images/informations.svg';
import { ModalMenuProps } from '../../types/ModalMenuProps'

export function ModalMenu({ isOpen, onRequestClose }: ModalMenuProps) {

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            className={styles.modalMenuContainer}
        >
            <div className={styles.modalMenuContent}>
                <div className={styles.avatarContainer}>
                    <div className={styles.imageAvatarWrapper}>
                        <Image
                            src={avatarIcon}
                            alt='Avatar'
                            height={41}
                            width={41}
                        />
                    </div>
                    <div className={styles.aboutWrapper}>
                        <h2>Nome</h2>
                        <p>Função</p>
                    </div>
                </div>

                <div className={styles.buttonsContainer}>
                    <button>
                        <Image
                            src={clipBoardIcon}
                            alt='Clipboard list'
                            width={24}
                            height={24}
                        />
                        Tarefas
                    </button>
                    <button>
                        <Image
                            src={informationsIcon}
                            alt='Informations about'
                            width={24}
                            height={24}
                        />
                        Sobre
                    </button>
                </div>
            </div>

        </Modal>
    )
}
