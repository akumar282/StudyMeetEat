import React from 'react'
import './CSS/LandingPage.css'
import { Button, Typography } from '@mui/material'

export default function LandingPage () {
  return (
    <main className='LandingPageContainer'>
      <div className='LPHeader'>
        <div className='LPHeaderTDiv'>
          <h1 className='LPHeaderTitle'>DubMeets</h1>
        </div>
        <div className='LPHeaderButtons'>
          <Button
            sx={{
              color: '#000000',
              fontSize: 'max(20px, 10px);'
            }}
          >
            Sign Up
          </Button>
          <Button
            sx={{
              color: '#000000',
              fontSize: 'max(20px, 10px);'
            }}
          >
            Login
          </Button>
        </div>
      </div>
        <div className='LPBody'>
            <div className='LPBodyText'>
                <Typography variant='h2' sx={{ color: '#000000' }}>
                    DubMeets
                </Typography>
                <Typography variant='h5' sx={{ color: '#000000' }}>
                    DubMeets is a platform for people to meet and talk to each other.
                </Typography>
            </div>
            <div className='LPBodyImage'>
                <img src='https://i.imgur.com/4QZKX6I.png' alt='DubMeets Logo' />
            </div>
        </div>

    </main>
  )
}
