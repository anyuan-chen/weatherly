import React from "react";
import Router from "next/router";
import { useRouter } from "next/router";
import {useEffect, useState} from "react"

export default function Location() {
  const [weatherData, setweatherData] = useState({
    id: 32
  })
  const router = useRouter();
  const { location } = router.query;

  useEffect(() => {
    async () => {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${process.env.APP_ID}`
      );
      const data = await res.json()
      setweatherData(data);
    };
  }, []);

  return (
    <div>
      <h1>{weatherData.id}</h1>
    </div>
  );
}
