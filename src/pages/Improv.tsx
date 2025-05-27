import { EmojiEvents, Groups, Mic, TheaterComedy } from '@mui/icons-material'
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator } from '@mui/lab'
import { Box, Card, CardContent, Chip, Container, Grid, Typography } from '@mui/material'

export default function Improv() {
  const shows = [
    {
      title: "The Friday Night Show",
      venue: "Comedy Theater Downtown",
      role: "Ensemble Cast",
      period: "2023 - Present",
      description: "Weekly improv comedy show featuring long-form narrative improvisation"
    },
    {
      title: "Corporate Workshops",
      venue: "Various Companies",
      role: "Facilitator",
      period: "2022 - Present",
      description: "Teaching improv skills for team building and communication"
    },
    {
      title: "Open Mic Nights",
      venue: "Local Comedy Clubs",
      role: "Performer",
      period: "2021 - Present",
      description: "Regular performances at various comedy venues around the city"
    }
  ]

  const skills = [
    "Long-form Improv", "Short-form Games", "Character Development", "Scene Work",
    "Audience Interaction", "Team Building", "Public Speaking", "Creative Collaboration"
  ]

  const achievements = [
    "Performed at SF Improv Festival 2024",
    "Completed Level 5 at Groundlings Theater",
    "Teaching Assistant for Beginner Improv Classes",
    "Featured in 'Best of Bay Area Comedy' showcase"
  ]

  const timeline = [
    {
      year: "2021",
      title: "Started Improv Journey",
      description: "Took first improv class at local theater"
    },
    {
      year: "2022",
      title: "Joined Performance Team",
      description: "Became regular cast member of weekly show"
    },
    {
      year: "2023",
      title: "Corporate Training",
      description: "Started teaching improv workshops for businesses"
    },
    {
      year: "2024",
      title: "Festival Performance",
      description: "Performed at major improv comedy festival"
    }
  ]

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Box textAlign="center" mb={6}>
        <Typography variant="h2" component="h1" gutterBottom>
          🎭 Improv Comedy
        </Typography>
        <Typography variant="h5" color="text.secondary" mb={3}>
          Making people laugh through spontaneous creativity
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
          Improv has taught me the power of collaboration, quick thinking, and embracing failure as a path to success.
          These skills translate directly into my professional and personal life.
        </Typography>
      </Box>

      {/* Current Shows */}
      <Box mb={6}>
        <Typography variant="h4" component="h2" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <TheaterComedy /> Current Shows & Projects
        </Typography>
        <Grid container spacing={3}>
          {shows.map((show, index) => (
            <Grid size={{ xs: 12, md: 6 }} key={index}>
              <Card elevation={3} sx={{ height: '100%' }}>
                <CardContent>
                  <Box display="flex" justifyContent="space-between" alignItems="flex-start" mb={2}>
                    <Typography variant="h5" component="h3">
                      {show.title}
                    </Typography>
                    <Chip label={show.period} variant="outlined" size="small" />
                  </Box>
                  <Typography variant="h6" color="primary" gutterBottom>
                    {show.venue}
                  </Typography>
                  <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                    {show.role}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {show.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Skills & Techniques */}
      <Box mb={6}>
        <Typography variant="h4" component="h2" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Groups /> Skills & Techniques
        </Typography>
        <Card elevation={2}>
          <CardContent>
            <Box display="flex" flexWrap="wrap" gap={1}>
              {skills.map((skill) => (
                <Chip key={skill} label={skill} variant="outlined" />
              ))}
            </Box>
          </CardContent>
        </Card>
      </Box>

      {/* Journey Timeline */}
      <Box mb={6}>
        <Typography variant="h4" component="h2" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Mic /> Improv Journey
        </Typography>
        <Timeline position="alternate">
          {timeline.map((item, index) => (
            <TimelineItem key={index}>
              <TimelineSeparator>
                <TimelineDot color="primary" />
                {index < timeline.length - 1 && <TimelineConnector />}
              </TimelineSeparator>
              <TimelineContent>
                <Card elevation={2}>
                  <CardContent>
                    <Typography variant="h6" component="h3">
                      {item.year} - {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.description}
                    </Typography>
                  </CardContent>
                </Card>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Box>

      {/* Achievements */}
      <Box mb={6}>
        <Typography variant="h4" component="h2" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <EmojiEvents /> Highlights & Achievements
        </Typography>
        <Grid container spacing={2}>
          {achievements.map((achievement, index) => (
            <Grid size={{ xs: 12, sm: 6 }} key={index}>
              <Card elevation={1}>
                <CardContent sx={{ py: 2 }}>
                  <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <EmojiEvents color="primary" fontSize="small" />
                    {achievement}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box textAlign="center">
        <Typography variant="body1" color="text.secondary">
          "Yes, and..." - The fundamental rule of improv that applies to life
        </Typography>
      </Box>
    </Container>
  )
}
