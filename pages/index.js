import { data } from "autoprefixer";
import Head from "next/head";
import Location from "../components/location";
import { useState } from "react";

export default function Home({ data }) {
  const [userLocation, setuserLocation] = useState("");
  const handleChange = (event) => {
    setuserLocation(event.target.value);
  };
  const submission = async () => {
    console.log(userLocation);
    const info = getWeatherInfo(userLocation);
  };
  return (
    <div>
      <h1> Enter A Location </h1>
      <form onSubmit={submission}>
        <label> Location </label>
        <textarea value={userLocation} onChange={handleChange} required />
        <button type="submit">Get the weather!</button>
      </form>
    </div>
  );
}

async function getWeatherInfo(place) {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${place}&appid=${process.env.APP_ID}`
  );
  const weatherData = await res.json();
  console.log(props, "hi");
  if (!weatherData) {
    return {
      notfound: true,
    };
  }
  return {
    props: {
      weatherData,
    },
  };
}
