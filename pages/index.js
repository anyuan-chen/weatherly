import { data } from "autoprefixer";
import Head from "next/head";
import Location from "../components/location";
import Link from 'next/link'
import { useState } from "react";

export default function Home({ data }) {
  const [userLocation, setuserLocation] = useState("");
  const handleChange = (event) => {
    setuserLocation(event.target.value);
  };
  return (
    <div>
      <h1> Enter A Location </h1>
      <label> Location </label>
      <textarea value={userLocation} onChange={handleChange} required />
      <Link href = {`/weather/${userLocation}`}>
        <a>
          <button> Get the weather!</button>
        </a>
      </Link>
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
