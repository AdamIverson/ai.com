import { Download, LocationOn, School, Work } from '@mui/icons-material'
import { Box, Button, Card, CardContent, Chip, Container, Grid, Typography } from '@mui/material'

export default function Resume() {
  const education = [
    {
      degree: "Full-Stack Software Engineering Certification",
      school: "Prime Digital Academy",
      year: "2022",
      details: "Full-stack web development with JavaScript, React, Node.js, and PostgreSQL"
    },
    {
      degree: "Substance Abuse Counseling Certification",
      school: "Minneapolis Community & Technical College",
      year: "2017",
      details: "Professional certification in substance abuse counseling"
    },
    {
      degree: "Bachelor of Arts: Religion",
      school: "Augustana University",
      year: "2002",
      details: "Liberal arts education with focus on religious studies"
    }
  ]

  const experience = [
    {
      title: "Software Engineer",
      company: "Datasite",
      location: "Minneapolis, MN (Hybrid)",
      period: "December 2023 - Present",
      responsibilities: [
        "Developing and maintaining enterprise-level software solutions using React.js",
        "Contributing to full-stack development projects in a collaborative team environment",
        "Building scalable applications for global data room and dealmaking platform",
        "Applying modern web development practices in a fast-paced fintech environment"
      ]
    },
    {
      title: "Owner/Photographer",
      company: "Adam Iverson Photography",
      location: "Twin Cities, MN",
      period: "late 1900's - Present",
      responsibilities: [
        "Built and operated full-time photography business serving individuals and corporations",
        "Self-taught Adobe Creative Suite (Lightroom, Photoshop, InDesign) for complete workflow management",
        "Published 'Don't Fall In Love With The City' - a photo/poetry book using self-taught InDesign skills",
        "Developed skills in visual storytelling and ethics of documentation",
        "Successfully transitioned from photography to software engineering career"
      ]
    },
    {
      title: "Software Engineer Internship",
      company: "Datasite",
      location: "Minneapolis, MN (Hybrid)",
      period: "July 2023 - November 2023",
      responsibilities: [
        "Gained hands-on experience with React.js and JavaScript in enterprise environment",
        "Contributed to real-world software development projects",
        "Collaborated with senior engineers on feature development and bug fixes",
        "Successfully transitioned to full-time software engineer role"
      ]
    },
    {
      title: "Data Analytics Implementation Engineer",
      company: "Softcrylic",
      location: "Minneapolis, MN (Remote)",
      period: "August 2022 - December 2022",
      responsibilities: [
        "Worked with enterprise clients to ensure accurate collection of data from websites for analytics",
        "Facilitated clients' transition from Universal Analytics to Google Analytics 4",
        "Researched and drafted training materials for future onboarding",
        "Collaborated with team to identify and execute comprehensive tagging strategies"
      ]
    }
  ]

  const skills = {
    "Frontend": ["React.js", "JavaScript", "HTML", "CSS", "Redux.js", "Material-UI"],
    "Backend": ["Node.js", "Express.js", "PostgreSQL", "SQL"],
    "Tools & Development": ["Git", "GitHub", "Data Structures", "Programming", "Front-End Development"],
    "Analytics & Data": ["Google Analytics", "Web Analytics", "Firebase", "Spreadsheets"],
    "Design & Media": ["Adobe Lightroom", "Adobe Photoshop", "Adobe InDesign"],
    "Leadership & Communication": ["Teaching", "Active Listening", "Leadership", "Communication", "Team Coordination"]
  }

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Box textAlign="center" mb={4}>
        <Typography variant="h2" component="h1" gutterBottom>
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
        >
          Download Resume
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

      {/* Other Professional Experience */}
      <Box mb={6}>
        <Typography variant="h4" component="h2" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Work /> Additional Experience
        </Typography>
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Card elevation={2}>
              <CardContent>
                <Typography variant="h6" component="h3" gutterBottom>
                  Improv Teacher
                </Typography>
                <Typography variant="subtitle2" color="primary" gutterBottom>
                  HUGE Theater • 2015-2020
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Taught improv at nonprofit theater, learning to better listen to others and fail beautifully when opportunities arise.
                  Developed skills in teaching, active listening, and leadership.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Card elevation={2}>
              <CardContent>
                <Typography variant="h6" component="h3" gutterBottom>
                  Substance Abuse Counselor
                </Typography>
                <Typography variant="subtitle2" color="primary" gutterBottom>
                  Southeast Homes • 2017
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Worked at residential treatment center helping adult men from East Africa maintain sobriety.
                  Developed crisis intervention and group therapy skills.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Card elevation={2}>
              <CardContent>
                <Typography variant="h6" component="h3" gutterBottom>
                  Product Ideation Contractor
                </Typography>
                <Typography variant="subtitle2" color="primary" gutterBottom>
                  Idea Greenhouse Minnesota • 2014-2018
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Generated creative ideas for large companies' products and marketing strategies.
                  Honed lateral thinking and creative problem-solving abilities.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Card elevation={2}>
              <CardContent>
                <Typography variant="h6" component="h3" gutterBottom>
                  Fitness Coach
                </Typography>
                <Typography variant="subtitle2" color="primary" gutterBottom>
                  Solcana Fitness & Wellness • 2017-2018
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Coached functional fitness with emphasis on endurance at inclusive,
                  woman-owned gym for athletes of all abilities.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* Notable Projects */}
      <Box mb={6}>
        <Typography variant="h4" component="h2" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Work /> Notable Projects
        </Typography>
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Card elevation={2}>
              <CardContent>
                <Typography variant="h5" component="h3" gutterBottom>
                  Hatclub - Hat Appreciation App
                </Typography>
                <Typography variant="subtitle2" color="primary" gutterBottom>
                  Solo Project • Prime Digital Academy
                </Typography>
                <Typography variant="body2" color="text.secondary" mb={2}>
                  Full CRUD application allowing users to upload photos of hats with detailed descriptions,
                  edit and delete uploads, and view community submissions. Special emphasis on accessibility
                  and assistive technologies.
                </Typography>
                <Box>
                  {["PostgreSQL", "Express", "React", "Node.js", "Material-UI", "a11y"].map((tech) => (
                    <Chip key={tech} label={tech} size="small" sx={{ mr: 0.5, mb: 0.5 }} variant="outlined" />
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Card elevation={2}>
              <CardContent>
                <Typography variant="h5" component="h3" gutterBottom>
                  Pet-Jet
                </Typography>
                <Typography variant="subtitle2" color="primary" gutterBottom>
                  Group Project • Prime Digital Academy
                </Typography>
                <Typography variant="body2" color="text.secondary" mb={2}>
                  Full CRUD application for coordinating trans-Atlantic private jet travel with pets.
                  Deployed live application with administrative features and data visualization.
                </Typography>
                <Typography variant="body2" color="text.secondary" mb={2}>
                  <strong>Live Demo:</strong> pet-jet.herokuapp.com
                </Typography>
                <Box>
                  {["PostgreSQL", "Express", "React", "Node.js", "Material-UI", "Chart.js"].map((tech) => (
                    <Chip key={tech} label={tech} size="small" sx={{ mr: 0.5, mb: 0.5 }} variant="outlined" />
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Card elevation={2}>
              <CardContent>
                <Typography variant="h5" component="h3" gutterBottom>
                  "Don't Fall In Love With The City"
                </Typography>
                <Typography variant="subtitle2" color="primary" gutterBottom>
                  Published Photo/Poetry Book
                </Typography>
                <Typography variant="body2" color="text.secondary" mb={2}>
                  Self-taught Adobe InDesign to create and publish a photo/poetry book combining
                  visual storytelling with written narrative.
                </Typography>
                <Box>
                  {["Photography", "InDesign", "Publishing", "Creative Writing"].map((tech) => (
                    <Chip key={tech} label={tech} size="small" sx={{ mr: 0.5, mb: 0.5 }} variant="outlined" />
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>
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
