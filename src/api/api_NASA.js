import axios from "axios";

const instance = axios.create({
    baseURL: 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/'
})

export const newsAPI = {
    async getPhotos() {
        return await instance.get(`photos?sol=1000&api_key=l5gKg3XfmKqUEZb1BlBWkLU64hnMWPY2d6xxcenD`)
            .then(response => {
                debugger
                return response.data
            })
    }
};