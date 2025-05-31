import { Groups, Mic, TheaterComedy } from '@mui/icons-material'
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator } from '@mui/lab'
import { Box, Card, CardContent, Chip, Container, Typography } from '@mui/material'

export default function Improv() {
  const skills = [
    "Long-form Improv", "Short-form Games", "Character Development", "Scene Work",
    "Audience Interaction", "Team Building", "Public Speaking", "Creative Collaboration"
  ]


  const timeline = [
    {
      year: "1998",
      title: "Improv 101",
      description: "My freshman year of college, improv was offered as a j-term class that didn't start until noon. It fulfilled the fine arts requirement. I loved it so much."
    },
    {
      year: "2012",
      title: "HUGE 101 with Jill Bernard",
      description: "Everyone at my bar job was limited to three shifts per week. I really didn't want to get another job, so I took this class in addition to a an intuitive writing class at the loft that I really disliked."
    },
    {
      year: "2017",
      title: "Family Dinner",
      description: "it was the first year they auditioned spots and i got one and it was pretty amazing. i think i was in five of six shows. the first several were very difficulat and the last few were the last few were the best. there was an episode where i played uncle carl and i shoved as much food in my mouth as i could and was just free as heck. it was everything i wanted and i will never forget it."
    },
    {
      year: "2021",
      title: "Twin Cities Improv Festival Performance",
      description: "on top of the bakken. what a time to be alive."
    }
  ]

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Box textAlign="center" mb={6}>
        <Typography variant="h2" component="h1" gutterBottom>
          Improv Theater
        </Typography>
        <Typography variant="h5" color="text.secondary" mb={3}>
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

      <Box textAlign="center">
        <Typography variant="body1" color="text.secondary">
          i just dunked on you grampa
        </Typography>
      </Box>
    </Container>
  )
}
