import classnames from 'classnames/bind'

import LinkButton from '$shared/bedge/LinkButton'
import { ROUTES } from '$constants'

import styles from './Gallery.module.scss'

const cx = classnames.bind(styles)

function Gallery({ id, imageUrl }: { id: string; imageUrl: string }) {
  return (
    <div className={cx('article')}>
      <img src={imageUrl} alt="갤러리 메인 이미지" />
      <LinkButton label="사진 더 둘러보기" to={`${ROUTES.GALLERY}/${id}`} />
    </div>
  )
}
export default Gallery
