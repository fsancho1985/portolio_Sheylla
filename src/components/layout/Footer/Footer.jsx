import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{ backgroundColor: 'primary.main', color: '#fff', py: 3, textAlign: 'center', mt: 'auto' }}
    >
      <Typography variant="body2">
        © {new Date().getFullYear()} Sheylla Barbosa Rodacki Nunes — Rodacki Perícias. Todos os direitos reservados.
      </Typography>
    </Box>
  )
}
