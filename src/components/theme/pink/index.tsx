import { Wedding, InvitationType } from '$types/wedding'

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
    </>
  )
}

export default PinkTheme
