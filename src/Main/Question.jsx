import React, { useEffect, useState } from 'react'
import './App.css'
import {
  Box,
  Button,
  Card,
  Checkbox,
  TextField,
  Typography,
  Modal,
} from '@mui/material'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

function Question() {
  const navigate = useNavigate();
  const { id } = useParams()
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isChecked, setIsChecked] = useState(false)
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }
  const getQuestionData = () => {
    axios({
      method: 'get',
      url: `https://asia-south1-cupid-413817.cloudfunctions.net/cupid/api/cupid/question/${id}`,
    })
      .then((response) => {
        setQuestion(response.data.data.question)
      })
      .catch((error) => {
        console.error('Error making POST request:', error)
      })
  }

  const handlePostButtonClick = () => {
    console.log(isChecked)
    if (answer.trim() === '' || !isChecked) {
      alert('Please enter your question and agree to the terms and conditions.')
      return
    }

    axios({
      method: 'post',
      url: `https://asia-south1-cupid-413817.cloudfunctions.net/cupid/api/cupid/answer/${id}`,
      data: {
        answer: answer,
      },
    })
      .then((response) => {
        setIsModalOpen(true)
      })
      .catch((error) => {
        console.error('Error making POST request:', error)
      })
  }
  const handleView = () => {
    navigate('/Q&A/'+id);
  }

  useEffect(() => {
    getQuestionData()
  }, [])

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
                {question}
              </Typography>
              <TextField
                id="outlined-multiline-flexible"
                label="enter your answer here...."
                onChange={(e) => setAnswer(e.target.value)}
                multiline
                maxRows={4}
                fullWidth
              />
              <Box sx={{ display: 'inline-flex', alignItems: 'center' }}>
                <Checkbox
                  size="small"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                />
                <Typography sx={{ fontSize: 13 }}>
                  By clicking agree to <Link to={'/Question'}>T&C</Link>
                </Typography>
              </Box>
              <Button
                variant="contained"
                sx={{ background: '#EB455F' }}
                onClick={(e) => {
                  handlePostButtonClick(e)
                }}
              >
                Submit
              </Button>
              OR
              <Button
                variant="contained"
                sx={{ background: '#EB455F' }}
                onClick={(e) => {
                  handleView(e)
                }}
              >
                View all answers
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
        <Modal
          open={isModalOpen}
          onClose={handleCloseModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              bgcolor: 'background.paper',
              boxShadow: 24,
              borderRadius: '10px',
              p: 4,
              maxWidth: 400,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Typography variant="h6" align="center">
              Question Submitted
            </Typography>

            <Typography variant="body1" align="center" sx={{ mt: 2 }}>
              {question}
            </Typography>

            <Typography variant="body1" align="center" sx={{ mt: 2, pt: 1 }}>
              {answer}
            </Typography>

            <Box
              sx={{ mt: 2, display: 'flex', justifyContent: 'space-between' }}
            >
              <Button onClick={handleCloseModal} sx={{ mr: 2 }}>
                Close
              </Button>
            </Box>
          </Box>
        </Modal>
      </header>
    </div>
  )
}

export default Question
