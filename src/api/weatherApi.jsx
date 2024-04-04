import axios from "axios"
const apiKey = "0f87333674dd369450ca3d4ffee7411c"
const baseUrl = "https://api.openweathermap.org/data/2.5/weather/"

export const weatherApi = (city) => {
    axios.get(`${baseUrl}weather?q=${city}&appid=${apiKey}&units=metric&lang=tr`)
        .then(response => {
            console.log(response.data)
        })
        .catch(error => {
            console.log(error)
        })
}