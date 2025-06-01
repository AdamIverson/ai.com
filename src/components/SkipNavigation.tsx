import { Box, Link } from '@mui/material'

export default function SkipNavigation() {
  return (
    <Box
      sx={{
        position: 'absolute',
        left: '-10000px',
        top: 'auto',
        width: '1px',
        height: '1px',
        overflow: 'hidden',
        '&:focus': {
          position: 'static',
          width: 'auto',
          height: 'auto',
          overflow: 'visible',
          zIndex: 9999,
          backgroundColor: 'primary.main',
          color: 'primary.contrastText',
          padding: 2,
          textDecoration: 'none',
          fontWeight: 'bold',
          border: '2px solid',
          borderColor: 'primary.dark'
        }
      }}
    >
      <Link
        href="#main-content"
        sx={{
          color: 'inherit',
          textDecoration: 'none',
          '&:focus': {
            outline: 'none'
          }
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            e.preventDefault()
            const mainContent = document.getElementById('main-content')
            if (mainContent) {
              mainContent.focus()
              mainContent.scrollIntoView()
            }
          }
        }}
      >
        Skip to main content
      </Link>
    </Box>
  )
}
