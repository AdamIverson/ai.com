import { Download, LocationOn, School, Work } from '@mui/icons-material'
import { Box, Button, Card, CardContent, Chip, Container, Grid, Typography } from '@mui/material'

export default function Resume() {
  const education = [
    {
      degree: "Bachelor's in Computer Science",
      school: "University of Technology",
      year: "2020",
      details: "Focus on Software Engineering and Web Development"
    }
  ]

  const experience = [
    {
      title: "Senior Software Developer",
      company: "Tech Company",
      location: "Remote",
      period: "2022 - Present",
      responsibilities: [
        "Lead development of React-based web applications",
        "Architect scalable backend systems using Node.js and AWS",
        "Mentor junior developers and conduct code reviews",
        "Implement CI/CD pipelines and automated testing"
      ]
    },
    {
      title: "Full Stack Developer",
      company: "Digital Agency",
      location: "San Francisco, CA",
      period: "2020 - 2022",
      responsibilities: [
        "Built responsive web applications for diverse clients",
        "Developed RESTful APIs and database schemas",
        "Collaborated with designers to implement pixel-perfect UIs",
        "Optimized application performance and user experience"
      ]
    }
  ]

  const skills = {
    "Frontend": ["React", "TypeScript", "JavaScript", "HTML/CSS", "Material-UI", "Redux"],
    "Backend": ["Node.js", "Python", "Express", "FastAPI", "REST APIs", "GraphQL"],
    "Database": ["PostgreSQL", "MongoDB", "Redis", "SQL"],
    "Cloud & DevOps": ["AWS", "Docker", "Kubernetes", "CI/CD", "Git", "Linux"],
    "Tools": ["VS Code", "Figma", "Jira", "Slack", "Postman", "Jest"]
  }

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Box textAlign="center" mb={4}>
        <Typography variant="h2" component="h1" gutterBottom>
          📄 Resume
        </Typography>
        <Typography variant="h5" color="text.secondary" mb={3}>
          Adam Iverson • Software Developer
        </Typography>
        <Button
          variant="contained"
          startIcon={<Download />}
          size="large"
          sx={{ mb: 2 }}
        >
          Download PDF Resume
        </Button>
      </Box>

      {/* Skills Section */}
      <Box mb={6}>
        <Typography variant="h4" component="h2" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Work /> Technical Skills
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
          Last updated: May 2025
        </Typography>
      </Box>
    </Container>
  )
}
