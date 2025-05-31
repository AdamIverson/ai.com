import { Groups, Mic, TheaterComedy } from '@mui/icons-material'
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator } from '@mui/lab'
import { Box, Card, CardContent, Chip, Container, Typography } from '@mui/material'
import { improvSkills, improvTimeline } from '../data/improvData'

export default function Improv() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Box textAlign="center" mb={6}>
        <Typography variant="h2" component="h1" gutterBottom>
          Improv Theater
        </Typography>
        <Typography variant="h5" color="text.secondary" mb={3}>
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
          Improv has taught me the power of collaboration through listening to others, quick thinking, and embracing failure as a path to success.
          These skills translate directly into my professional and personal life.
        </Typography>
      </Box>

      {/* Current Shows */}
      <Box mb={6}>
        <Typography variant="h4" component="h2" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <TheaterComedy /> Current Shows & Projects
        </Typography>
        <Card elevation={2}>
          <CardContent sx={{ textAlign: 'center', py: 4 }}>
            <Typography variant="body1" color="text.secondary">
              No current shows - taking a break to focus on doing bits with people who aren't interested in my stupid jokes
            </Typography>
          </CardContent>
        </Card>
      </Box>

      {/* Skills & Techniques */}
      <Box mb={6}>
        <Typography variant="h4" component="h2" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Groups /> Skills & Techniques
        </Typography>
        <Card elevation={2}>
          <CardContent>
            <Box display="flex" flexWrap="wrap" gap={1}>
              {improvSkills.map((skill) => (
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
          {improvTimeline.map((item, index) => (
            <TimelineItem key={index}>
              <TimelineSeparator>
                <TimelineDot color="primary" />
                {index < improvTimeline.length - 1 && <TimelineConnector />}
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

      <Box textAlign="center">
        <Typography variant="body1" color="text.secondary">
          i just dunked on you grampa
        </Typography>
      </Box>
    </Container>
  )
}
