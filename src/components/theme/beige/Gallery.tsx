import classnames from 'classnames/bind'

import LinkButton from '$shared/beige/LinkButton'
import { ROUTES } from '$constants'
import Animation from '$shared/Animation'

import styles from './Gallery.module.scss'

const cx = classnames.bind(styles)

function Gallery({
  id,
  imageUrl,
  animation,
}: {
  id: string
  imageUrl: string
  animation: boolean
}) {
  return (
    <div className={cx('article')}>
      <Animation useAnimation={animation} type="fadein">
        <img src={imageUrl} alt="갤러리 메인 이미지" />
        <LinkButton label="사진 더 둘러보기" to={`${ROUTES.GALLERY}/${id}`} />
      </Animation>
    </div>
  )
}
export default Gallery
