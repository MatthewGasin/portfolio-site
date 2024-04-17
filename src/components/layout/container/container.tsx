import { cva } from 'class-variance-authority';
import type { ReactNode } from 'react';
import type { FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { useTheme } from 'contexts/DarkModeContext';

import { Roboto_Mono } from 'next/font/google';

interface ContainerProps {
  children?: ReactNode;
}

const container = cva(['flex', 'min-h-screen', 'flex-col', 'items-center', 'justify-between', 'overflow-x-clip'], {
  variants: {
    theme: {
      light: ['bg-primary-50', 'light-mode'],
      dark: ['bg-gray-800', 'dark-mode'],
    },
  },
});

const roboto = Roboto_Mono({
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

const Container: FC<ContainerProps> = ({ children }) => {
  const { theme } = useTheme();

  return <main className={twMerge(container({ theme }), roboto.className)}>{children}</main>;
};

export default Container;
