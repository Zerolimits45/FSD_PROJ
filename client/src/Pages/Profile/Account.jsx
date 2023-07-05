import React from 'react'
import { Typography, Grid, Container, TextField, Box, Button, Card, CardContent,Avatar } from '@mui/material'
import AndroidIcon from '@mui/icons-material/Android';
import { Link } from 'react-router-dom'
function Account() {
    const avatarStyle = { backgroundColor: '#FF4E00', marginTop: '1rem', width: '5rem', height: '5rem' }
    const btnstyle = { margin: '8px 0', fontWeight: 'bold', color: 'white' }
  return (
    <Container maxWidth='xl'>
        <Typography variant='h4' color="white"  marginBottom={2}>
            Your account details
        </Typography>
        <Avatar style={avatarStyle}><AndroidIcon /></Avatar>
        <Typography variant='h6' color="white" marginTop={2} marginBottom={2}>
            Your name:
        </Typography>
        <Typography variant='h6' color="white" marginTop={2} marginBottom={2}>
            Your email:
        </Typography>
        <Typography variant='h6' color="white" marginTop={2} marginBottom={2}>
            Your phone number:
        </Typography>
        <Button variant='contained' color='btn' style={btnstyle} LinkComponent={Link} to='/profile/account/edit_details'>Change Personal Details</Button>
        <Typography variant='h4' color="white" marginTop={10} marginBottom={2}>
            Change your password
        </Typography>
        <Button variant='contained' color='btn' style={btnstyle} LinkComponent={Link} to='/profile/account/edit_password'>Change Password</Button>
    </Container>
  )
}

export default Account