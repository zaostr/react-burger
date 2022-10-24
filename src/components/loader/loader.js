import { BurgerIcon } from '@ya.praktikum/react-developer-burger-ui-components'

import styles from './loader.module.css'

export const Loader = () => {
  return (
    <div className={styles.loader_container}>
        <div className={styles.loader_wrapper}>
            <span className={styles.loader}>
                <BurgerIcon type="primary" />
            </span>
        </div>
    </div>
  )
}
