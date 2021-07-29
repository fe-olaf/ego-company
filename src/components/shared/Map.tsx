import React, { useEffect } from 'react'
import classnames from 'classnames/bind'

import styles from './Map.module.scss'

import LinkButton from '$shared/bedge/LinkButton'
import { Location } from '$types/wedding'

const cx = classnames.bind(styles)

function Map({ location }: { location: Location }) {
  const { pathLink, lat, lng, disableScroll } = location

  useEffect(() => {
    const container = document.getElementById('map')
    const position = new window.kakao.maps.LatLng(lat, lng)
    const options = {
      center: position,
      level: 3,
    }
    const marker = new window.kakao.maps.Marker({
      position,
    })

    const map = new window.kakao.maps.Map(container, options)

    marker.setMap(map)
  }, [lat, lng])

  return (
    <div className={cx('article')}>
      <div id="map" style={{ width: '100%', height: '250px' }}></div>
      <LinkButton label="지도로 보기" to={pathLink} open />
      {disableScroll && <div className={cx('dimed')}></div>}
    </div>
  )
}

export default Map
