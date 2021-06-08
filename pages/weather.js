import React from "react";
import Router from "next/router";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getWeather } from "../lib/getWeatherData";

export default function Location() {
  const [weather, setWeather] = useState();
  const router = useRouter();
  const { location } = router.query;

  useEffect(() => {
    getWeather(location).then((data) => setWeather(data));
    console.log(weather);
  }, []);

  if (weather) {
    return (
      <div>
        <h1>{weather.list[0].main.temp}</h1>
      </div>
    );
  } else {
    return <h1>Loading....</h1>;
  }
}
