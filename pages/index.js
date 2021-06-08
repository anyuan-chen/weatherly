import { data } from "autoprefixer";
import Head from "next/head";
import Location from "../components/location";
import Link from "next/link";
import { useState } from "react";
import styles from './index.module.css'

export default function Home({ data }) {
  const [userLocation, setuserLocation] = useState("");
  const handleChange = (event) => {
    console.log(process.env.NEXT_PUBLIC_APP_ID)
    setuserLocation(event.target.value);
  };
  return (
    <div className={styles.container}>
      <h1 className = {styles.title}> Enter A Location </h1>
      <label className = {styles.label}> Location </label>
      <textarea className = {styles.textarea} rows="1" value={userLocation} onChange={handleChange} required />
      <Link href={`/weather?location=${userLocation}`}>
        <a>
          <button className = {styles.button}> Get the weather!</button>
        </a>
      </Link>
    </div>
  );
}

