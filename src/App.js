import { Cards } from './components/Card'; 
import Button from './components/button';
import { Input } from './components/input'; 
import './App.css';   
import { useWeather } from './context/weather';
import { useEffect } from 'react';
function App() {
   const weather = useWeather();  
useEffect(()=>{
  weather.fetchCurrentData();
},[])
  return (
    <> 
    <div className="weater_container">
    <h1>Weater Forcast</h1>
   <Input/>
   <Button value="Search" onClick={weather.fetchData} /> 
   {weather.isLoading ?
<div class="loader"></div>
 : (<Cards country={weather.setSearchCity} />) }
   </div>
    </>
    )
}

export default App;
