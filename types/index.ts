export interface ClassName {
  className?: string;
}

export interface Id {
  id?: string;
}

export type noop = () => void;

export interface ImageProps {
  src: StaticImageData;
  alt: string;
}
