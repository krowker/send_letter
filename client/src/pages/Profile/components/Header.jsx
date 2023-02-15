import {
    Avatar,
    Typography,
    Button,
    Grid,
    Stack,
} from '@mui/material'
import useAuthStore from '../../../store/useAuthStore'


export default function Header() {
    const logout = useAuthStore((state) => state.logout)

    return (
        <>
        <Grid 
            container
            spacing={1}
            alignItems="center"
            justifyContent="space-around"
        >
            <Grid item xs={6}>
               <Typography variant='h4'>
                  SendLetter   
               </Typography>
            </Grid>
            <Grid 
                item
                xs={6}
                alignItems='center'
                justifyContent='center'
            >
                <Stack
                   direction={'row'} 
                   spacing={2}
                   justifyContent="flex-end"
                   alignItems="center"
                >
                <Button
                    onClick={() =>{logout()}}
                    variant='contained'
                >
                    Logout
                </Button>
                <Avatar/>
                </Stack>
            </Grid>
                        
            
        </Grid>
        </>
    )
}