import { Code, GitHub, OpenInNew, Terminal, Web } from '@mui/icons-material'
import { Box, Button, Card, CardContent, Chip, Container, Grid, Typography } from '@mui/material'

export default function Development() {
  const skills = [
    'TypeScript', 'React', 'Node.js', 'Python', 'SQL', 'AWS', 'Docker', 'Git',
    'Material-UI', 'Express', 'PostgreSQL', 'MongoDB', 'Jest', 'Cypress'
  ]

  const projects = [
    {
      name: 'AI.com Portfolio',
      description: 'This very website! Built with React, TypeScript, Material-UI, and deployed on Netlify.',
      tech: ['React', 'TypeScript', 'Material-UI', 'Netlify'],
      github: 'https://github.com/AdamIverson/ai.com',
      live: 'https://www.adamiverson.com'
    },
    {
      name: 'Photography Portfolio',
      description: 'Professional photography portfolio with dynamic galleries and client management.',
      tech: ['React', 'Node.js', 'AWS S3', 'Stripe'],
      github: null,
      live: 'https://adamiversonphotography.com'
    }
  ]

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Box textAlign="center" mb={6}>
        <Typography variant="h2" component="h1" gutterBottom>
          💻 Software Development
        </Typography>
        <Typography variant="h5" color="text.secondary" mb={3}>
          Building elegant solutions with modern technologies
        </Typography>
      </Box>

      {/* Skills Section */}
      <Box mb={6}>
        <Typography variant="h4" component="h2" gutterBottom textAlign="center">
          Technologies & Skills
        </Typography>
        <Box display="flex" flexWrap="wrap" justifyContent="center" gap={1} mt={3}>
          {skills.map((skill) => (
            <Chip key={skill} label={skill} variant="outlined" />
          ))}
        </Box>
      </Box>

      {/* Projects Section */}
      <Box mb={6}>
        <Typography variant="h4" component="h2" gutterBottom textAlign="center">
          Featured Projects
        </Typography>
        <Grid container spacing={4} mt={2}>
          {projects.map((project, index) => (
            <Grid size={{ xs: 12, md: 6 }} key={index}>
              <Card elevation={3} sx={{ height: '100%' }}>
                <CardContent sx={{ p: 3 }}>
                  <Typography variant="h5" component="h3" gutterBottom>
                    {project.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" mb={2}>
                    {project.description}
                  </Typography>
                  <Box mb={2}>
                    {project.tech.map((tech) => (
                      <Chip key={tech} label={tech} size="small" sx={{ mr: 0.5, mb: 0.5 }} />
                    ))}
                  </Box>
                  <Box>
                    {project.github && (
                      <Button
                        startIcon={<GitHub />}
                        href={project.github}
                        target="_blank"
                        size="small"
                        sx={{ mr: 1 }}
                      >
                        Code
                      </Button>
                    )}
                    {project.live && (
                      <Button
                        startIcon={<OpenInNew />}
                        href={project.live}
                        target="_blank"
                        size="small"
                        variant="outlined"
                      >
                        Live Site
                      </Button>
                    )}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Experience Highlights */}
      <Box mb={6}>
        <Typography variant="h4" component="h2" gutterBottom textAlign="center">
          Experience Highlights
        </Typography>
        <Grid container spacing={4} mt={2}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Card elevation={2}>
              <CardContent sx={{ textAlign: 'center', p: 3 }}>
                <Web sx={{ fontSize: 40, mb: 2, color: 'primary.main' }} />
                <Typography variant="h6" gutterBottom>
                  Full-Stack Development
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  End-to-end application development from database design to user interface
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Card elevation={2}>
              <CardContent sx={{ textAlign: 'center', p: 3 }}>
                <Code sx={{ fontSize: 40, mb: 2, color: 'primary.main' }} />
                <Typography variant="h6" gutterBottom>
                  Open Source
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Contributing to open source projects and building tools for the community
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Card elevation={2}>
              <CardContent sx={{ textAlign: 'center', p: 3 }}>
                <Terminal sx={{ fontSize: 40, mb: 2, color: 'primary.main' }} />
                <Typography variant="h6" gutterBottom>
                  DevOps & Automation
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  CI/CD pipelines, containerization, and cloud infrastructure management
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      <Box textAlign="center">
        <Button
          variant="contained"
          startIcon={<GitHub />}
          href="https://github.com/AdamIverson"
          target="_blank"
          size="large"
        >
          View All Projects on GitHub
        </Button>
      </Box>
    </Container>
  )
}
