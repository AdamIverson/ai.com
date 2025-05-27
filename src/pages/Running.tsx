import { DirectionsRun, EmojiEvents, FitnessCenter, Timeline as TimelineIcon, Timer } from '@mui/icons-material'
import { Box, Card, CardContent, Chip, Container, Grid, LinearProgress, Paper, Typography } from '@mui/material'

export default function Running() {
  const stats = [
    { label: "Total Races", value: "17", icon: <DirectionsRun /> },
    { label: "100K Completions", value: "2", icon: <EmojiEvents /> },
    { label: "50-Mile Finishes", value: "8", icon: <Timer /> },
    { label: "Years Ultrarunning", value: "12+", icon: <TimelineIcon /> }
  ]

  const races = [
    {
      name: "Superior Fall Trail Race",
      distance: "Marathon",
      year: "2022",
      time: "9:31:32",
      placement: "260th Overall",
      note: "Most recent ultra - challenging but rewarding"
    },
    {
      name: "Minnesota Voyageur Trail Ultra",
      distance: "50 Miler",
      year: "2019",
      time: "13:57:26",
      placement: "237th Overall",
      note: "Classic Minnesota trail ultra"
    },
    {
      name: "Wild Duluth Races",
      distance: "100K",
      year: "2014",
      time: "19:37:00",
      placement: "38th Overall",
      note: "Personal best 100K performance"
    },
    {
      name: "Black Hills 100",
      distance: "50 Miler",
      year: "2013",
      time: "14:32:19",
      placement: "25th Overall",
      note: "Strong performance in beautiful Black Hills"
    },
    {
      name: "Minnesota Voyageur Trail Ultra",
      distance: "50 Miler",
      year: "2015",
      time: "12:44:50",
      placement: "159th Overall",
      note: "Personal best 50-mile time"
    }
  ]

  const goals = [
    {
      goal: "Return to Racing",
      progress: 25,
      status: "Base Building",
      target: "2025"
    },
  ]

  const trainingPhilosophy = [
    "snacks",
    "if it's not fun or i get sleepy i quit",
    "if you can figure out how to eat and drink, you can keep going",
    "trail running is an awful lot like scrolling",
    "while i can",
    "ice on the neck"
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

      <Box textAlign="center">
        <Typography variant="body1" color="text.secondary" fontStyle="italic">
            "It doesn't hurt. It just is."
        </Typography>
      </Box>
    </Container>
  )
}
