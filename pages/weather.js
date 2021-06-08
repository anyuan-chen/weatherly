import React from "react";
import Router from "next/router";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getWeather } from "../lib/getWeatherData";
import Layout from "../components/layout";
import ReturnHome from "../components/returnhome";
import Link from 'next/link'

export default function Location() {
  const [weather, setWeather] = useState();
  const router = useRouter();
  const { location } = router.query;

  useEffect(() => {
    getWeather(location).then((data) => setWeather(data));
    console.log(weather);
  }, []);

  if (weather) {
    if (!weather.hasOwnProperty("list")) {
      return (
        <Layout>
          <div>
            <h1>City Not Found</h1>
            <ReturnHome></ReturnHome>
          </div>
        </Layout>
      );
    }
    return (
      <Layout>
        <div>
          <h1>{weather.list[0].main.temp}</h1>
          <ReturnHome></ReturnHome>
        </div>
      </Layout>
    );
  } else {
    return <Layout><h1>Loading....</h1></Layout>;
  }
}
