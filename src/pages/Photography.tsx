import { Camera, OpenInNew } from '@mui/icons-material'
import { Box, Button, Container, Paper, Typography } from '@mui/material'

export default function Photography() {
  return (
    <Container maxWidth="md" sx={{ mt: 8, mb: 4 }}>
      <Paper elevation={3} sx={{ p: 6, textAlign: 'center' }}>
        <Camera sx={{ fontSize: 80, color: 'primary.main', mb: 3 }} />

        <Typography variant="h2" component="h1" gutterBottom>
          Photography
        </Typography>

        <Typography variant="h5" color="text.secondary" mb={4}>
          Visual Storytelling Portfolio
        </Typography>

        <Typography variant="body1" color="text.secondary" mb={4}>
          Explore my complete photography portfolio at <strong>adamiversonphotography.com</strong>,
          featuring landscape, portrait, and event photography work.
        </Typography>

        <Box>
          <Button
            variant="contained"
            size="large"
            startIcon={<OpenInNew />}
            href="https://adamiversonphotography.com"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ mb: 2 }}
          >
            Visit Photography Portfolio
          </Button>
        </Box>
      </Paper>
    </Container>
  )
}
