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
    <AppBar position="static" elevation={0}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            Adam Iverson
          </Link>
        </Typography>

        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
          {navItems.map((item) => (
            <Button
              key={item.path}
              component={Link}
              to={item.path}
              color="inherit"
              variant={location.pathname === item.path ? 'outlined' : 'text'}
              sx={{
                borderColor: location.pathname === item.path ? 'rgba(255,255,255,0.5)' : 'transparent',
                minWidth: 'auto'
              }}
            >
              {item.label}
            </Button>
          ))}
        </Box>

        <IconButton
          sx={{ ml: 1 }}
          onClick={toggleColorMode}
          color="inherit"
          aria-label="toggle theme"
        >
          {mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}
