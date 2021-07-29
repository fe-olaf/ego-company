import classnames from 'classnames/bind'

import { Location } from '$types/wedding'
import Animation from '$shared/Animation'

import styles from './LocationCard.module.scss'

const cx = classnames.bind(styles)

function TransportInfo({ title, infos }: { title: string; infos: string[] }) {
  return (
    <div className={cx('transport')}>
      <div className={cx('txt_info', 'emphasize')}>{title}</div>
      {infos.map((text, idx) => (
        <div className={cx('txt_info')} key={idx}>
          {text}
        </div>
      ))}
    </div>
  )
}

function LocationCard({
  location,
  message,
}: {
  location: Location
  message?: string
}) {
  const { name, phone, address, transportInfo } = location

  return (
    <div className={cx('article')}>
      <Animation useAnimation type="fadein">
        <div>
          <div className={cx('txt_title')}>예식장소 및 문의</div>
          <div className={cx('txt_info', 'emphasize')}>
            {name} <div className={cx('txt_divide')}>|</div> {phone}
          </div>
          <div className={cx('txt_info', 'emphasize')}>{address}</div>
        </div>
        {transportInfo && (
          <div className={cx('wrap_transport')}>
            <div className={cx('txt_title')}>교통안내</div>

            {transportInfo.subway && (
              <TransportInfo title="지하철" infos={transportInfo.subway} />
            )}
            {transportInfo.bus && (
              <TransportInfo title="버스" infos={transportInfo.bus} />
            )}
          </div>
        )}
        {message && <div className={cx('txt_message')}>{message}</div>}
      </Animation>
    </div>
  )
}

export default LocationCard
