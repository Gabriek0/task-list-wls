import Image from 'next/image';
import styles from './styles.module.scss';
import menuIcon from '../../../public/images/menu.svg';
import { useState } from 'react';
import { ModalMenu } from '../ModalMenu';

export function MenuButton() {
    const [isModalMenuOpen, setIsModalMenuOpen] = useState(false);

    function handleOpenMenuModal() {
        setIsModalMenuOpen(true);
    };

    function handleCloseMenuModal() {
        setIsModalMenuOpen(false)
    }

    return (
        <div>
            <button
                className={styles.menuButton}
                onClick={handleOpenMenuModal}
            >
                <Image
                    src={menuIcon}
                    alt='Menu'
                    width={42}
                    height={42}
                />
            </button>

            <ModalMenu
                isOpen={isModalMenuOpen}
                onRequestClose={handleCloseMenuModal}
            />
        </div>
    )
}