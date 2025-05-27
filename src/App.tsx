import {
  AppBar,
  Box,
  Card,
  CardContent,
  Container,
  createTheme,
  CssBaseline,
  Grid,
  Paper,
  ThemeProvider,
  Toolbar
} from '@mui/material'

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
    background: {
      default: '#f5f5f5',
    },
  },
  typography: {
    h2: {
      fontWeight: 600,
    },
    h4: {
      fontWeight: 500,
    },
  },
})

function App() {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static" elevation={0}>
        <Toolbar>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Box textAlign="center" mb={6}>
        </Box>

        <Grid container spacing={4} justifyContent="center">
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Card elevation={3} sx={{ height: '100%' }}>
              <CardContent sx={{ textAlign: 'center', p: 3 }}>
              </CardContent>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Card elevation={3} sx={{ height: '100%' }}>
              <CardContent sx={{ textAlign: 'center', p: 3 }}>
              </CardContent>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Card elevation={3} sx={{ height: '100%' }}>
              <CardContent sx={{ textAlign: 'center', p: 3 }}>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Paper sx={{ p: 4, mt: 6, textAlign: 'center' }}>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
          </Box>
        </Paper>

        <Box textAlign="center" mt={6}>
        </Box>
      </Container>
    </ThemeProvider>
  )
}

export default App
