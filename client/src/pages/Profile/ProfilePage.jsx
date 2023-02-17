import { TextField, Typography, Grid, Stack, Box } from "@mui/material";
import React, { useEffect } from "react";

import BottomBar from "../../components/BottomNavigation.jsx";
import Header from "./components/Header.jsx";
import useAuthStore from "../../store/useAuthStore";
import useUserStore from "../../store/useUserStore.jsx";

export default function ProfilePage() {
    const user = useAuthStore((state) => state.user);
    const getUser = useUserStore((state) => state.getUser);
    useEffect(() => {
        getUser(user.id);
    }, []);
    const fullUser = useUserStore((state) => state.user);

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
