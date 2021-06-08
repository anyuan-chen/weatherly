import { data } from "autoprefixer";
import Head from "next/head";
import Location from "../components/location";
import Link from "next/link";
import { useState } from "react";
import styles from "./index.module.css";
import Layout from "../components/layout";

export default function Home({ data }) {
  const [userLocation, setuserLocation] = useState("");
  const handleChange = (event) => {
    console.log(process.env.NEXT_PUBLIC_APP_ID);
    setuserLocation(event.target.value);
  };
  return (
    <Layout>
      <div className={styles.container}>
        <h1 className={styles.title}> Find The Weather</h1>
        <label for="cityField" className={styles.label}>
          {" "}
          Location:{" "}
        </label>
        <input
          id="cityField"
          name="cityField"
          type="text"
          className={styles.textarea}
          value={userLocation}
          onChange={handleChange}
        />
        <Link href={`/weather?location=${userLocation}`}>
          <a>
            <button className={styles.button}> Search</button>
          </a>
        </Link>
      </div>
    </Layout>
  );
}
