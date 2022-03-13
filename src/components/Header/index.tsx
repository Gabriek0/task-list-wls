import Image from 'next/image';
import { useEffect, useState } from 'react';
import menuIcon from '../../../public/images/menu.svg';
import searchIcon from '../../../public/images/search.svg';
import { useTasks } from '../../hooks/TaskContext';
import { MenuButton } from '../MenuButton';

import styles from './styles.module.scss';


export function Header() {
    const [searchTerm, setSearchTerm] = useState('');

    const { searchTask } = useTasks();

    useEffect(() => {
        if (searchTerm.length > 0) {
            searchTask(searchTerm)
        }

    }, [searchTerm]);

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
                    <input
                        onChange={(event) => setSearchTerm(event.target.value)}
                        type="text"
                        placeholder='Procurar tarefas' />
                </div>
            </div>
        </>
    )
}