import { React, createContext, useContext, useState } from "react";
import {getWeatherForcast,getWeatherCurrent} from '../api/index';
const weatherContext = createContext(null);

export const useWeather = ()=>{
    return useContext(weatherContext);
}

export const WeatherProvider =(props)=>{  
    // In your weather context or state management
    const [isLoading, setIsLoading] = useState(false);

    const [data,setData] = useState(null);  
    const [searchCity,setSearchCity] = useState(null); 

   
    const fetchData = async () =>{  
        setIsLoading(true)
        try{ 
            const response = await (getWeatherForcast(searchCity))
            setData(response)  
        }finally{
            setIsLoading(false) 
        }
    } 


    const fetchCurrentData = async () =>{ 
        setIsLoading(true)  
        try{ 
            navigator.geolocation.getCurrentPosition((position)=>{
                getWeatherCurrent(
                  position.coords.latitude,
                  position.coords.longitude
                  ).then(data => setData(data))
                  } ) 
        }finally{ 
            setIsLoading(false) 
        }
       }  
    return <weatherContext.Provider value={{searchCity,setSearchCity,data,fetchData,isLoading,fetchCurrentData} }>{props.children}</weatherContext.Provider>
}