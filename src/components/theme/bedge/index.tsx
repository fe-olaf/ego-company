import classnames from 'classnames/bind'

import styles from './Beige.module.scss'

import { Beige } from '$types/theme'
import Calendar from '$shared/Calendar'
import LocationText from '$shared/bedge/LocationText'
import Map from '$shared/Map'
import MetaTags from '$shared/MetaTags'

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
  wedding: Beige
}

function BeigeTheme({ wedding }: BeigeThemeProps) {
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
  } = wedding

  return (
    <div className={cx('article')}>
      <MetaTags
        title={title}
        description={greetings}
        image={image.gallery[0]}
      />
      <IntroCard
        bride={bride}
        bridegroom={bridegroom}
        location={location}
        date={date}
        message={intro}
        image={image.intro}
      />
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
      <Calendar date={date}>
        <div className={cx('wrap_location_txt')}>
          <LocationText date={date} location={location} />
        </div>
      </Calendar>
      <Map location={location} />
      <LocationCard location={location} message={transport} />
      <AccountCard parents={parents} message={account} type="bride" />
      <ContactCard parents={parents} type="bride" />
      <ShareButtons
        title={title}
        location={location}
        introImage={image.gallery[0]}
        greetingsMessage={greetings}
      />
      <Footer />
    </div>
  )
}

export default BeigeTheme
