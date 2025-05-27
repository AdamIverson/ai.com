import { GitHub, OpenInNew } from '@mui/icons-material'
import { Box, Button, Card, CardContent, Container, Grid, Typography } from '@mui/material'

export default function Home() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Box textAlign="center" mb={6}>
        <Typography variant="h2" component="h1" gutterBottom>
          Adam Iverson
        </Typography>
        <Typography variant="h5" color="text.secondary" mb={3}>
          Software Developer • Photographer • Improv Performer • Runner
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
          Welcome to my digital portfolio. I'm passionate about creating elegant software solutions,
          capturing moments through photography, making people laugh through improv, and pushing my limits through running.
        </Typography>
      </Box>

      <Grid container spacing={4} justifyContent="center">
        <Grid size={{ xs: 12, sm: 6, md: 6, lg: 3 }}>
          <Card elevation={3} sx={{ height: '100%', cursor: 'pointer' }} onClick={() => window.location.href = '/development'}>
            <CardContent sx={{ textAlign: 'center', p: 3 }}>
              <Typography variant="h5" component="h2" gutterBottom>
                Development
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Full-stack development, open source contributions, and technical projects
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 6, lg: 3 }}>
          <Card elevation={3} sx={{ height: '100%', cursor: 'pointer' }} onClick={() => window.open('https://adamiversonphotography.com', '_blank')}>
            <CardContent sx={{ textAlign: 'center', p: 3 }}>
              <Typography variant="h5" component="h2" gutterBottom>
                Photography
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Visual storytelling through landscape, portrait, and event photography
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 6, lg: 3 }}>
          <Card elevation={3} sx={{ height: '100%', cursor: 'pointer' }} onClick={() => window.location.href = '/improv'}>
            <CardContent sx={{ textAlign: 'center', p: 3 }}>
              <Typography variant="h5" component="h2" gutterBottom>
                Improv
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Improvisational comedy performances and creative collaboration
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 6, lg: 3 }}>
          <Card elevation={3} sx={{ height: '100%', cursor: 'pointer' }} onClick={() => window.location.href = '/running'}>
            <CardContent sx={{ textAlign: 'center', p: 3 }}>
              <Typography variant="h5" component="h2" gutterBottom>
                Running
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Marathon training, race achievements, and fitness journey
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Box textAlign="center" mt={6}>
        <Button
          variant="outlined"
          startIcon={<GitHub />}
          href="https://github.com/AdamIverson"
          target="_blank"
          sx={{ mr: 2, mb: 2 }}
        >
          GitHub
        </Button>
        <Button
          variant="outlined"
          endIcon={<OpenInNew />}
          href="/resume"
          sx={{ mb: 2 }}
        >
          View Resume
        </Button>
      </Box>
    </Container>
  )
}
