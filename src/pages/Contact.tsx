// 
// EmailJS Setup Instructions:
// 1. Create account at https://www.emailjs.com/
// 2. Create email service (Gmail, Outlook, etc.)
// 3. Create email template with variables: {{name}}, {{email}}, {{subject}}, {{message}}
// 4. Get your Service ID, Template ID, and Public Key
// 5. Replace the placeholder values in the handleSubmit function below
// 
import emailjs from '@emailjs/browser'
import { Email, GitHub, LinkedIn, LocationOn, Send } from '@mui/icons-material'
import { Alert, Box, Button, Card, CardContent, Container, Divider, Grid, TextField, Typography } from '@mui/material'
import { useRef, useState } from 'react'

export default function Contact() {
  const form = useRef<HTMLFormElement>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // TODO: Replace these with your actual EmailJS credentials from https://www.emailjs.com/
      // After setting up your EmailJS account, service, and template:
      const result = await emailjs.sendForm(
        'YOUR_SERVICE_ID',     // Replace with your EmailJS service ID (e.g., 'service_abc123')
        'YOUR_TEMPLATE_ID',    // Replace with your EmailJS template ID (e.g., 'template_def456')
        form.current!,
        'YOUR_PUBLIC_KEY'      // Replace with your EmailJS public key (e.g., 'user_ghi789')
      )

      console.log('Email sent successfully:', result.text)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      console.error('Email sending failed:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Box textAlign="center" mb={6}>
        <Typography variant="h2" component="h1" gutterBottom>
          Contact
        </Typography>
        <Typography variant="h5" color="text.secondary" mb={3}>
          Let's connect and discuss opportunities
        </Typography>
      </Box>

      {/* Contact Form */}
      <Grid container spacing={4} mb={6}>
        <Grid size={{ xs: 12, md: 8 }}>
          <Card elevation={2}>
            <CardContent sx={{ p: 4 }}>
              <Box display="flex" alignItems="center" gap={1} mb={3}>
                <Email sx={{ fontSize: 30, color: 'primary.main' }} />
                <Typography variant="h5">
                  Send a Message
                </Typography>
              </Box>

              {submitStatus === 'success' && (
                <Alert severity="success" sx={{ mb: 3 }}>
                  Thank you! Your message has been sent successfully. I'll get back to you soon.
                </Alert>
              )}

              {submitStatus === 'error' && (
                <Alert severity="error" sx={{ mb: 3 }}>
                  Sorry, there was an error sending your message. Please try again or contact me via LinkedIn.
                </Alert>
              )}

              <Box component="form" ref={form} onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      label="Name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      variant="outlined"
                    />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      label="Email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      variant="outlined"
                    />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <TextField
                      fullWidth
                      label="Subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      variant="outlined"
                    />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <TextField
                      fullWidth
                      label="Message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      multiline
                      rows={4}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      startIcon={<Send />}
                      disabled={isSubmitting}
                      sx={{ mt: 2 }}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            {/* Location Card */}
            <Card elevation={2} sx={{ mb: 4 }}>
              <CardContent sx={{ textAlign: 'center', p: 3 }}>
                <LocationOn sx={{ fontSize: 32, color: 'primary.main', mb: 2 }} />
                <Typography variant="h6" gutterBottom>
                  Location
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2, lineHeight: 1.5 }}>
                  Based in the Twin Cities area but open to relocation for the right opportunity
                </Typography>
                <Typography variant="subtitle1" color="primary" fontWeight={500}>
                  Minneapolis, Minnesota
                </Typography>
              </CardContent>
            </Card>

            {/* Social Links - centered below location card */}
            <Box sx={{ 
              flex: 1,
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center'
            }}>
              <Typography variant="h6" gutterBottom color="text.secondary" sx={{ m:0 }}>
                Connect
              </Typography>
              <Box 
                display="flex" 
                justifyContent="center" 
                alignItems="center"
                gap={3}
              >
                <Button
                  href="https://www.linkedin.com/in/adam-iverson/"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    minWidth: 'auto',
                    borderRadius: '50%',
                    border: '2px solid transparent',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    '&:hover': {
                      backgroundColor: 'rgba(0, 119, 181, 0.1)',
                      border: '2px solid rgba(0, 119, 181, 0.3)',
                      transform: 'scale(1.05)'
                    }
                  }}
                >
                  <LinkedIn sx={{ fontSize: 96, color: '#0077B5' }} />
                </Button>
                <Button
                  href="https://github.com/adamiverson"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    minWidth: 'auto',
                    borderRadius: '50%',
                    border: '2px solid transparent',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    '&:hover': {
                      backgroundColor: 'rgba(0, 0, 0, 0.1)',
                      border: '2px solid rgba(0, 0, 0, 0.3)',
                      transform: 'scale(1.05)'
                    }
                  }}
                >
                  <GitHub sx={{ fontSize: 96, color: 'text.primary' }} />
                </Button>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>

      <Divider sx={{ my: 4 }} />

      {/* Special Message for Athletic Recruiters */}
      <Box textAlign="center" mb={4}>
        <Card elevation={3} sx={{ p: 4, backgroundColor: 'action.hover' }}>
          <Typography variant="h5" component="h3" gutterBottom color="primary">
            Athletic Recruiters & Coaches
          </Typography>
          <Typography variant="body1" sx={{ maxWidth: 600, mx: 'auto', mb: 3 }}>
            Thank you for your interest in my athletic eligibility! While I maintain my
            four years of NCAA eligibility with unwavering optimism, I am equally
            enthusiastic about discussing software engineering opportunities,
            photography collaborations, or trail running adventures.
          </Typography>
          <Typography variant="body2" color="text.secondary" fontStyle="italic">
            All inquiries welcome - from Division I coaches to startup CTOs
          </Typography>
        </Card>
      </Box>

      <Box textAlign="center">
        <Typography variant="body2" color="text.secondary">
          Response time: Usually within 24 hours
        </Typography>
      </Box>
    </Container>
  )
}
