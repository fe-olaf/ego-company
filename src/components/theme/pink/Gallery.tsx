import React, { useRef, useState } from 'react'
import classnames from 'classnames/bind'
import Flicking from '@egjs/react-flicking'

import Animation from '$shared/Animation'

import '@egjs/react-flicking/dist/flicking.css'
import '@egjs/react-flicking/dist/flicking-inline.css'

import styles from './Gallery.module.scss'

const cx = classnames.bind(styles)

function Gallery({ images = [] }: { images: string[] }) {
  const _gallery = useRef(null)
  const [page, setPage] = useState(0)

  const maxSize = images.length

  return (
    <div className={cx('article')}>
      <Animation useAnimation type="fadein">
        <div className={cx('txt_page')}>{`${page + 1}/${maxSize}`}</div>
        <Flicking
          ref={_gallery}
          viewportTag="div"
          cameraTag="div"
          align="center"
          onChanged={(e) => {
            setPage(e.currentTarget.index)
          }}
          horizontal={true}
          circular={true}
        >
          {images.map((image, idx) => {
            return <img key={idx} src={image} />
          })}
        </Flicking>
        <div className={cx('wrap_dot')}>
          {[...new Array(maxSize)].map((_, idx) => (
            <div className={cx('dot', { on: idx === page })} key={idx} />
          ))}
        </div>
      </Animation>
    </div>
  )
}
export default Gallery
