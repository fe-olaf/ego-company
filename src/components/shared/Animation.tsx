import React, { useState } from 'react'
import { InView } from 'react-intersection-observer'
import classnames from 'classnames/bind'

import styles from './Animation.module.scss'

const cx = classnames.bind(styles)

function Animation({
  children,
  useAnimation,
  type,
}: {
  children: React.ReactNode
  useAnimation?: boolean
  type?: 'fadein' | 'coming'
}) {
  const [visible, setVisible] = useState(false)

  return (
    <InView
      onChange={(inView) => {
        if (useAnimation && !visible && inView) {
          setVisible(true)
        }
      }}
    >
      <div
        className={cx({
          fadein: visible && type === 'fadein',
          coming: visible && type === 'coming',
        })}
      >
        {children}
      </div>
    </InView>
  )
}

export default Animation
