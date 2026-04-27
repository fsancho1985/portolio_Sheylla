import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Typography from '@mui/material/Typography'
import { NavLink } from 'react-router-dom'
import AppButton from '../AppButton/AppButton'
import { trackServiceCardClick } from '../../../services/analytics'

export default function ServiceCard({ title, description, image, alt, serviceId }) {
  function handleClick() {
    trackServiceCardClick(serviceId)
  }

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'border-bottom 0.2s',
        '&:hover': { borderBottom: '4px solid #C9A84C' },
      }}
    >
      <CardMedia component="img" height="200" image={image} alt={alt} />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6" component="h3" gutterBottom sx={{ color: 'primary.main', fontWeight: 500 }}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions sx={{ px: 2, pb: 2 }}>
        <AppButton
          variant="secondary"
          component={NavLink}
          to="/services"
          size="small"
          onClick={handleClick}
          ctaLocation={`service_card_${serviceId}`}
        >
          Saiba Mais
        </AppButton>
      </CardActions>
    </Card>
  )
}
