import classnames from 'classnames/bind'

import { Parents, Parent, InvitationType, Wedding } from '$types/wedding'
import IconCall from '$icons/IconCall'
import IconMessage from '$icons/IconMessage'
import Animation from '$shared/Animation'

import styles from './ContactCard.module.scss'

const cx = classnames.bind(styles)

function ButtonGrop({
  parent,
  label,
  theme,
}: {
  parent: Parent
  label: string
  theme: Wedding['theme']
}) {
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
            <IconCall className={cx('ico')} theme={theme} />
            전화하기
          </a>
        )}
        {parent?.isMessage && (
          <a className={cx('button')} href={`sms:${parent.phone}`}>
            <IconMessage className={cx('ico')} theme={theme} />
            문자하기
          </a>
        )}
      </div>
    </div>
  )
}

function Contact({
  prefix,
  parents,
  theme,
}: {
  prefix: string
  parents: Parents
  theme: Wedding['theme']
}) {
  const { father, mother } = parents

  return (
    <>
      {father && (
        <ButtonGrop
          parent={father}
          label={`${prefix} 아버님 연락하기`}
          theme={theme}
        />
      )}
      {mother && (
        <ButtonGrop
          parent={mother}
          label={`${prefix} 어머님 연락하기`}
          theme={theme}
        />
      )}
    </>
  )
}

function ContactCard({
  parents,
  invitationType,
  theme,
}: {
  theme: Wedding['theme']
  parents: Wedding['parents']
  invitationType: InvitationType
}) {
  const { bride, bridegroom } = parents

  return (
    <div className={cx('article', { [theme]: theme })}>
      <Animation useAnimation type="fadein">
        {invitationType === 'bride' && (
          <Contact prefix="신부" parents={bride} theme={theme} />
        )}
        {invitationType === 'bridegroom' && (
          <Contact prefix="신랑" parents={bridegroom} theme={theme} />
        )}
      </Animation>
    </div>
  )
}

export default ContactCard
