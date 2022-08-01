import type { NextPage } from 'next';

import Gallery from '@/components/Gallery';
import Hero from '@/components/Hero';
import { ImageProps } from '@/components/Image/types';
import Page from '@/components/Page';
import Heading from '@/components/Page/Heading';
import styles from '@/components/Page/Page.module.scss';
import SubHeading from '@/components/Page/SubHeading';
import { getImages } from '@/services/images';

interface PageProps {
  images: ImageProps[];
}

const Home: NextPage<PageProps> = ({ images }) => {
  return (
    <Page>
      <Heading>About The Program</Heading>
      <Hero
        image={{
          src: 'assets/images/rover_hero.jpeg',
          alt: 'Curiosity rover image',
          height: 348,
        }}
      />
      <SubHeading>
        Curiosity rover image <span className={styles.highlight}>from today</span>
      </SubHeading>
      <Gallery size={{ width: 215, height: 236 }} images={images} />
    </Page>
  );
};

export async function getStaticProps() {
  // the API crashes if we provide today's date
  const date = '2020-07-14';
  const rawImages = await getImages({ date });

  const images = rawImages.map((image, index) => ({
    id: `${image.id}`,
    src: image.img_src,
    alt: `Curiosity image ${index}`,
  }));

  return {
    props: {
      images,
    },
    revalidate: 60 * 60, // Every hour
  };
}

export default Home;
