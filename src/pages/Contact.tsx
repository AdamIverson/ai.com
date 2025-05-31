// 
// EmailJS Configuration:
// - Service ID, Template ID, and Public Key are loaded from environment variables
// - Ensure your .env file contains: VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY
// - Template should include variables: {{name}}, {{email}}, {{subject}}, {{message}}
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
      // Debug: Log environment variables (remove in production)
      console.log('EmailJS Config:', {
        serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
        templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      })

      // Using environment variables for EmailJS configuration
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current!,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )

      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Container maxWidth="md" sx={{ mt: 2, mb: 2 }}>
      <Box textAlign="center" mb={3}>
        <Typography variant="h2" component="h1" gutterBottom>
          Contact
        </Typography>
        <Typography variant="h6" color="text.secondary" mb={2}>
          Let's connect and discuss opportunities
        </Typography>
      </Box>

      {/* Contact Form */}
      <Grid container spacing={3} mb={3}>
        <Grid size={{ xs: 12, md: 8 }}>
          <Card elevation={2}>
            <CardContent sx={{ p: 3 }}>
              <Box display="flex" alignItems="center" gap={1} mb={2}>
                <Email sx={{ fontSize: 24, color: 'primary.main' }} />
                <Typography variant="h6">
                  Send a Message
                </Typography>
              </Box>

              {submitStatus === 'success' && (
                <Alert severity="success" sx={{ mb: 2 }}>
                  Thank you! Your message has been sent successfully. I'll get back to you soon.
                </Alert>
              )}

              {submitStatus === 'error' && (
                <Alert severity="error" sx={{ mb: 2 }}>
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
                      rows={3}
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
                      sx={{ mt: 1 }}
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
            <Card elevation={2} sx={{ mb: 2 }}>
              <CardContent sx={{ textAlign: 'center', p: 2 }}>
                <LocationOn sx={{ fontSize: 24, color: 'primary.main', mb: 1 }} />
                <Typography variant="h6" gutterBottom>
                  Location
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 1, lineHeight: 1.4, alignContent: 'start' }}>
                  Based in the Twin Cities area but open to relocation for the right opportunity, by which I mean you either back up the money truck or let me compete for QB1.
                </Typography>
                <Typography variant="body2" color="primary" fontWeight={500}>
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
              <Typography variant="subtitle2" gutterBottom color="text.secondary" sx={{ m: 0 }}>
                Connect
              </Typography>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                gap={2}
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
                  <LinkedIn sx={{ fontSize: 64, color: '#0077B5' }} />
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
                  <GitHub sx={{ fontSize: 64, color: 'text.primary' }} />
                </Button>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>

      <Divider sx={{ my: 2 }} />

      {/* Special Message for Athletic Recruiters */}
      <Box textAlign="center" mb={2}>
        <Card elevation={3} sx={{ p: 3, backgroundColor: 'action.hover' }}>
          <Typography variant="h6" component="h3" gutterBottom color="primary">
            Athletic Recruiters & Coaches
          </Typography>
          <Typography variant="body2" sx={{ maxWidth: 600, mx: 'auto', mb: 2 }}>
            Thank you for your interest in my athletic eligibility! While I maintain my
            four years of NCAA eligibility with unwavering optimism, I am equally
            enthusiastic about discussing software engineering opportunities,
            photography collaborations, or trail running adventures.
          </Typography>
          <Typography variant="caption" color="text.secondary" fontStyle="italic">
            All inquiries welcome - from Division I coaches to startup CTOs
          </Typography>
        </Card>
      </Box>
    </Container>
  )
}
