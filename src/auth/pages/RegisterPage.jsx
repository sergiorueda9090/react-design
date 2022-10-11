import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { AuthLayout } from '../layout/AuthLayout';
import { Typography, Grid, TextField, Button, Link } from '@mui/material';
import HowToRegIcon from '@mui/icons-material/HowToReg';

export const RegisterPage = () => {
    return (
        <AuthLayout title="Login">
                    <form>
                        <Grid container>
                            <Grid item xs={12} sx={{mb:1}}>
                                <TextField label="Name"
                                           type="text"
                                           placeholder="Name"
                                           fullWidth/>
                            </Grid>

                            <Grid item xs={12}>
                                <TextField label="Email"
                                           type="email"
                                           placeholder='Email@gmail.com'
                                           fullWidth/>
                            </Grid>

                            <Grid item  xs={12} sx={{mt:1}}>
                                <TextField label="password"
                                           type="password"
                                           placeholder='password@gmail.com'
                                           fullWidth/>
                            </Grid>

                            <Grid item  xs={12} sx={{mt:1}}>
                                <TextField label="Repeat password"
                                           type="password"
                                           placeholder='password@gmail.com'
                                           fullWidth/>
                            </Grid>

                            <Grid container spacing={2} sx={{ mb:2 }}>

                                <Grid item xs={12} sx={{mt:2}}>
                                    <Button variant='contained' fullWidth>
                                    <HowToRegIcon />
                                    <Typography sx={{ml:1}}>Register User</Typography>
                                    </Button>
                                </Grid>
                            </Grid>
                            
                            <Grid container spacing={2} sx={{ mt:1 }}>
                                <Grid xs={12} container direction='row' justifyContent='end'>
                                    <Link component={ RouterLink } color='inherit' to="/auth/login">
                                        Ingresar
                                    </Link>
                                </Grid>
                            </Grid>

                        </Grid>
                    </form>
        </AuthLayout>
    )
}