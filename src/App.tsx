import { Add, GitHub, Language, Rocket } from '@mui/icons-material'
import {
  AppBar,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  createTheme,
  CssBaseline,
  Grid,
  IconButton,
  Paper,
  ThemeProvider,
  Toolbar,
  Typography
} from '@mui/material'
import { useState } from 'react'

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
  const [count, setCount] = useState(0)

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static" elevation={0}>
        <Toolbar>
          <Rocket sx={{ mr: 2 }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Vite + React + TypeScript + MUI
          </Typography>
          <IconButton color="inherit" href="https://github.com" target="_blank">
            <GitHub />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Box textAlign="center" mb={6}>
          <Typography variant="h2" component="h1" gutterBottom>
            Welcome to Your App
          </Typography>
          <Typography variant="h6" color="text.secondary" paragraph>
            Built with Vite, React, TypeScript, and Material-UI
          </Typography>
        </Box>

        <Grid container spacing={4} justifyContent="center">
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Card elevation={3} sx={{ height: '100%' }}>
              <CardContent sx={{ textAlign: 'center', p: 3 }}>
                <Language color="primary" sx={{ fontSize: 48, mb: 2 }} />
                <Typography variant="h5" component="h2" gutterBottom>
                  TypeScript
                </Typography>
                <Typography color="text.secondary" paragraph>
                  Enjoy the benefits of static typing and enhanced developer experience.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Card elevation={3} sx={{ height: '100%' }}>
              <CardContent sx={{ textAlign: 'center', p: 3 }}>
                <Rocket color="primary" sx={{ fontSize: 48, mb: 2 }} />
                <Typography variant="h5" component="h2" gutterBottom>
                  Fast Development
                </Typography>
                <Typography color="text.secondary" paragraph>
                  Lightning-fast hot module replacement with Vite's dev server.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Card elevation={3} sx={{ height: '100%' }}>
              <CardContent sx={{ textAlign: 'center', p: 3 }}>
                <Add color="primary" sx={{ fontSize: 48, mb: 2 }} />
                <Typography variant="h5" component="h2" gutterBottom>
                  Material-UI
                </Typography>
                <Typography color="text.secondary" paragraph>
                  Beautiful, accessible React components following Material Design.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Paper sx={{ p: 4, mt: 6, textAlign: 'center' }}>
          <Typography variant="h4" gutterBottom>
            Interactive Counter
          </Typography>
          <Typography variant="h2" color="primary" sx={{ my: 3 }}>
            {count}
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              variant="contained"
              size="large"
              onClick={() => setCount((count) => count + 1)}
              startIcon={<Add />}
            >
              Increment
            </Button>
            <Button
              variant="outlined"
              size="large"
              onClick={() => setCount(0)}
            >
              Reset
            </Button>
          </Box>
        </Paper>

        <Box textAlign="center" mt={6}>
          <Typography color="text.secondary" variant="body1">
            Ready for deployment on Netlify 🚀
          </Typography>
        </Box>
      </Container>
    </ThemeProvider>
  )
}

export default App
