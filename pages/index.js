import { data } from "autoprefixer";
import Head from "next/head";
import Location from "../components/location";
import Link from "next/link";
import { useState } from "react";

export default function Home({ data }) {
  const [userLocation, setuserLocation] = useState("");
  const handleChange = (event) => {
    console.log(process.env.NEXT_PUBLIC_APP_ID)
    setuserLocation(event.target.value);
  };
  return (
    <div>
      <h1> Enter A Location </h1>
      <label> Location </label>
      <textarea value={userLocation} onChange={handleChange} required />
      <Link href={`/weather?location=${userLocation}`}>
        <a>
          <button> Get the weather!</button>
        </a>
      </Link>
    </div>
  );
}

