import Head from 'next/head';
import { Header, Nav } from '../components';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Hulu - Clone</title>
        <link rel='icon' href='/favicon.png' />
      </Head>

      <Header />
      <Nav />
    </>
  );
}
