import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

export default function SectionTitle({ children }) {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h2" component="h2" sx={{ fontSize: { xs: '1.75rem', md: '2.25rem' }, fontWeight: 500, color: 'primary.main' }}>
        {children}
      </Typography>
      <Box sx={{ mt: 1, width: 60, height: 4, backgroundColor: 'secondary.main', borderRadius: 2 }} />
    </Box>
  )
}
