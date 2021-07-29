import classnames from 'classnames/bind'

import { Beige } from '$types/theme'

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
  } = wedding as Beige

  return (
    <div>
      <Animation useAnimation type="fadein">
        {gallery.map((url, idx) => {
          return (
            <img
              className={cx('image')}
              key={idx}
              src={url}
              alt={`${idx}번 쨰 웨딩 이미지`}
            />
          )
        })}
      </Animation>
    </div>
  )
}

export default GalleryPage
