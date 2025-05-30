import { ContactMail, EmojiEvents, School, SportsFootball } from '@mui/icons-material'
import { Box, Button, Card, CardContent, Container, Grid, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

export default function CollegeEligibility() {
  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Box textAlign="center" mb={6}>
        <Typography variant="h2" component="h1" gutterBottom>
          College Eligibility
        </Typography>
        <Typography variant="h5" color="text.secondary" mb={3}>
          Ready for my collegiate athletic career
        </Typography>
      </Box>

      {/* Main Eligibility Card */}
      <Box mb={6}>
        <Card elevation={3} sx={{ p: 4 }}>
          <CardContent sx={{ textAlign: 'center' }}>
            <School sx={{ fontSize: 60, color: 'primary.main', mb: 3 }} />
            <Typography variant="h3" component="h2" gutterBottom color="primary">
              4 Years Remaining
            </Typography>
            <Typography variant="h6" color="text.secondary" mb={4}>
              Full NCAA eligibility intact
            </Typography>
            <Typography variant="body1" sx={{ maxWidth: 500, mx: 'auto', mb: 4 }}>
              Despite my extensive professional experience in software engineering and photography,
              I have somehow managed to preserve all four years of college athletic eligibility.
              I am currently listening to offers from universities seeking a mature, experienced athlete.
            </Typography>
            <Button
              component={Link}
              to="/contact"
              variant="contained"
              color="success"
              size="large"
              startIcon={<ContactMail />}
              sx={{ fontSize: '1.1rem', px: 3, py: 1.5 }}
            >
              Contact to Discuss Eligibility
            </Button>
          </CardContent>
        </Card>
      </Box>

      {/* Athletic Stats */}
      <Box mb={6}>
        <Typography variant="h4" component="h2" gutterBottom textAlign="center" sx={{ mb: 4 }}>
          Athletic Credentials
        </Typography>
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Card elevation={2}>
              <CardContent sx={{ textAlign: 'center' }}>
                <EmojiEvents sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />
                <Typography variant="h6" gutterBottom>
                  Ultramarathon Experience
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  17 races completed • 5 for 5 at Voyageur • Proven endurance
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Card elevation={2}>
              <CardContent sx={{ textAlign: 'center' }}>
                <SportsFootball sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />
                <Typography variant="h6" gutterBottom>
                  Team Sports Ready
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Leadership experience • Collaborative mindset • Adaptable
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Card elevation={2}>
              <CardContent sx={{ textAlign: 'center' }}>
                <School sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />
                <Typography variant="h6" gutterBottom>
                  Academic Excellence
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Multiple degrees • Professional experience • Study skills
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* What I Offer */}
      <Box mb={6}>
        <Card elevation={2} sx={{ p: 3 }}>
          <Typography variant="h5" component="h3" gutterBottom textAlign="center">
            What I Bring to Your Program
          </Typography>
          <Grid container spacing={2} sx={{ mt: 2 }}>
            <Grid size={{ xs: 12, sm: 6 }}>
              <Typography variant="body1" sx={{ mb: 1 }}>
                • Mature leadership and communication skills
              </Typography>
              <Typography variant="body1" sx={{ mb: 1 }}>
                • Proven ability to perform under pressure
              </Typography>
              <Typography variant="body1" sx={{ mb: 1 }}>
                • Experience with goal-setting and achievement
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <Typography variant="body1" sx={{ mb: 1 }}>
                • Strong work ethic and discipline
              </Typography>
              <Typography variant="body1" sx={{ mb: 1 }}>
                • Ability to balance academics and athletics
              </Typography>
              <Typography variant="body1" sx={{ mb: 1 }}>
                • Team-first mentality with individual excellence
              </Typography>
            </Grid>
          </Grid>
        </Card>
      </Box>


      <Box textAlign="center">
        <Typography variant="body2" color="text.secondary" fontStyle="italic">
          "Age is just a number. Eligibility is forever." - NCAA, probably
        </Typography>
      </Box>
    </Container>
  )
}
