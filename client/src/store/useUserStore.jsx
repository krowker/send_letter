import { create } from "zustand";
import { devtools } from "zustand/middleware";
import UserService from "../services/UserService";

const useUserStore = create(
  devtools((set) => ({
    user: {
      email: '',
      address: {
        name: '',
        surname: '',
        fathersName: '',
        country: '',
        city: '',
        zipCode: '',
        streetAndBuilding: '',
        apartment: '',
        remark: ''
      }
    },

    getUser: async () => {
      try {
        const response = await UserService.getUser();
        
        set({
          user: {email: response.data.email, address: { ...response.data.address}},
        });
      } catch (e) {
        console.log(e.response?.data?.message);
      }
    },

    updateUser: async (data) => {
      try {
        const response = await UserService.updateUser(data)

        set({
          user: response.data
        })
      } catch (e) {
        console.log(e.response?.data?.message);
      }
    }
  }))
);

export default useUserStore;
