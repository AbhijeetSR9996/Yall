import request from "../services/request";
import { API_BASE_URL } from "../services/constant";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const login = (data) => request(`${API_BASE_URL}/user/adminLogin`, {
  method: "POST", data
});

// export const getPhoneNumber = async () => {
//   try {
//     const userNumberData = JSON.parse(await AsyncStorage.getItem("phonenumber"))
//     return userNumberData;
//   } catch (error) {
//     console.log(error);
//   }
// };

export const mobileNumber = async (payload) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  };
  const response = await fetch(`${API_BASE_URL}user/mobileNumber`, requestOptions);
  return response;
}

// export const getPhoneCode = async () => {
//   try {
//     const userCodeData = JSON.parse(await AsyncStorage.getItem("phonecode"))
//     return userCodeData;
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const signUp = async (payload) => {
//   const requestOptions = {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(payload)
//   };
//   const response = await fetch(`${API_BASE_URL}user/signup`, requestOptions);
//   return response;
// }
