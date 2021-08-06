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
    animation,
  } = wedding

  return (
    <>
      <IntroCard
        bride={bride}
        bridegroom={bridegroom}
        location={location}
        date={date}
        image={intro}
        animation={animation}
      />
      <GreetingsCard
        bride={bride}
        bridegroom={bridegroom}
        message={greetings}
        animation={animation}
      />
      <FamilyRelationCard
        bride={bride}
        bridegroom={bridegroom}
        parents={parents}
        animation={animation}
      />
      <Gallery images={gallery} animation={animation} />
      <LocationCard
        location={location}
        message={transport}
        animation={animation}
      />
      <Calendar theme={theme} date={date} animation={animation}>
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
          bride={bride}
          bridegroom={bridegroom}
          animation={animation}
          parents={parents}
          invitationType={invitationType}
          theme={theme}
        />
      )}
      <ShareButtons
        animation={animation}
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
