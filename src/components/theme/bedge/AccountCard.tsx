import classnames from 'classnames/bind'
import CopyToClipboard from 'react-copy-to-clipboard'

import { Beige, Parents } from '$types/theme'
import { useAlertContext } from '$contexts/AlertContext'

import styles from './AccountCard.module.scss'

const cx = classnames.bind(styles)

function AccountInfo({
  name,
  accountName,
  accountNumber,
}: {
  name: string
  accountName: string
  accountNumber: string
  margin?: string
}) {
  const { showAlert } = useAlertContext()

  return (
    <div className={cx('wrap_info')}>
      <div className={cx('info')}>
        <div className={cx('txt_name')}>{name}</div>
        <div>{`${accountName} / ${accountNumber}`}</div>
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
          />
        )}
        {mother?.accountName && mother?.accountNumber && (
          <AccountInfo
            name={mother.name}
            accountName={mother.accountName}
            accountNumber={mother.accountNumber}
            margin="24px 0 0 0"
          />
        )}
      </div>
    </div>
  )
}

function AccountCard({
  parents,
  message,
  type,
}: {
  parents: Beige['parents']
  message?: string
  type: 'bride' | 'bridegroom'
}) {
  return (
    <div className={cx('article')}>
      <div className={cx('txt_title')}>마음 전하실 곳</div>
      {message && <div className={cx('txt_message')}>{message}</div>}

      {type === 'bride' && (
        <Account label="신부측 계좌번호" parents={parents.bride} />
      )}
      {type === 'bridegroom' && (
        <Account label="신랑측 계좌번호" parents={parents.bridegroom} />
      )}
    </div>
  )
}

export default AccountCard
