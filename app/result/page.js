'use client'

import { useRouter } from "next/navigation"
import { useState, useEffect, use } from "react"
import getStripe from "@/utils /get-stripe"
import { useSearchParams } from "next/navigation"
import { CircularProgress, Container, Typography } from "@mui/material"
import { warnOptionHasBeenMovedOutOfExperimental } from "next/dist/server/config"


const ResultPage=()=>{

    const router =useRouter()
    const searchParams = useSearchParams()
    const sessionId = searchParams.get('session_id')


    const [loading, setLoading] = useState(true)
    const [session, setSession] = useState(true)
    const [error ,setError] = useState(null)


    useEffect(()=>{
        const fetchCheckoutSession = async()=>{
            if(!session_id) return

            try{
                const res = await fetch(`/api/checkout_session?session_id=${session_id}`)
                const sessionData = await res.json()
                if(res.ok){
                    setSession(sessionData)
                }else{
                    setError(sessionData.error)
                }
            }
            catch(err){
            setError("An error has occured")
            }
            finally{
                setLoading(false)
            }
        }

        fetchCheckoutSession()
    }, [session_id])

    if(loading){
        return(
            <Container maxWidth ="100vw" 
            sx={{
                textAlign :'center',
                mt : 4,
            }}>
                <CircularProgress/>
                <Typography variant="h6">loading....</Typography>
            </Container>
        )
    }

    if (error){
        return(<Container maxWidth="100vw"
            sx={{
            textAlign :'center',
            mt : 4,
            }}>

            <Typography variant="h6">{error}</Typography>
            </Container>
        )
    }


    return(<Container maxWidth="100vw"
        sx={{
        textAlign :'center',
        mt : 4,
        }}>

            {
                session.payment_status === "paid" ? (
                    <><Typography variant="h6"> Thank you for your purchase </Typography> </>


                ) :(
                    <></>
                )
            }

        
        </Container>

    )

}
export default ResultPage

