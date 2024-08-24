
'use client'
import { SignIn } from '@clerk/clerk-react'
import {AppBar, Container, Toolbar, Typography, Box, Button, Link} from '@mui/material'

export default function signUpPage(){
    return <Container maxWidth='sm'> 
        <AppBar position= "static" sx={{backgroundColor:'inherit'}}>
            <Toolbar>
                <Typography variant='h6' sx={{
                    flexGrow:1
                }}>
                    Flashcard
                </Typography>
                <Button color='inherit'>
                    <Link heref="sign-up" passHref>
                        Sign Up
                    </Link>
                </Button>
                <Button color='inherit'>
                    <Link heref="/sign-in" passHref>
                        Login 
                    </Link>
                </Button>
            </Toolbar>
        </AppBar>
        <Box
            display = "flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
        >
            
            <Typography variant="h4"> Sign In</Typography>
            <Box sx={{
                p:2,
                textAlign: 'center'
            }}> 
            <SignIn/>
            </Box>
        </Box>
    </Container>
}