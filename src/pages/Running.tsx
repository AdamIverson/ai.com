import { Box, Container, Typography, Card, CardContent, Grid, Chip, LinearProgress, Paper } from '@mui/material'
import { DirectionsRun, Timer, EmojiEvents, Timeline as TimelineIcon, FitnessCenter } from '@mui/icons-material'

export default function Running() {
  const stats = [
    { label: "Total Miles", value: "2,847", icon: <DirectionsRun /> },
    { label: "Marathons Completed", value: "5", icon: <EmojiEvents /> },
    { label: "Personal Record", value: "3:24:17", icon: <Timer /> },
    { label: "Years Running", value: "8", icon: <TimelineIcon /> }
  ]

  const races = [
    {
      name: "Boston Marathon",
      year: "2024",
      time: "3:24:17",
      placement: "Top 25% Age Group",
      note: "PR and Boston Qualifier!"
    },
    {
      name: "San Francisco Marathon",
      year: "2023",
      time: "3:31:42",
      placement: "2nd Age Group",
      note: "Hilly course, great experience"
    },
    {
      name: "Big Sur Marathon",
      year: "2023",
      time: "3:45:22",
      placement: "Finisher",
      note: "Scenic coastal route"
    },
    {
      name: "Chicago Marathon",
      year: "2022",
      time: "3:38:15",
      placement: "Top 30% Overall",
      note: "First major marathon"
    }
  ]

  const goals = [
    {
      goal: "Sub-3:20 Marathon",
      progress: 85,
      status: "In Progress",
      target: "Fall 2025"
    },
    {
      goal: "Run All World Majors",
      progress: 40,
      status: "2/6 Complete",
      target: "2028"
    },
    {
      goal: "50K Ultramarathon",
      progress: 20,
      status: "Training Started",
      target: "2026"
    }
  ]

  const trainingPhilosophy = [
    "Consistency over intensity",
    "Listen to your body",
    "Fuel properly for long runs",
    "Cross-training prevents injury",
    "Mental training is as important as physical"
  ]

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Box textAlign="center" mb={6}>
        <Typography variant="h2" component="h1" gutterBottom>
          🏃‍♂️ Running
        </Typography>
        <Typography variant="h5" color="text.secondary" mb={3}>
          Chasing personal records and pushing limits
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
          Running has taught me discipline, perseverance, and the power of consistent effort. 
          Every mile is a step towards becoming a better version of myself.
        </Typography>
      </Box>

      {/* Stats Overview */}
      <Box mb={6}>
        <Typography variant="h4" component="h2" gutterBottom textAlign="center">
          Running Statistics
        </Typography>
        <Grid container spacing={3}>
          {stats.map((stat, index) => (
            <Grid size={{ xs: 6, md: 3 }} key={index}>
              <Card elevation={3}>
                <CardContent sx={{ textAlign: 'center', p: 3 }}>
                  <Box sx={{ color: 'primary.main', mb: 2 }}>
                    {stat.icon}
                  </Box>
                  <Typography variant="h4" component="div" color="primary" gutterBottom>
                    {stat.value}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {stat.label}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Race History */}
      <Box mb={6}>
        <Typography variant="h4" component="h2" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <EmojiEvents /> Marathon History
        </Typography>
        <Grid container spacing={3}>
          {races.map((race, index) => (
            <Grid size={{ xs: 12, md: 6 }} key={index}>
              <Card elevation={2}>
                <CardContent>
                  <Box display="flex" justifyContent="space-between" alignItems="flex-start" mb={2}>
                    <Typography variant="h5" component="h3">
                      {race.name}
                    </Typography>
                    <Chip label={race.year} variant="outlined" />
                  </Box>
                  <Typography variant="h6" color="primary" gutterBottom>
                    {race.time}
                  </Typography>
                  <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                    {race.placement}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" fontStyle="italic">
                    {race.note}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Current Goals */}
      <Box mb={6}>
        <Typography variant="h4" component="h2" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <FitnessCenter /> Current Goals
        </Typography>
        <Grid container spacing={3}>
          {goals.map((goalItem, index) => (
            <Grid size={{ xs: 12, md: 4 }} key={index}>
              <Card elevation={2}>
                <CardContent>
                  <Typography variant="h6" component="h3" gutterBottom>
                    {goalItem.goal}
                  </Typography>
                  <Box mb={2}>
                    <Box display="flex" justifyContent="space-between" mb={1}>
                      <Typography variant="body2" color="text.secondary">
                        Progress
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {goalItem.progress}%
                      </Typography>
                    </Box>
                    <LinearProgress 
                      variant="determinate" 
                      value={goalItem.progress} 
                      sx={{ height: 8, borderRadius: 4 }}
                    />
                  </Box>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    Status: {goalItem.status}
                  </Typography>
                  <Chip label={`Target: ${goalItem.target}`} size="small" variant="outlined" />
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Training Philosophy */}
      <Box mb={6}>
        <Typography variant="h4" component="h2" gutterBottom textAlign="center">
          Training Philosophy
        </Typography>
        <Paper elevation={2} sx={{ p: 4 }}>
          <Grid container spacing={2}>
            {trainingPhilosophy.map((principle, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                <Box display="flex" alignItems="center" gap={1}>
                  <DirectionsRun color="primary" fontSize="small" />
                  <Typography variant="body1">
                    {principle}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Box>

      <Box textAlign="center">
        <Typography variant="body1" color="text.secondary" fontStyle="italic">
          "The miracle isn't that I finished. The miracle is that I had the courage to start." - John Bingham
        </Typography>
      </Box>
    </Container>
  )
}
