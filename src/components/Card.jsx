import React from 'react' 
import { useWeather } from '../context/weather';

export const Cards = () => {
    const weather = useWeather();
  return (
    <>
    <div className="card">
        <div className="card_img">
            <img src={weather?.data?.current?.condition?.icon } alt="Weather Icon" />
            <h5>{weather?.data?.current?.condition?.text}</h5>
        </div>
        <h1><span>{weather?.data?.current?.temp_c}</span>.C</h1>  
            <h2>        {weather?.data?.location?.region }</h2>
           
 
    </div>
    </>
  )
}
