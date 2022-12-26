import axios from "axios";

const instance = axios.create({
    baseURL: 'https://api.apilayer.com/exchangerates_data/latest?base=USD&symbols=EUR,GBP',
    headers: { apikey: 'FOp7vsShWM2NAsIhVE9OdY8ztE3g2lLr' }
})

export const currencyAPI = {
    async getCurrency() {
        return await instance.get(``)
            .then(response => {

                return response.data
            })
    }
};
