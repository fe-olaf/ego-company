import classnames from 'classnames/bind'
import { useParams } from 'react-router-dom'

import { Beige, ThemeType } from '$types/theme'
import BeigeTheme from '$components/theme/bedge'
import { useWeddingContext } from '$contexts/WeddingContext'

import styles from './Wedding.module.scss'

import useLoadKakao from '$hooks/useLoadKakao'

import { fetchWedding } from '../services/wedding'
import { useEffect } from 'react'

const cx = classnames.bind(styles)

function Wedding() {
  const { id } = useParams() as { id?: string }

  useLoadKakao()

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
    id && fetchAndSetWedding()
  }, [id, setWedding])

  if (!wedding) {
    return null
  }

  function generateThemeComponent(type: ThemeType) {
    switch (type) {
      case 'beige': {
        return <BeigeTheme wedding={wedding as Beige} />
      }
      case 'pink': {
        return <BeigeTheme wedding={wedding as Beige} />
      }
      default: {
        return null
      }
    }
  }

  const { type } = wedding

  const Component = generateThemeComponent(type)

  return <div className={cx('container', type)}>{Component}</div>
}

export default Wedding
