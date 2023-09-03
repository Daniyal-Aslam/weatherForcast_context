import React from 'react'
import { useWeather } from '../context/weather'

export const Input = () => {
  const weather = useWeather();  
  return (
   <> 
    <input
    className='input_field'
    value={weather.searchCity}
    placeholder="Search the City here"
    onChange={(e)=>weather.setSearchCity(e.target.value)}
    />
    </> 
  )
}
