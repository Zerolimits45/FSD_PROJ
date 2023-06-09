import React from 'react'
import { Container, List, ListItem, ListItemIcon, ListItemButton, ListItemText, Divider, Grid, Card } from '@mui/material'
import { Routes, Route, Link } from 'react-router-dom'
import Registered_Cars from './Registered_Cars'
import Registered_Cars_Edit from './Registered_Cars_Edit'
import Bookings from './Bookings'
import Rating_Booking from './Rating_Booking'
import Account from './Account'
import Account_Edit from './Account_Edit'
import Password_Edit from './Password_Edit'
import Help from './Help'

function ProfileRoutes() {
    return (
        <Container maxWidth='xl'>
            <Grid container spacing={2} marginTop={10}>
                <Grid item xs={12} sm={3}>
                    <Card>
                        <List>
                            <ListItem>
                                <ListItemButton LinkComponent={Link} to='/profile/account/:id' >
                                    <ListItemText primary="Account" />
                                </ListItemButton>
                            </ListItem>
                            <Divider />
                            <ListItem>
                                <ListItemButton LinkComponent={Link} to='/profile/registered_cars' >
                                    <ListItemText primary="My Cars" />
                                </ListItemButton>
                            </ListItem>
                            <Divider />
                            <ListItem>
                                <ListItemButton LinkComponent={Link} to='/profile/bookings' >
                                    <ListItemText primary="My Bookings" />
                                </ListItemButton>
                            </ListItem>
                            <Divider />
                            <ListItem>
                                <ListItemButton LinkComponent={Link} to='/profile/help'>
                                    <ListItemText primary="Help" />
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={9}>
                    <Routes>
                        <Route path="/account/:id" element={<Account />} />
                        <Route path="/account/edit/:id" element={<Account_Edit />} />
                        <Route path="/account/changepassword/:id" element={<Password_Edit />} />
                        <Route path="/bookings" element={<Bookings />} />
                        <Route path="/bookings/rating" element={<Rating_Booking />} />
                        <Route path="/registered_cars" element={<Registered_Cars />} />
                        <Route path="/registered_cars/edit/:id" element={<Registered_Cars_Edit />} />
                        <Route path="/help" element={<Help />} />
                    </Routes>
                </Grid>
            </Grid>
        </Container>


    )
}

export default ProfileRoutes