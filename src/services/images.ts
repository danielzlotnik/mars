import { ImageProps } from '@/components/Image/types';

interface RawImage {
  id: string;
  img_src: string;
}

export async function getImages({ date }: { date: string }): Promise<RawImage[]> {
  return fetch(
    `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date}&api_key=DEMO_KEY`
  )
    .then(response => {
      if (!response.ok) {
        // fail silently, TODO - proper error handling
        return [];
      }
      return response.json();
    })
    .then(json => json.photos);
}

export function convert(rawImages: RawImage[]): ImageProps[] {
  return rawImages.map((image, index) => ({
    id: `${image.id}`,
    src: image.img_src,
    alt: `Curiosity image ${index}`,
  }));
}
