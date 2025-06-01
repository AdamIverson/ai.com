import { Download, LocationOn, School, Work } from '@mui/icons-material'
import { Box, Button, Card, CardContent, Chip, Container, Grid, Typography } from '@mui/material'
import { additionalExperience, education, experience, projects, skills } from '../data/resumeData'

export default function Resume() {

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }} component="article" aria-labelledby="resume-title">
      <Box textAlign="center" mb={4}>
        <Typography variant="h2" component="h1" id="resume-title" gutterBottom>
          Resume
        </Typography>
        <Typography variant="h5" color="text.secondary" mb={3}>
          Adam Iverson • Software Developer & Photographer
        </Typography>
        <Typography variant="body1" color="text.secondary" mb={3} sx={{ fontStyle: 'italic' }}>
          "I very quietly make everyone around me better."
        </Typography>
        <Button
          variant="contained"
          startIcon={<Download />}
          size="large"
          sx={{ mb: 2 }}
          href="/resume.pdf"
          download
          aria-label="Download Adam Iverson's resume as PDF"
        >
          Download Resume
        </Button>
      </Box>

      {/* Skills Section */}
      <Box mb={6} component="section" aria-labelledby="skills-heading">
        <Typography variant="h4" component="h2" id="skills-heading" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Work aria-hidden="true" /> Technical Skills
        </Typography>
        <Grid container spacing={3}>
          {Object.entries(skills).map(([category, skillList]) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={category}>
              <Card elevation={2}>
                <CardContent>
                  <Typography variant="h6" gutterBottom color="primary">
                    {category}
                  </Typography>
                  <Box>
                    {skillList.map((skill) => (
                      <Chip
                        key={skill}
                        label={skill}
                        size="small"
                        sx={{ mr: 0.5, mb: 0.5 }}
                        variant="outlined"
                      />
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Experience Section */}
      <Box mb={6}>
        <Typography variant="h4" component="h2" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Work /> Professional Experience
        </Typography>
        <Grid container spacing={3}>
          {experience.map((job, index) => (
            <Grid size={{ xs: 12 }} key={index}>
              <Card elevation={2}>
                <CardContent>
                  <Box display="flex" justifyContent="space-between" alignItems="flex-start" mb={2}>
                    <Box>
                      <Typography variant="h5" component="h3">
                        {job.title}
                      </Typography>
                      <Typography variant="h6" color="primary">
                        {job.company}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        <LocationOn fontSize="small" /> {job.location}
                      </Typography>
                    </Box>
                    <Chip label={job.period} variant="outlined" />
                  </Box>
                  <Box component="ul" sx={{ pl: 2 }}>
                    {job.responsibilities.map((responsibility, idx) => (
                      <Typography component="li" variant="body2" key={idx} sx={{ mb: 0.5 }}>
                        {responsibility}
                      </Typography>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Other Professional Experience */}
      <Box mb={6}>
        <Typography variant="h4" component="h2" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Work /> Additional Experience
        </Typography>
        <Grid container spacing={3}>
          {additionalExperience.map((job, index) => (
            <Grid size={{ xs: 12, md: 6 }} key={index}>
              <Card elevation={2}>
                <CardContent>
                  <Typography variant="h6" component="h3" gutterBottom>
                    {job.title}
                  </Typography>
                  <Typography variant="subtitle2" color="primary" gutterBottom>
                    {job.company}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {job.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Notable Projects */}
      <Box mb={6}>
        <Typography variant="h4" component="h2" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Work /> Notable Projects
        </Typography>
        <Grid container spacing={3}>
          {projects.map((project, index) => (
            <Grid size={{ xs: 12, md: 6 }} key={index}>
              <Card elevation={2}>
                <CardContent>
                  <Typography variant="h5" component="h3" gutterBottom>
                    {project.title}
                  </Typography>
                  <Typography variant="subtitle2" color="primary" gutterBottom>
                    {project.subtitle}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" mb={2}>
                    {project.description}
                  </Typography>
                  {project.liveDemo && (
                    <Typography variant="body2" color="text.secondary" mb={2}>
                      <strong>Live Demo:</strong> {project.liveDemo}
                    </Typography>
                  )}
                  <Box>
                    {project.technologies.map((tech) => (
                      <Chip key={tech} label={tech} size="small" sx={{ mr: 0.5, mb: 0.5 }} variant="outlined" />
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Education Section */}
      <Box mb={6}>
        <Typography variant="h4" component="h2" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <School /> Education
        </Typography>
        <Grid container spacing={3}>
          {education.map((edu, index) => (
            <Grid size={{ xs: 12, md: 6 }} key={index}>
              <Card elevation={2}>
                <CardContent>
                  <Typography variant="h5" component="h3" gutterBottom>
                    {edu.degree}
                  </Typography>
                  <Typography variant="h6" color="primary" gutterBottom>
                    {edu.school}
                  </Typography>
                  <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Typography variant="body2" color="text.secondary">
                      {edu.details}
                    </Typography>
                    <Chip label={edu.year} variant="outlined" />
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box textAlign="center">
        <Typography variant="body2" color="text.secondary">
          Last updated: May 2025 • Minneapolis, Minnesota
        </Typography>
      </Box>
    </Container>
  )
}
