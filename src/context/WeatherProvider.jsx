import { useState, createContext } from 'react'
import axios from 'axios'

const WeatherContext = createContext()

const WeatherProvider = ({children}) => {
    const [search, setSearch] = useState({
        ciudad: '',
        pais: ''
    })
    const [result, setResult] = useState({})


    const dataSearch = e =>{
        setSearch({
            ...search,
            [e.target.name]: e.target.value
        })
    } 
    const getWeather = async datas => {
        try {
            const { ciudad, pais } = datas
            const appID = import.meta.env.VITE_API_KEY
            const url = `http://api.openweathermap.org/geo/1.0/direct?q=${ciudad},${pais}&limit=1&appid=${appID}`
            const { data } = await axios(url)
            const { lat, lon } = data[0]
            
            const urlWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appID}`
            const { data: weather } = await axios(urlWeather) 
            setResult(weather)
        } catch (error) {
            console.log(error)
        }
    }
    return(
        <WeatherContext.Provider value={{
            search,
            dataSearch,
            getWeather,
            result
        }}>
            {children}
        </WeatherContext.Provider>
    )
}

export {
    WeatherProvider
}

export default WeatherContext