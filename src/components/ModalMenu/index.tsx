import Image from 'next/image';
import Modal from 'react-modal';
import Media from 'react-media';

import styles from './styles.module.scss';

import avatarIcon from '../../../public/images/avatar.svg';
import clipBoardIcon from '../../../public/images/clipboard-list.svg';
import informationsIcon from '../../../public/images/informations.svg';
import { ModalProps } from '../../types/ModalProps';

export function ModalMenu({ isOpen, onRequestClose }: ModalProps) {

    return (
        <>
            <Media query="(min-width: 1366px)">
                {matches => {
                    return matches ? (<Modal
                        isOpen={true}
                        className={styles.modalMenuContainer}
                        overlayClassName={styles.modalMenuOverlay}
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

                    </Modal>) : (<Modal
                        isOpen={isOpen}
                        onRequestClose={onRequestClose}
                        className={styles.modalMenuContainer}
                        overlayClassName={styles.modalMenuOverlay}
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

                    </Modal>)
                }}

            </Media>
        </>
    )
}
