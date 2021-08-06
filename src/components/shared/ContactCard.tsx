import classnames from 'classnames/bind'

import { Parent, InvitationType, Wedding, Hero, Parents } from '$types/wedding'
import IconCall from '$icons/IconCall'
import IconMessage from '$icons/IconMessage'
import Animation from '$shared/Animation'

import styles from './ContactCard.module.scss'

const cx = classnames.bind(styles)

function ContactButtonGrop({
  person,
  label,
  theme,
}: {
  person: Parent | Hero
  label: string
  theme: Wedding['theme']
}) {
  const contacts = [person.isMessage, person.isCall].filter(Boolean).length

  if (!contacts) {
    return null
  }

  return (
    <div className={cx('contact')}>
      <div className={cx('txt_label')}>{label}</div>
      <div className={cx('wrap_button', { full: contacts === 1 })}>
        {person.isCall && (
          <a className={cx('button')} href={`tel:${person.phone}`}>
            <IconCall className={cx('ico')} theme={theme} />
            전화하기
          </a>
        )}
        {person.isMessage && (
          <a className={cx('button')} href={`sms:${person.phone}`}>
            <IconMessage className={cx('ico')} theme={theme} />
            문자하기
          </a>
        )}
      </div>
    </div>
  )
}

function ParentsContactButtons({
  parents,
  theme,
}: {
  parents: Parents
  theme: Wedding['theme']
}) {
  const { father, mother } = parents

  return (
    <>
      {father && (
        <ContactButtonGrop
          person={father}
          label={`신랑 아버님 연락하기`}
          theme={theme}
        />
      )}
      {mother && (
        <ContactButtonGrop
          person={mother}
          label={`신랑 어머님 연락하기`}
          theme={theme}
        />
      )}
    </>
  )
}

function ContactCard({
  bride,
  bridegroom,
  parents,
  invitationType,
  theme,
  animation,
}: {
  invitationType?: InvitationType
} & Pick<Wedding, 'theme' | 'parents' | 'bride' | 'bridegroom' | 'animation'>) {
  if (
    !invitationType &&
    !bride.isMessage &&
    !bride.isCall &&
    !bridegroom.isMessage &&
    !bridegroom.isCall
  ) {
    return null
  }

  return (
    <div className={cx('article', { [theme]: theme })}>
      <Animation useAnimation={animation} type="fadein">
        {invitationType === 'bridegroom' && (
          <ParentsContactButtons parents={parents.bridegroom} theme={theme} />
        )}
        {invitationType === 'bride' && (
          <ParentsContactButtons parents={parents.bridegroom} theme={theme} />
        )}
        {(bridegroom.isCall || bridegroom.isMessage) && (
          <ContactButtonGrop
            person={bride}
            label="신랑 연락하기"
            theme={theme}
          />
        )}
        {(bride.isCall || bride.isMessage) && (
          <ContactButtonGrop
            person={bride}
            label="신부 연락하기"
            theme={theme}
          />
        )}
      </Animation>
    </div>
  )
}

export default ContactCard
