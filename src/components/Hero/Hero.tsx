import Description from '@/components/Hero/Description';
import Image from '@/components/Image';
import { ImageProps } from '@/components/Image/types';
import Link from '@/components/Link';

import styles from './Hero.module.scss';

interface HeroProps {
  image: ImageProps;
}

function Hero({ image }: HeroProps) {
  return (
    <section className={styles.layout}>
      <div className={styles.imageSection}>
        <Image {...image} />
      </div>
      <div className={styles.textSection}>
        <Description />
      </div>
      <div className={styles.linksSection}>
        <Link href="/images">View images by date</Link>
        <Link href="/weather">View weather</Link>
      </div>
    </section>
  );
}

export default Hero;
