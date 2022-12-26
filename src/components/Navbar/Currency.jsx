import { React, useState, useEffect } from 'react';
import { currencyAPI } from '../../api/api_Currency';

const Currency = (props) => {

    const [currency, setCurrency] = useState('EUR')
    const [currencyValue, setCurrencyValue] = useState('0.00')

    useEffect(() => {
        let request = currencyAPI.getCurrency()
            .then(data => {
                setCurrency(data.base)
                setCurrencyValue(data.rates.EUR)
            })

        console.log(request().then((data) => {
            return data
        }))

    }, [currency])




    return <div>
        {currency} to EUR:{currencyValue}
        <button onClick={() => { setCurrency('go') }}>Update</button>
    </div>
}

export default Currency;