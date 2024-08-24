'use client'
import getStripe from '@/utils /get-stripe'
import  {SignedIn, SignedOut, UserButton} from '@clerk/nextjs'
import { User } from '@clerk/nextjs'
import { AppBar, Typography, Button, Box,  Grid ,Toolbar} from "@mui/material"
import { ApiError } from "next/dist/server/api-utils"





export default function Home() {

  const handelSubmit = async() =>{
    const checkoutSession = await fetch('api/checkout_session',{
      method : 'POST',
      headers: {
        origin: 'http://localhost:3000',
      },
    })

    const checkoutSessionJSON = await checkoutSession.json()

    if (checkoutSession.statusCode === 500){
      console.error(checkoutSession.message)
    }

    const stripe = await getStripe()
    const {error} = await stripe.redirectToCheckout({
      sessionId : checkoutSessionJSON.id,
    })

    if (error){
      console.warn(error.message)
    }

  }
  return (
    <container maxWidth="100vw">
      <head>
        <title>flashcard Saas</title>
        <meta name ="description" content= "Create flashcards from your texts"></meta>
      </head>

      <AppBar position="static"> 
        <Toolbar>
          <Typography variant = "h6" style={{FlexGrow : 1}}> 
            Flashcard SAAS 
          </Typography>
          <SignedOut>
            <Button alignItems='right' color = "inherit" href="sign-in">Login</Button>
            <Button alignItems='right' color= "inherit" href ="sign-up"> Sign Up</Button>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn> 
        </Toolbar>
      </AppBar>
      <Box sx ={{
        textAlign:'center', 
        my: 4,

      }}>
        <Typography variant   = "h2"> Welcome to flashcard SAAS</Typography>
        <Typography variant ="h5"> Easiest way to make  flashcards with AI</Typography>
        <Button variant ='contained' sx ={{mt:2}} href="generate"> Get Started</Button>
      </Box>
      <Box sx={{my:6, }}>
        <Typography variant='h2' component='h2'>Features</Typography>
        <Grid container spacing={4}> 
          <Grid item sx ={12} md={4}>
            <Box sx = {{ 
              p: 3,
              
            }}>
            <Typography variant="h6"> Easy Text Input</Typography>
            <Typography> Free Version of this model to generate Flashcards</Typography>
            </Box>

          </Grid>
          <Grid item xs ={12} md={4}>
          <Box sx = {{ 
              p: 3,
              textAlign: 'center'
            }}>
            <Typography variant="h6"> Easy text Input</Typography>
            <Typography>Pro Version for the best results and seamless transition</Typography>
          </Box>

          </Grid>


          <Grid item xs ={12} md={4}>
          <Box sx = {{ 
              p: 3,
              textAlign: 'center',
            }}>
            <Typography variant="h6"> Easy Text Input</Typography>
            <Typography>Pro Version for the best results and seamless transition</Typography>
          </Box>

          </Grid>
        </Grid>
          
      </Box>
      <Box sx={{my:6, textAlign:"center"}}>
        <Typography variant='h2' component='h2'>Pricing</Typography>
        <Box sx={{
          p:1
        }}>
        <Grid container spacing={4}> 
          <Grid item sx ={12} md={4}>
            <Box sx = {{ 
              p: 3,
              border: '1px solid',
              borderColor: 'grey.300',
              borderRadius: '1 px rounded',
              textAlign: 'center'
            }}>
            <Typography variant="h6"> Free</Typography>
            <Typography> Free Version of this model to generate Flashcards</Typography>
            <Typography> $0 per Month </Typography>
            <Box sx= {{
              p:1
            }}>
            <Button variant='contained'> Chose Free and Sign Up</Button>
            </Box>
            </Box>

          </Grid>
          <Grid item xs ={12} md={4}>
          <Box sx = {{ 
              p: 3,
              border: '1px solid',
              borderColor: 'grey.300',
              borderRadius: '1 px rounded',
              textAlign: 'center'
            }}>
            <Typography variant="h6"> Pro Subscription</Typography>
            <Typography>Pro Version for the best results and seamless transition</Typography>
            <Typography>$5 Per Month</Typography>
            <Box sx= {{
              p:1
            }}>
            <Button variant='contained' onClick={handelSubmit}> Chose Pro</Button>
            </Box>

          </Box>
          </Grid>
          <Grid item xs ={12} md={4}>
          <Box sx = {{ 
              p: 3,
              border: '1px solid',
              borderColor: 'grey.300',
              borderRadius: '1 px rounded',
              textAlign: 'center',
              pt: 3,
            }}>
            <Typography variant="h6"> Enterprise Solutions</Typography>
            <Typography>Enterprise Solutions for Instutional Use</Typography>
            <Typography>Get Estimate</Typography>
            <Box sx={{
              p:1
            }}>
            <Button variant = 'contained'>Get Enterprise</Button>
            </Box>
          </Box>

          </Grid>
        </Grid>
        </Box>
      </Box>
    </container> 
  )
}
