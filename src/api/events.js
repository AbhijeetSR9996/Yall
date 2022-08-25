import request from "../services/request";
import { API_BASE_URL } from "../services/constant";

export const getWeeklyEvents = () => request(`${API_BASE_URL}/events`, {
    method: "GET",
});

export const getEventTypes = () => request(`${API_BASE_URL}/eventType`, {
    method: "GET",
});
