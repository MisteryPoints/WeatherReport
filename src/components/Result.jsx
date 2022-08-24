import useWeather from "../hooks/useWeather"

const Result = () => {
    const { result } = useWeather()
    console.log(result)

    const { name, main, weather } = result

    //Kelvin degree
    const kelvin = 273.15
 

    return (
        <div className="contenedor clima">
            <h2 className="title">El Clima de {name} es:</h2>
            <div className="weather">
                <p>
                    { parseInt(main.temp - kelvin) }<span className="c">&#x2103;</span>
                </p> 
                <img src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`} alt="icon weather" /> 
            </div> 
            <div className="desc"> <u>{weather[0].description}</u>  </div> 
            <div className="temp_min_max">
                <p>
                    Mín: { parseInt(main.temp_min - kelvin) }<span>&#x2103;</span>
                </p>
                <p>
                    Máx: { parseInt(main.temp_max - kelvin) }<span>&#x2103;</span>
                </p>
            </div>
            <div className="feel">
                <p>
                    Sentimiento General: { parseInt(main.feels_like - kelvin) }<span>&#x2103;</span>
                </p>
            </div>
        </div>
    );
}

export default Result;
