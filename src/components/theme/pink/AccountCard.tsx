import classnames from 'classnames/bind'
import CopyToClipboard from 'react-copy-to-clipboard'

import { InvitationType, Parents, Wedding } from '$types/wedding'
import { useAlertContext } from '$contexts/AlertContext'
import Animation from '$shared/Animation'

import styles from './AccountCard.module.scss'

const cx = classnames.bind(styles)

function AccountInfo({
  name,
  accountName,
  accountNumber,
  position,
}: {
  name: string
  accountName: string
  accountNumber: string
  position: string
}) {
  const { showAlert } = useAlertContext()

  return (
    <div className={cx('wrap_info')}>
      <div className={cx('info')}>
        <div className={cx('txt_name')}>
          {position} {name}
        </div>
        <div className={cx('wrap_txt')}>
          <div>{accountName}</div>
          <div>{accountNumber}</div>
        </div>
      </div>
      <CopyToClipboard
        text={`${accountName} ${accountNumber}`}
        onCopy={() => {
          showAlert('계좌가 복사 복사되었습니다.')
        }}
      >
        <div className={cx('btn_copy')}>복사하기</div>
      </CopyToClipboard>
    </div>
  )
}

function Account({ label, parents }: { label: string; parents: Parents }) {
  const { father, mother } = parents

  return (
    <div className={cx('wrap_account')}>
      <div className={cx('txt_label')}>{label}</div>
      <div className={cx('account')}>
        {father?.accountName && father?.accountNumber && (
          <AccountInfo
            name={father.name}
            accountName={father.accountName}
            accountNumber={father.accountNumber}
            position="아버지"
          />
        )}
        {mother?.accountName && mother?.accountNumber && (
          <AccountInfo
            name={mother.name}
            accountName={mother.accountName}
            accountNumber={mother.accountNumber}
            position="어머니"
          />
        )}
      </div>
    </div>
  )
}

function AccountCard({
  parents,
  message,
  invitationType,
}: {
  parents: Wedding['parents']
  message?: string
  invitationType?: InvitationType
}) {
  return (
    <div className={cx('article')}>
      <Animation useAnimation type="coming">
        <div className={cx('txt_title')}>마음 전하실 곳</div>
        {message && <div className={cx('txt_message')}>{message}</div>}
      </Animation>

      <Animation useAnimation type="coming">
        {invitationType === 'bride' && (
          <Account label="신부측 계좌번호" parents={parents.bride} />
        )}
        {invitationType === 'bridegroom' && (
          <Account label="신랑측 계좌번호" parents={parents.bridegroom} />
        )}
      </Animation>
    </div>
  )
}

export default AccountCard
