import NextImage from 'next/image';
import type { FC } from 'react';

export interface ImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}
const Image: FC<ImageProps> = ({ src, alt, width = 128, height = 128, ...props }) => (
  <NextImage src={src} width={width} height={height} alt={alt} {...props} />
);

export default Image;
