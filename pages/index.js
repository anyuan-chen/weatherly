import { data } from "autoprefixer";
import Head from "next/head";

export default function Home({data}) {
  return <h1> {data.id} </h1>;
}
export async function getStaticProps() {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=Markham&appid=${process.env.APP_ID}`
  );
  const data = await res.json();

  if (!data) {
    return {
      notfound: true,
    };
  }
  return {
    props: {
      data,
    },
  };
}
