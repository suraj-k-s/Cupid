import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import { useNavigate } from 'react-router-dom'
import CircularProgress from '@mui/material/CircularProgress'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

const FullPageLoader = () => {
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()
  const auth = getAuth()

  useEffect(() => {
    
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setLoading(false) 
      if (user!=null) {
        const emailDomain = user.email.split('@')[1]
        if (emailDomain !== 'webskie.com') {
          navigate('/Login')
        }
      } else {
        navigate('/Login')
      }
    })

    return () => unsubscribe() 
  }, [auth, navigate])

  if (loading) {
    return (
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backdropFilter: 'blur(12px)', // Increase the pixel value for a stronger blur
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <CircularProgress />
      </Box>
    )
  }

  return null // Render nothing once loading is complete and authentication state is checked
}

export default FullPageLoader
