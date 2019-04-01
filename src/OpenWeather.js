const apiKey = "3048efce07f6fa30b19a517e5e1ce2ca";
const currentWeatherUrl = "http://api.openweathermap.org/data/2.5/weather";
const units = "imperial";
const iconUrl = "http://openweathermap.org/img/w";
const iconExt = "png";

const getCurrentWeather = async (zipCode) => {
    const url = `${currentWeatherUrl}?units=${units}&zip=${zipCode},us&apiKey=${apiKey}`;
    const resp = await fetch(url);
    const jsonResult = await resp.json();

    return {
        currentTemp: jsonResult.main.temp,
        cityName: jsonResult.name,
        weatherIcon: `${iconUrl}/${jsonResult.weather[0].icon}.${iconExt}`,
        weatherDescription: jsonResult.weather[0].description
    };
};

const OpenWeather = {    
    getCurrentWeather
}

export { OpenWeather };