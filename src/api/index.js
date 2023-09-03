const BaseUrl =  "https://api.weatherapi.com/v1/current.json?key=41d09a8f2a9843c89cc111035230309";

export const getWeatherForcast = async (city)=>{
    const response  = await fetch(`${BaseUrl}&q=${city}&aqi=yes`)
    return await response.json();
}
export const getWeatherCurrent = async (lat,lon)=>{
    const response  = await fetch(`${BaseUrl}&q=${lat},${lon}&aqi=yes`)
    return await response.json();
}