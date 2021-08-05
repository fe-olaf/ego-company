import classnames from 'classnames/bind'

import styles from './Beige.module.scss'

import { Wedding, InvitationType } from '$types/wedding'
import Calendar from '$shared/Calendar'
import LocationText from '$shared/LocationText'
import Map from '$shared/Map'
import MetaTags from '$shared/MetaTags'
import Animation from '$shared/Animation'

import IntroCard from './IntroCard'
import GreetingsCard from './GreetingsCard'
import FamilyRelationCard from './FamilyRelationCard'
import Gallery from './Gallery'
import LocationCard from './LocationCard'
import AccountCard from './AccountCard'
import ContactCard from './ContactCard'
import ShareButtons from './ShareButtons'
import Footer from './Footer'

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
  } = wedding

  return (
    <div className={cx('article')}>
      <MetaTags
        title={title}
        description={greetings}
        image={image.gallery[0]}
      />
      <Animation useAnimation type="fadein">
        <IntroCard
          bride={bride}
          bridegroom={bridegroom}
          location={location}
          date={date}
          message={intro}
          image={image.intro}
        />
      </Animation>
      <GreetingsCard
        bride={bride}
        bridegroom={bridegroom}
        message={greetings}
      />
      <FamilyRelationCard
        parents={parents}
        bride={bride}
        bridegroom={bridegroom}
      />
      <Gallery id={id} imageUrl={image.gallery[0]} />
      <Calendar date={date} theme={theme}>
        <div className={cx('wrap_location_txt')}>
          <LocationText date={date} location={location} />
        </div>
      </Calendar>
      <Map location={location} buttonType="center" />
      <LocationCard location={location} message={transport} />
      {invitationType && (
        <AccountCard
          parents={parents}
          message={account}
          invitationType={invitationType}
        />
      )}
      {invitationType && (
        <ContactCard parents={parents} invitationType={invitationType} />
      )}
      <ShareButtons
        title={title}
        location={location}
        introImage={image.gallery[0]}
        greetingsMessage={greetings}
        invitationType={invitationType}
      />
      <Footer />
    </div>
  )
}

export default BeigeTheme
