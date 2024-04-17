import { cva } from 'class-variance-authority';
import type { FC, ReactNode } from 'react';

import 'styles/global.css';
import { twMerge } from 'tailwind-merge';

import { Metadata } from 'next';

interface RootLayoutProps {
  children: ReactNode;
}

const html = cva(['scroll-smooth', 'motion-reduce:scroll-auto']);

export const metadata: Metadata = {
  title: 'Matthew Gasin | Portfolio',
  description: 'Portfolio site for Matthew Gasin, a Frontend Engineer based in New England.',
  keywords: ['Portfolio', 'Frontend'],
};

const RootLayout: FC<RootLayoutProps> = ({ children }) => (
  <html className={twMerge(html())} lang="en">
    <body>{children}</body>
  </html>
);

export default RootLayout;
