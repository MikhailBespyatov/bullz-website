import Image from 'next/image';
import { FC } from 'react';

interface Props {
  src: StaticImageData;
  alt: string;
}

export const ResponsiveImage: FC<Props> = ({ src, alt }) => (
  <Image src={src} alt={alt} sizes="100vw" loading="eager" layout="responsive" placeholder="blur" />
);
