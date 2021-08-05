import { Wedding, InvitationType } from '$types/wedding'

import IntroCard from './IntroCard'
import GreetingsCard from './GreetingsCard'
import FamilyRelationCard from './FamilyRelationCard'

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
    image: { intro },
    message: { greetings },
    parents,
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
    </>
  )
}

export default PinkTheme
