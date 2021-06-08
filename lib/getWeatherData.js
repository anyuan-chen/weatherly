export function getWeather(location){
    console.log(process.env.NEXT_PUBLIC_APP_ID)
    console.log(location)
    return fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${process.env.NEXT_PUBLIC_APP_ID}`
    ).then(data => data.json())
}