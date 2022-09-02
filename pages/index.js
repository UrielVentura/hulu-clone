import Head from 'next/head';
import { Header, Nav, Results } from '../components';
import requests from '../utils/requests';

export default function HomePage({ results }) {
  return (
    <>
      <Head>
        <title>Hulu - Clone</title>
        <link rel='icon' href='/favicon.png' />
      </Head>

      <Header />
      <Nav />
      <Results results={results} />
    </>
  );
}

export const getServerSideProps = async (ctx) => {
  const { genre } = ctx.query;
  const resp = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url
    }`
  );

  const data = await resp.json();
  console.log(data);

  return {
    props: { results: data.results },
  };
};
