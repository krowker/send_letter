import axios from "axios";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { API_URL } from "../http";
import UserService from "../services/UserService";

const useUserStore = create(
  devtools((set) => ({
    user: {},

    getUser: async (id) => {
      try {
        const response = await UserService.getUser(id);
        set({
          user: response,
        });
      } catch (e) {
        console.log(e.response?.data?.message);
      }
    },
  }))
);

export default useUserStore;
