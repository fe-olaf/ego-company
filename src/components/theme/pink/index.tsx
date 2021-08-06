import { Wedding, InvitationType } from '$types/wedding'
import ContactCard from '$shared/ContactCard'
import ShareButtons from '$shared/ShareButtons'
import Footer from '$shared/Footer'

import IntroCard from './IntroCard'
import GreetingsCard from './GreetingsCard'
import FamilyRelationCard from './FamilyRelationCard'
import Gallery from './Gallery'
import LocationCard from './LocationCard'
import Calendar from '$shared/Calendar'
import CalendarMessage from './CalendarMessage'
import AccountCard from './AccountCard'

interface PinkThemeProps {
  wedding: Wedding
  invitationType?: InvitationType
}

function PinkTheme({ wedding, invitationType }: PinkThemeProps) {
  const {
    bride,
    bridegroom,
    location,
    date,
    image: { intro, gallery },
    message: { greetings, transport, account },
    parents,
    theme,
    title,
  } = wedding

  return (
    <>
      <IntroCard
        bride={bride}
        bridegroom={bridegroom}
        location={location}
        date={date}
        image={intro}
      />
      <GreetingsCard
        bride={bride}
        bridegroom={bridegroom}
        message={greetings}
      />
      <FamilyRelationCard
        bride={bride}
        bridegroom={bridegroom}
        parents={parents}
      />
      <Gallery images={gallery} />
      <LocationCard location={location} message={transport} />
      <Calendar theme={theme} date={date}>
        <CalendarMessage date={date} location={location} />
      </Calendar>
      {invitationType && (
        <AccountCard
          parents={parents}
          message={account}
          invitationType={invitationType}
        />
      )}
      {invitationType && (
        <ContactCard
          parents={parents}
          invitationType={invitationType}
          theme={theme}
        />
      )}
      <ShareButtons
        theme={theme}
        title={title}
        location={location}
        introImage={gallery[0]}
        greetingsMessage={greetings}
        invitationType={invitationType}
      />
      <Footer theme={theme} />
    </>
  )
}

export default PinkTheme
