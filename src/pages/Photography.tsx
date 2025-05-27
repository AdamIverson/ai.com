import { Box, Container, Typography, Button, Paper } from '@mui/material'
import { OpenInNew, Camera } from '@mui/icons-material'
import { useEffect } from 'react'

export default function Photography() {
  useEffect(() => {
    // Optional: Add a short delay before redirect for better UX
    const timer = setTimeout(() => {
      window.location.href = 'https://adamiversonphotography.com'
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  const handleRedirect = () => {
    window.location.href = 'https://adamiversonphotography.com'
  }

  return (
    <Container maxWidth="md" sx={{ mt: 8, mb: 4 }}>
      <Paper elevation={3} sx={{ p: 6, textAlign: 'center' }}>
        <Camera sx={{ fontSize: 80, color: 'primary.main', mb: 3 }} />
        
        <Typography variant="h2" component="h1" gutterBottom>
          📸 Photography
        </Typography>
        
        <Typography variant="h5" color="text.secondary" mb={4}>
          Redirecting to my photography portfolio...
        </Typography>
        
        <Typography variant="body1" color="text.secondary" mb={4}>
          You're being redirected to <strong>adamiversonphotography.com</strong> where you can explore my complete photography portfolio, 
          including landscape, portrait, and event photography work.
        </Typography>

        <Box>
          <Button
            variant="contained"
            size="large"
            startIcon={<OpenInNew />}
            onClick={handleRedirect}
            sx={{ mb: 2 }}
          >
            Visit Photography Portfolio
          </Button>
        </Box>

        <Typography variant="caption" color="text.secondary" display="block" mt={3}>
          Automatic redirect in 3 seconds...
        </Typography>
      </Paper>
    </Container>
  )
}
