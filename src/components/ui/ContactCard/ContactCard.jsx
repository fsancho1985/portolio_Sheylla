import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

export default function ContactCard({ icon, label, value, href, onClick }) {
  return (
    <Card variant="outlined" sx={{ mb: 2 }}>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Box sx={{ color: 'secondary.main', fontSize: '2rem', lineHeight: 1 }}>{icon}</Box>
          <Box>
            <Typography variant="subtitle2" color="text.secondary">{label}</Typography>
            <Typography
              component={href ? 'a' : 'span'}
              href={href}
              onClick={onClick}
              target={href ? '_blank' : undefined}
              rel={href ? 'noopener noreferrer' : undefined}
              sx={{ color: 'primary.main', textDecoration: 'none', fontWeight: 500, '&:hover': { textDecoration: 'underline' } }}
            >
              {value}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  )
}
