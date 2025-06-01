import { DirectionsRun, EmojiEvents, FitnessCenter, Timeline as TimelineIcon, Timer } from '@mui/icons-material'
import { Box, Card, CardContent, Chip, Container, Grid, LinearProgress, Paper, Typography } from '@mui/material'
import { calculateRunningStats, goals, races, trainingPhilosophy } from '../data/runningData'

export default function Running() {
  const dynamicRunningStats = calculateRunningStats()
  const statsWithIcons = [
    { ...dynamicRunningStats[0], icon: <DirectionsRun /> },
    { ...dynamicRunningStats[1], icon: <EmojiEvents /> },
    { ...dynamicRunningStats[2], icon: <Timer /> },
    { ...dynamicRunningStats[3], icon: <TimelineIcon /> }
  ]

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Box textAlign="center" mb={6}>
        <Typography variant="h2" component="h1" gutterBottom>
          Running
        </Typography>
        <Typography variant="h5" color="text.secondary" mb={3}>
          Ultrarunning adventures across the Midwest
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
          Over a decade of ultrarunning has taught me that the trail doesn't care about your plans -
          it's about adapting, persevering, and finding joy in the journey, no matter how tough it gets.
        </Typography>
      </Box>

      {/* Stats Overview */}
      <Box mb={6}>
        <Typography variant="h4" component="h2" gutterBottom textAlign="center">
          Running Statistics
        </Typography>
        <Grid container spacing={3}>
          {statsWithIcons.map((stat, index) => (
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
          <EmojiEvents /> Notable Race Results
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
                  <Typography variant="body2" color="text.secondary" mb={1}>
                    {race.distance}
                  </Typography>
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

      {/* Fun Fact */}
      <Box textAlign="center" mb={3}>
        <Typography variant="body2" color="text.secondary">
          Fun fact: 5 for 5 at Minnesota Voyageur Trail Ultra 🏃‍♂️
        </Typography>
      </Box>

      <Box textAlign="center">
        <Typography variant="body1" color="text.secondary" fontStyle="italic">
          "It doesn't hurt. It just is."
        </Typography>
      </Box>
    </Container>
  )
}
