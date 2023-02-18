import { TextField, Typography, Grid, Stack, Box, Button } from "@mui/material";
import React, { useEffect } from "react";

import BottomBar from "../../components/BottomNavigation.jsx";
import Header from "./components/Header.jsx";
import useUserStore from "../../store/useUserStore.jsx";
import UserInfo from "./components/UserInfo.jsx";

export default function ProfilePage() {
    const getUser = useUserStore((state) => state.getUser);
    useEffect(() => {
        getUser();
    }, []);
    const user = useUserStore((state) => state.user);

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Stack spacing={2}>
                    <Header />
                    <UserInfo user={user}/>
                    <Button 
                        variant="contained"
                        onClick={()=>console.log(user)}
                        
                    >Cl user</Button>
                </Stack>
            </Box>

            <BottomBar />
        </>
    );
}
