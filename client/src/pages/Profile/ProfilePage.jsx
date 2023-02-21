import { TextField, Typography, Grid, Stack, Box, Button } from "@mui/material";
import React, { useEffect, useState } from "react";

import BottomBar from "../../components/BottomNavigation.jsx";
import Header from "./components/Header.jsx";
import useUserStore from "../../store/useUserStore.jsx";
import UserInfo from "./components/UserInfo.jsx";

export default function ProfilePage() {
    const [isLoaded, setIsLoaded] = useState(false);

    const getUser = useUserStore((state) => state.getUser);
    useEffect(() => {
        getUser();
        setIsLoaded(true);
    }, [isLoaded]);
    const user = useUserStore((state) => state.user);

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Stack spacing={2}>
                    <Header />
                    <UserInfo user={user} />
                    <Button
                        variant="contained"
                        onClick={() => console.log(user)}

                    >Cl user</Button>
                </Stack>
            </Box>

            <BottomBar />
        </>
    );

    
}
