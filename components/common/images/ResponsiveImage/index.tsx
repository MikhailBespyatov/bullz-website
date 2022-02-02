import Image from 'next/image';
import { FC } from 'react';
import { ImageProps } from 'types';

export const ResponsiveImage: FC<ImageProps> = ({ src, alt }) => (
  <Image src={src} alt={alt} sizes="100vw" loading="eager" layout="responsive" placeholder="blur" />
);
