import Image from 'next/image';
import { FC } from 'react';
import { ImageProps } from 'types';

export const BenefitIcon: FC<ImageProps> = ({ src, alt }: ImageProps) => (
  <Image src={src} alt={alt} width={34} height={34} />
);
