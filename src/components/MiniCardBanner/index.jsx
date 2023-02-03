// Styles
import styles from './MiniCardBanner.module.scss'

export default function MiniCardBanner({background, title, text}) {
  return (
    <div className={styles.mini__card__banner__container} style={{background: `url(${background})`,}}>
      <h4>{title}</h4>
      <p>{text}</p>
    </div>
  )
}
