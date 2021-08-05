import { Wedding, InvitationType } from '$types/wedding'

import IntroCard from './IntroCard'

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
  } = wedding
  return (
    <IntroCard
      bride={bride}
      bridegroom={bridegroom}
      location={location}
      date={date}
      image={intro}
    />
  )
}

export default PinkTheme
