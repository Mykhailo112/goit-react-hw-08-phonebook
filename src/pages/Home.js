import { Helmet } from 'react-helmet-async';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <h1>
        Contacts manager welcome page{' '}
        <span role="img" aria-label="Greeting icon">
          ☎️
        </span>
      </h1>
    </>
  );
}
