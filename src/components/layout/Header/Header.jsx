import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import Navbar from '../Navbar/Navbar'

export default function Header() {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: 'primary.main', height: 64 }}>
      <Toolbar sx={{ justifyContent: 'space-between', minHeight: 64 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <Avatar sx={{ backgroundColor: 'secondary.main', color: 'primary.main', fontWeight: 700, width: 40, height: 40 }}>
            R
          </Avatar>
          <Box>
            <Typography variant="subtitle1" sx={{ color: '#fff', fontWeight: 600, lineHeight: 1.2 }}>
              Rodacki Perícias
            </Typography>
            <Typography variant="caption" sx={{ color: '#C9A84C', lineHeight: 1 }}>
              Avaliação Imobiliária
            </Typography>
          </Box>
        </Box>
        <Navbar />
      </Toolbar>
    </AppBar>
  )
}
