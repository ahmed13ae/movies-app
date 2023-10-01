import { axiosInstance } from "./config"

export const getMovies = async (path) => {
    try {
        const res = await axiosInstance.get(path);
        return res;
    } catch (error) {
        console.log('Error:', error);
    }
}