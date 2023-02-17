import axios from "axios";
import { create } from "zustand";
import { API_URL } from "../http";
import AuthService from "../services/AuthServise";
import { devtools } from "zustand/middleware";

const useAuthStore = create(
    devtools((set) => ({
        loading: false,
        user: {},
        isAuth: false,

        login: async (email, password) => {
            try {
                const response = await AuthService.login(email, password);

                localStorage.setItem("token", response.data.accessToken);
                set({
                    user: await response.data.user,
                    isAuth: true,
                });
            } catch (error) {
                console.log(error.response?.data?.message);
            }
        },

        logout: async () => {
            try {
                const response = await AuthService.logout();

                localStorage.removeItem("token");
                set({
                    user: {},
                    isAuth: false,
                });
            } catch (error) {
                console.log(error.response?.data?.message);
            }
        },

        checkAuth: async () => {
            try {
                const response = await axios.get(`${API_URL}/refresh`, {
                    withCredentials: true,
                });
                console.log("derg store.checkAuth");
                localStorage.setItem("token", response.data.accessToken);
                set({
                    user: await response.data.user,
                    isAuth: true,
                });
            } catch (error) {
                console.log(error.response?.data?.message);
            }
        },

        registration: async (email, password, data) => {
            try {
                const response = await AuthService.registration(email, password, data);

                localStorage.setItem("token", response.data.accessToken);
                set({
                    user: await response.data.user,
                    isAuth: true,
                });
            } catch (error) {
                console.log(error.response?.data?.message);
            }
        },
    }))
);

export default useAuthStore;
