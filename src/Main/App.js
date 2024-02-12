import './App.css'
import {
  Box,
  Button,
  Card,
  Checkbox,
  TextField,
  Typography,
} from '@mui/material'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import { Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: '#dbe8ec',
            height: '100vh',
          }}
        >
          <Card
            sx={{
              width: '90vw',
              '@media screen and (min-width: 600px)': {
                width: '80vw',
              },
              '@media screen and (min-width: 960px)': {
                width: '60vw',
              },
              '@media screen and (min-width: 1280px)': {
                width: '30vw',
              },
              '@media screen and (min-width: 1920px)': {
                width: '30vw',
              },
              height: 200,
              borderEndEndRadius: 50,
              borderEndStartRadius: 50,
              backgroundColor: '#EB455F',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center', 
              color: 'white',
              fontFamily: 'Arial, sans-serif',
            }}
          >
            <Typography variant="h3" align="center">
              Cupid
            </Typography>
          </Card>

          <Card
            sx={{
              width: '80vw',
              '@media screen and (min-width: 600px)': {
                width: '70vw',
              },
              '@media screen and (min-width: 960px)': {
                width: '50vw',
              },
              '@media screen and (min-width: 1280px)': {
                width: '25vw',
              },
              '@media screen and (min-width: 1920px)': {
                width: '25vw',
              },
              height: 500,
              borderRadius: 10,
              marginTop: '-30px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                m: 5,
              }}
            >
              <Typography variant="h6" align="left">
                Create a question and get anonymous answers
              </Typography>
              <TextField
                id="outlined-multiline-flexible"
                label="your text here..."
                multiline
                maxRows={4}
                fullWidth
              />
              <Box sx={{ display: 'inline-flex', alignItems: 'center' }}>
                <Checkbox size="small" />
                <Typography sx={{ fontSize: 13 }}>
                  By clicking agree to <Link to={'/TC'}>T&C</Link>
                </Typography>
              </Box>
              <Button variant="contained" sx={{ background: '#EB455F' }}>
                Post
              </Button>
            </Box>
            <Box
              sx={{ display: 'flex', m: 5, justifyContent: 'space-between' }}
            >
              <Box>
                <a
                  href="https://wa.me/918921399389"
                  rel="noreferrer"
                  target="_blank"
                >
                  <WhatsAppIcon sx={{ color: 'green' }} />
                </a>
                <a
                  href="https://wa.me/918921399389"
                  rel="noreferrer"
                  target="_blank"
                >
                  <FacebookIcon sx={{ color: 'blue' }} />
                </a>
                <a
                  href="https://wa.me/918921399389"
                  rel="noreferrer"
                  target="_blank"
                >
                  <InstagramIcon sx={{ color: '#d62976' }} />
                </a>
              </Box>
              <Box>
                <Typography sx={{ fontSize: 10 }}>
                  <a
                    href="https://www.webskie.com"
                    rel="noreferrer"
                    target="_blank"
                    style={{
                      textDecoration: 'none',
                      bottom: '-8px',
                      position: 'relative',
                    }}
                  >
                    Powered by Webskie
                  </a>
                </Typography>
              </Box>
            </Box>
          </Card>
        </Box>
      </header>
    </div>
  )
}

export default App
