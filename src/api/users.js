import request from "../services/request";
import { API_BASE_URL } from "../services/constant";


export const getOtp = (mobile_number) => request(`${API_BASE_URL}/user/sendOtp`, {
    method: "POST", mobile_number
});

export const getAllUsers = () => request(`${API_BASE_URL}/user/all`, {
    method: "GET",
});

export const getUsers = (id) => request(`${API_BASE_URL}/user/update/:id=${id}`, {
    method: "PUT",
});
