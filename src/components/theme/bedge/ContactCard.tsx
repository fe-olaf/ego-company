import classnames from 'classnames/bind'

import { Parents, Parent, InvitationType, Wedding } from '$types/wedding'
import IconCall from '$icons/IconCall'
import IconMessage from '$icons/IconMessage'
import Animation from '$shared/Animation'

import styles from './ContactCard.module.scss'

const cx = classnames.bind(styles)

function ButtonGrop({ parent, label }: { parent: Parent; label: string }) {
  const contacts = [parent?.isMessage, parent?.isCall].filter(Boolean).length

  if (!contacts) {
    return null
  }

  return (
    <div className={cx('contact')}>
      <div className={cx('txt_label')}>{label}</div>
      <div className={cx('wrap_button', { full: contacts === 1 })}>
        {parent?.isCall && (
          <a className={cx('button')} href={`tel:${parent.phone}`}>
            <IconCall className={cx('ico')} />
            전화하기
          </a>
        )}
        {parent?.isMessage && (
          <a className={cx('button')} href={`sms:${parent.phone}`}>
            <IconMessage className={cx('ico')} />
            문자하기
          </a>
        )}
      </div>
    </div>
  )
}

function Contact({ prefix, parents }: { prefix: string; parents: Parents }) {
  const { father, mother } = parents

  return (
    <>
      {father && (
        <ButtonGrop parent={father} label={`${prefix} 아버님 연락하기`} />
      )}
      {mother && (
        <ButtonGrop parent={mother} label={`${prefix} 어머님 연락하기`} />
      )}
    </>
  )
}

function ContactCard({
  parents,
  invitationType,
}: {
  parents: Wedding['parents']
  invitationType: InvitationType
}) {
  const { bride, bridegroom } = parents

  return (
    <div className={cx('article')}>
      <Animation useAnimation type="fadein">
        {invitationType === 'bride' && (
          <Contact prefix="신부" parents={bride} />
        )}
        {invitationType === 'bridegroom' && (
          <Contact prefix="신랑" parents={bridegroom} />
        )}
      </Animation>
    </div>
  )
}

export default ContactCard
