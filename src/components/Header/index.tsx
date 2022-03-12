import Image from 'next/image';
import menuIcon from '../../../public/images/menu.svg';
import searchIcon from '../../../public/images/search.svg';
import { MenuButton } from '../MenuButton';

import styles from './styles.module.scss';


export function Header() {
    return (
        <>
            <div className={styles.headerContainer}>
                <div className={styles.imageMenuWrapper}>
                    <MenuButton />
                </div>
                <div className={styles.searchContainer}>
                    <div className={styles.imageSearchWrapper}>
                        <Image
                            src={searchIcon}
                            alt='Menu'
                            width={21}
                            height={21}
                        />
                    </div>
                    <input type="text" placeholder='Procurar tarefas' />
                </div>
            </div>
        </>
    )
}