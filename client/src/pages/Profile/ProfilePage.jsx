import { TextField, Typography, Grid, Stack, Box, Button } from "@mui/material";
import React, { useEffect } from "react";

import BottomBar from "../../components/BottomNavigation.jsx";
import Header from "./components/Header.jsx";
import useUserStore from "../../store/useUserStore.jsx";

export default function ProfilePage() {
    const getUser = useUserStore((state) => state.getUser);
    useEffect(() => {
        console.log(user.id);
        getUser(user.id);
    }, []);
    const user = useUserStore((state) => state.user);

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Stack>
                    <Header />
                </Stack>
            </Box>

            <BottomBar />
        </>
    );
}
