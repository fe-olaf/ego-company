import CopyToClipboard from 'react-copy-to-clipboard'
import classnames from 'classnames/bind'
import Animation from '$shared/Animation'

import { InvitationType, Wedding } from '$types/wedding'
import { useAlertContext } from '$contexts/AlertContext'
import IconKakaoShare from '$icons/IconKakaoShare'
import IconLinkshare from '$icons/IconLinkshare'
import { isSSR } from '$utils/env'

import styles from './ShareButtons.module.scss'

const cx = classnames.bind(styles)

function ShareButtons({
  title,
  location,
  introImage,
  greetingsMessage,
  invitationType,
  theme,
  animation,
}: {
  introImage: string
  greetingsMessage: string
  invitationType?: InvitationType
} & Pick<Wedding, 'location' | 'animation' | 'theme' | 'title'>) {
  const { pathLink } = location

  const { showAlert } = useAlertContext()

  const handleShareKakao = () => {
    if (window.Kakao) {
      const kakao = window.Kakao

      kakao.Link.sendDefault({
        objectType: 'feed',
        content: {
          title: title,
          description: greetingsMessage,
          imageUrl: introImage,
          link: {
            mobileWebUrl: window.location.href,
            webUrl: window.location.href,
          },
        },
        buttons: [
          {
            title: '청첩장 보기',
            link: {
              mobileWebUrl: window.location.href,
              webUrl: window.location.href,
            },
          },
          {
            title: '길찾기',
            link: {
              mobileWebUrl: pathLink,
              webUrl: pathLink,
            },
          },
        ],
      })
    }
  }

  return (
    <div className={cx('article', { empty: !invitationType, [theme]: theme })}>
      <Animation useAnimation={animation} type="fadein">
        <div className={cx('txt_title')}>청첩장 공유하기</div>
        <div className={cx('wrap_button')}>
          <div className={cx('ico_kakao')} onClick={handleShareKakao}>
            <IconKakaoShare />
          </div>
          <CopyToClipboard
            text={isSSR ? '' : window.location.href}
            onCopy={() => {
              showAlert('링크가 복사 되었습니다.')
            }}
          >
            <div>
              <IconLinkshare />
            </div>
          </CopyToClipboard>
        </div>
      </Animation>
    </div>
  )
}

export default ShareButtons
