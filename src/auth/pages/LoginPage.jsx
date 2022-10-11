import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { AuthLayout } from '../layout/AuthLayout';
import { Typography, Grid, TextField, Button, Link } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';

export const LoginPage = () => {
    return (
        <AuthLayout title="Login">
                    <form>
                        <Grid container>
                            <Grid item xs={12}>
                                <TextField label="Email"
                                           type="email"
                                           placeholder='Email@gmail.com'
                                           fullWidth/>
                            </Grid>

                            <Grid item  xs={12} sx={{mt:2}}>
                                <TextField label="password"
                                           type="password"
                                           placeholder='password@gmail.com'
                                           fullWidth/>
                            </Grid>

                            <Grid container spacing={2} sx={{ mb:2 }}>
                                <Grid item xs={6} sx={{mt:2}}>
                                    <Button variant='contained' fullWidth>
                                        <LoginIcon />
                                         <Typography sx={{ml:1}}>Login</Typography>
                                    </Button>
                                </Grid>

                                <Grid item xs={6} sx={{mt:2}}>
                                    <Button variant='contained' fullWidth>
                                        <HowToRegIcon />
                                        <Link component={ RouterLink } color='inherit' to="/auth/register">
                                        <Typography sx={{ml:1}}>Register</Typography>
                                        </Link>
                                    </Button>
                                </Grid>
                            </Grid>

                            <Grid container direction='row' justifyContent='end'>
                                <Link component={ RouterLink } color='inherit' to="/auth/register">
                                    Recuperar Password
                                </Link>
                            </Grid>

                        </Grid>
                    </form>
        </AuthLayout>
    )
}