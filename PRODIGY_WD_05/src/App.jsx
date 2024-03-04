import { useState } from 'react'
import Search from './Components/Search'
import Weather from './Components/Weather';
import { WeatherUrl,WeatherApiKey } from './api'
import ForecastTag from './Components/Forecast';
function App() {
    const [weather,setWeather] = useState(null)
    const [Forecast,setForecast] = useState(null)

    const HandleOnSearchChange=(data)=>{
    const [lat,lon] = data.value.split(" ");
    const currentWeatherFetch = fetch(`${WeatherUrl}/weather?lat=${lat}&lon=${lon}&appid=${WeatherApiKey}&units=metric`);
    const ForecastWeatherFetch = fetch(`${WeatherUrl}/forecast?lat=${lat}&lon=${lon}&appid=${WeatherApiKey}&units=metric`);

    Promise.all([currentWeatherFetch,ForecastWeatherFetch]).then(async(response)=>{
      const currentWeatherFetch = await response[0].json();
      const ForecastWeatherFetch = await response[1].json();
      setWeather({city:data.label, ...currentWeatherFetch})
      setForecast({city:data.label,...ForecastWeatherFetch})
    }).catch(err=>console.log(err))
  }

  return (
    <>
     <div className=''>
      <Search onSearchChange={HandleOnSearchChange}/>
      {weather && <Weather data={weather}/>}
      {Forecast && <ForecastTag data={Forecast}/>}
     </div>
    </>
  )
}

export default App
