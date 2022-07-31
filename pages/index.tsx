import type { NextPage } from 'next';

import Hero from '@/components/Hero';
import Page from '@/components/Page';
import Heading from '@/components/Page/Heading';

const Home: NextPage = () => {
  return (
    <Page>
      <Heading>About The Program</Heading>
      <Hero
        image={{
          src: 'assets/images/rover_hero.jpeg',
          alt: "NASA's curiosity rover",
        }}
      />
    </Page>
  );
};

export default Home;
