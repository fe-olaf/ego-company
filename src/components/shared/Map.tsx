import React, { useEffect } from 'react'
import classnames from 'classnames/bind'

import styles from './Map.module.scss'

import LinkButton from '$shared/bedge/LinkButton'
import { Location } from '$types/wedding'

const cx = classnames.bind(styles)

function Map({
  location,
  buttonType,
}: {
  location: Location
  buttonType: 'footer' | 'center'
}) {
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

  const handleClickDimed = () => {
    window.open(pathLink)
  }

  return (
    <div className={cx('article')}>
      <div id="map" style={{ width: '100%', height: '250px' }}></div>
      {buttonType === 'center' && (
        <LinkButton label="지도로 보기" to={pathLink} open />
      )}
      {buttonType === 'footer' && (
        <>
          <div className={cx('dimed')} onClick={handleClickDimed}></div>
          <div className={cx('btn_footer')}>
            지도를 클릭하면 카카오지도로 연결됩니다.
          </div>
        </>
      )}
    </div>
  )
}

export default Map
