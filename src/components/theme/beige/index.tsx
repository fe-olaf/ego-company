import classnames from 'classnames/bind'

import styles from './Beige.module.scss'

import { Wedding, InvitationType } from '$types/wedding'
import Calendar from '$shared/Calendar'
import LocationText from '$shared/LocationText'
import Map from '$shared/Map'
import ContactCard from '$shared/ContactCard'
import ShareButtons from '$shared/ShareButtons'
import Footer from '$shared/Footer'

import IntroCard from './IntroCard'
import GreetingsCard from './GreetingsCard'
import FamilyRelationCard from './FamilyRelationCard'
import Gallery from './Gallery'
import LocationCard from './LocationCard'
import AccountCard from './AccountCard'

const cx = classnames.bind(styles)

interface BeigeThemeProps {
  wedding: Wedding
  invitationType?: InvitationType
}

function BeigeTheme({ wedding, invitationType }: BeigeThemeProps) {
  const {
    id,
    title,
    bride,
    bridegroom,
    location,
    date,
    parents,
    message: { intro, greetings, transport, account },
    image,
    theme,
    animation,
  } = wedding

  const isEmptyContact =
    !invitationType &&
    !bride.isMessage &&
    !bride.isCall &&
    !bridegroom.isMessage &&
    !bridegroom.isCall

  return (
    <div className={cx('article')}>
      <IntroCard
        bride={bride}
        bridegroom={bridegroom}
        location={location}
        date={date}
        message={intro}
        image={image.intro}
        animation={animation}
      />
      <GreetingsCard
        animation={animation}
        bride={bride}
        bridegroom={bridegroom}
        message={greetings}
      />
      <FamilyRelationCard
        animation={animation}
        parents={parents}
        bride={bride}
        bridegroom={bridegroom}
      />
      <Gallery id={id} imageUrl={image.gallery[0]} animation={animation} />
      <Calendar date={date} theme={theme} animation={animation}>
        <div className={cx('wrap_location_txt')}>
          <LocationText date={date} location={location} />
        </div>
      </Calendar>
      <Map location={location} buttonType="center" />
      <LocationCard
        location={location}
        message={transport}
        animation={animation}
      />
      {invitationType && (
        <AccountCard
          parents={parents}
          message={account}
          invitationType={invitationType}
          animation={animation}
        />
      )}
      {!isEmptyContact && (
        <ContactCard
          bride={bride}
          bridegroom={bridegroom}
          parents={parents}
          invitationType={invitationType}
          theme={theme}
          animation={animation}
        />
      )}
      <ShareButtons
        theme={theme}
        title={title}
        location={location}
        introImage={image.gallery[0]}
        greetingsMessage={greetings}
        animation={animation}
        isEmptyContact={isEmptyContact}
      />
      <Footer theme={theme} />
    </div>
  )
}

export default BeigeTheme
