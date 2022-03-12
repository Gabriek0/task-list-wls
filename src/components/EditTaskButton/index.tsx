import Image from "next/image";
import dotsIcon from '../../../public/images/dots.svg'
import styles from './styles.module.scss'

export function EditTaskButton() {
    return (
        <>
            <button className={styles.buttonContainer}>
                <div className={styles.imageDotsWrapper}>
                    <Image
                        src={dotsIcon}
                        alt="Edit"
                        height={16}
                        width={4}
                    />
                </div>
            </button>
        </>
    )
}