import styles from './Loader.module.scss'

export default function index() {
  return (
    <div>
        <div className={styles.spinner_wrapper}>
            <span className={styles.loader}></span>
        </div>
      
    </div>
  )
}
