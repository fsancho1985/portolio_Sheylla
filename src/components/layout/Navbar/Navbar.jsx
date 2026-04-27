import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import AppButton from '../../ui/AppButton/AppButton'
import navItems from '../../../data/navigation'

const linkSx = {
  color: '#fff',
  textDecoration: 'none',
  fontSize: '0.9rem',
  px: 1.5,
  py: 0.5,
  borderRadius: 1,
  '&:hover': { backgroundColor: 'rgba(255,255,255,0.1)' },
  '&.active': { color: '#C9A84C' },
}

export default function Navbar() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const [open, setOpen] = useState(false)

  if (isMobile) {
    return (
      <>
        <IconButton
          onClick={() => setOpen(true)}
          sx={{ color: '#fff' }}
          aria-label="Abrir menu"
        >
          <AiOutlineMenu size="1.5rem" />
        </IconButton>
        <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
          <Box sx={{ width: 260, backgroundColor: 'primary.main', height: '100%', pt: 2 }}>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', px: 2 }}>
              <IconButton onClick={() => setOpen(false)} sx={{ color: '#fff' }} aria-label="Fechar menu">
                <AiOutlineClose size="1.5rem" />
              </IconButton>
            </Box>
            <List>
              {navItems.map((item) => (
                <ListItem key={item.path} disablePadding>
                  <ListItemButton
                    component={NavLink}
                    to={item.path}
                    onClick={() => setOpen(false)}
                    sx={{
                      color: '#fff',
                      '&.active': { color: '#C9A84C' },
                    }}
                  >
                    <ListItemText primary={item.label} />
                  </ListItemButton>
                </ListItem>
              ))}
              <ListItem sx={{ pt: 2, px: 2 }}>
                <AppButton
                  variant="primary"
                  component={NavLink}
                  to="/contact"
                  fullWidth
                  ctaLocation="header_mobile"
                  onClick={() => setOpen(false)}
                >
                  Solicitar Avaliação
                </AppButton>
              </ListItem>
            </List>
          </Box>
        </Drawer>
      </>
    )
  }

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
      {navItems.map((item) => (
        <Box key={item.path} component={NavLink} to={item.path} sx={linkSx}>
          {item.label}
        </Box>
      ))}
      <Box sx={{ ml: 2 }}>
        <AppButton variant="primary" component={NavLink} to="/contact" ctaLocation="header_desktop">
          Solicitar Avaliação
        </AppButton>
      </Box>
    </Box>
  )
}
