import {
  createTheme,
  CssBaseline,
  ThemeProvider,
} from '@mui/material'
import { useEffect, useMemo, useState } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import SkipNavigation from './components/SkipNavigation'
import CollegeEligibility from './pages/CollegeEligibility'
import Contact from './pages/Contact'
import Development from './pages/Development'
import Home from './pages/Home'
import Improv from './pages/Improv'
import Photography from './pages/Photography'
import Resume from './pages/Resume'
import Running from './pages/Running'

function App() {
  // Theme mode state with localStorage persistence
  const [mode, setMode] = useState<'light' | 'dark'>(() => {
    // Check localStorage first
    const savedMode = localStorage.getItem('themeMode') as 'light' | 'dark' | null
    if (savedMode) return savedMode

    // Fall back to system preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })

  // Save theme preference to localStorage
  useEffect(() => {
    localStorage.setItem('themeMode', mode)
  }, [mode])

  // Create theme based on mode
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === 'light'
            ? {
              // Light mode colors
              primary: {
                main: '#1976d2',
              },
              secondary: {
                main: '#dc004e',
              },
              background: {
                default: '#f5f5f5',
                paper: '#ffffff',
              },
            }
            : {
              // Dark mode colors
              primary: {
                main: '#90caf9',
              },
              secondary: {
                main: '#f48fb1',
              },
              background: {
                default: '#121212',
                paper: '#1e1e1e',
              },
            }),
        },
        typography: {
          h2: {
            fontWeight: 600,
          },
          h4: {
            fontWeight: 500,
          },
        },
      }),
    [mode]
  )

  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SkipNavigation />
      <Router>
        <Navbar mode={mode} toggleColorMode={toggleColorMode} />
        <main id="main-content" tabIndex={-1}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/development" element={<Development />} />
            <Route path="/photography" element={<Photography />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/improv" element={<Improv />} />
            <Route path="/running" element={<Running />} />
            <Route path="/college-eligibility" element={<CollegeEligibility />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </Router>
    </ThemeProvider>
  )
}

export default App
