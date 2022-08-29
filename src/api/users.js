import request from "../services/request";
import { API_BASE_URL } from "../services/constant";
//import AsyncStorage from '@react-native-async-storage/async-storage';

export const getOtp = (mobile_number) => request(`${API_BASE_URL}/user/sendOtp`, {
    method: "POST", mobile_number
});
