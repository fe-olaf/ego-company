import { Wedding, InvitationType } from '$types/wedding'

interface PinkThemeProps {
  wedding: Wedding
  invitationType?: InvitationType
}

function PinkTheme({ wedding, invitationType }: PinkThemeProps) {}

export default PinkTheme
