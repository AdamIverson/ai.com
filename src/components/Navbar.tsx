import { Brightness4, Brightness7 } from '@mui/icons-material'
import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import { Link, useLocation } from 'react-router-dom'

interface NavbarProps {
  mode: 'light' | 'dark'
  toggleColorMode: () => void
}

export default function Navbar({ mode, toggleColorMode }: NavbarProps) {
  const location = useLocation()

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Development', path: '/development' },
    { label: 'Photography', path: '/photography' },
    { label: 'Resume', path: '/resume' },
    { label: 'Improv', path: '/improv' },
    { label: 'Running', path: '/running' },
    { label: 'College Eligibility', path: '/college-eligibility' },
    { label: 'Contact', path: '/contact' }
  ]

  return (
    <AppBar position="static" elevation={0} component="nav" role="navigation" aria-label="Main navigation">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link
            to="/"
            style={{ textDecoration: 'none', color: 'inherit' }}
            aria-label="Adam Iverson - Return to home page"
          >
            Adam Iverson
          </Link>
        </Typography>

        <Box
          sx={{
            display: { xs: 'none', md: 'flex' },
            gap: 1,
            listStyle: 'none',
            margin: 0,
            padding: 0
          }}
          component="ul"
          role="menubar"
          aria-label="Main menu"
        >
          {navItems.map((item) => (
            <Box component="li" key={item.path} role="none" sx={{ listStyle: 'none' }}>
              <Button
                component={Link}
                to={item.path}
                color="inherit"
                variant={location.pathname === item.path ? 'outlined' : 'text'}
                sx={{
                  borderColor: location.pathname === item.path ? 'rgba(255,255,255,0.5)' : 'transparent',
                  minWidth: 'auto'
                }}
                role="menuitem"
                aria-current={location.pathname === item.path ? 'page' : undefined}
              >
                {item.label}
              </Button>
            </Box>
          ))}
        </Box>

        <IconButton
          sx={{ ml: 1 }}
          onClick={toggleColorMode}
          color="inherit"
          aria-label={`Switch to ${mode === 'dark' ? 'light' : 'dark'} theme`}
          title={`Switch to ${mode === 'dark' ? 'light' : 'dark'} theme`}
        >
          {mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}
