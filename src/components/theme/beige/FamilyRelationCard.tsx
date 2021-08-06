import classnames from 'classnames/bind'

import { Wedding, Parents } from '$types/wedding'
import Animation from '$shared/Animation'

import styles from './FamilyRelationCard.module.scss'

const cx = classnames.bind(styles)

function Family({
  parents,
  childName,
  position,
}: {
  parents: Parents
  childName: string
  position: string
}) {
  const { father, mother } = parents

  return (
    <div className={cx('wrap_family')}>
      <div className={cx('parents')}>
        <div className={cx('txt_name')}>{father.name}</div>
        <div className={cx('txt_name')}>{mother.name}</div>
      </div>
      <div className={cx('txt_position')}>{position}</div>
      <div className={cx('txt_child_name')}>{childName}</div>
    </div>
  )
}

function FamilyRelationCard({
  parents,
  bridegroom,
  bride,
  animation,
}: Pick<Wedding, 'parents' | 'bridegroom' | 'bride' | 'animation'>) {
  return (
    <div className={cx('article')}>
      <Animation useAnimation={animation} type="fadein">
        <Family
          parents={parents.bridegroom}
          childName={bridegroom.shortName}
          position="장남"
        />
        <Family
          parents={parents.bride}
          childName={bride.shortName}
          position="장녀"
        />
      </Animation>
    </div>
  )
}

export default FamilyRelationCard
