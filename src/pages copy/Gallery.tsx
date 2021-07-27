import { useEffect } from 'react'
import classnames from 'classnames/bind'
import { useParams } from 'react-router-dom'

import { Beige } from '$types/theme'

import styles from './Gallery.module.scss'

import useScrollTop from '$hooks/useScrollTop'
import { useWeddingContext } from '$contexts/WeddingContext'
import { fetchWedding } from '../services/wedding'

const cx = classnames.bind(styles)

function Gallery() {
  const { id } = useParams() as { id?: string }

  const {
    state: { wedding },
    actions: { setWedding },
  } = useWeddingContext()

  useEffect(() => {
    async function fetchAndSetWedding() {
      try {
        const wedding = await fetchWedding(id as string)
        setWedding(wedding)
      } catch (e) {
        //
      }
    }
    !wedding && id && fetchAndSetWedding()
  }, [id, setWedding, wedding])

  useScrollTop()

  if (!wedding) {
    return null
  }

  const {
    image: { gallery },
  } = wedding as Beige

  return (
    <div>
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
    </div>
  )
}

export default Gallery
