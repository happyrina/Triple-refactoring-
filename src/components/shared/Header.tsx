import classNames from 'classnames/bind'
import styles from './Header.module.scss'

const cx = classNames.bind(styles)

function Header() {
  return (
    <header className={cx('container')}>
      <div>
        <div className={styles.headerFrame}>
          <a href="https://triple.guide/hotels">
            <img
              src="https://assets.triple.guide/images/img_intro_logo_dark.svg"
              alt="Triple"
            ></img>
            <img
              src="https://assets.triple.guide/images/img_intro_logo_hotels.svg"
              alt="숙소"
              className={styles.headerFrameLogo2}
            ></img>
          </a>

          <div className={styles.rightExtraContainer}>
            <a
              href="https://triple.guide/login?returnUrl=%2Fmy-bookings%2F&type=bookings"
              className={styles.myReservation}
            >
              내 예약
            </a>
            <div className={styles.rightExtraContainerBar}></div>
            <a
              href="https://triple.guide/intro?pid=hotel_web&is_retargeting=true"
              className={styles.showApp}
            >
              앱에서 보기
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
