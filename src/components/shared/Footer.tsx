import { Wedding } from '$types/wedding'
import classnames from 'classnames/bind'

import styles from './Footer.module.scss'

const cx = classnames.bind(styles)

function Footer({ theme }: { theme: Wedding['theme'] }) {
  return (
    <div className={cx('article', { [theme]: theme })}>
      <div className={cx('txt_footer')}>EGO wedding invitation</div>
      <div className={cx('txt_footer')}>@egowedding.Copyright2021</div>
    </div>
  )
}

export default Footer
