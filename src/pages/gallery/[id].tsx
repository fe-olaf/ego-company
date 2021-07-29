import classnames from 'classnames/bind'

import styles from './Gallery.module.scss'

import { useWeddingContext } from '$contexts/WeddingContext'
import Animation from '$shared/Animation'

const cx = classnames.bind(styles)

function GalleryPage() {
  const {
    state: { wedding },
  } = useWeddingContext()

  const {
    image: { gallery },
  } = wedding

  return (
    <div>
      {gallery.map((url, idx) => {
        return (
          <Animation useAnimation type="fadein" key={idx}>
            <img
              className={cx('image')}
              key={idx}
              src={url}
              alt={`${idx}번 쨰 웨딩 이미지`}
            />
          </Animation>
        )
      })}
    </div>
  )
}

export default GalleryPage
