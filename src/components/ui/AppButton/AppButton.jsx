import Button from '@mui/material/Button'
import { trackCtaClick } from '../../../services/analytics'

export default function AppButton({
  variant = 'primary',
  children,
  ctaLocation,
  onClick,
  ...props
}) {
  const isPrimary = variant === 'primary'

  const sx = isPrimary
    ? {
        backgroundColor: '#C9A84C',
        color: '#1A2744',
        '&:hover': { backgroundColor: '#b5943f' },
      }
    : {
        borderColor: '#1A2744',
        color: '#1A2744',
        '&:hover': { backgroundColor: '#1A2744', color: '#fff' },
      }

  function handleClick(e) {
    if (ctaLocation) trackCtaClick(ctaLocation)
    if (onClick) onClick(e)
  }

  return (
    <Button
      variant={isPrimary ? 'contained' : 'outlined'}
      sx={sx}
      onClick={handleClick}
      disableElevation
      {...props}
    >
      {children}
    </Button>
  )
}
