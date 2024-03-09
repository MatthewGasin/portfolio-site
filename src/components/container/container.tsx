import { cva } from 'class-variance-authority';
import type { ReactNode } from 'react';
import type { FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { useTheme } from 'contexts/DarkModeContext';

interface ContainerProps {
  children?: ReactNode;
}

const container = cva(['flex', 'min-h-screen', 'flex-col', 'items-center', 'justify-between'], {
  variants: {
    theme: {
      light: ['bg-gray-100'],
      dark: ['bg-gray-800'],
    },
  },
});

const Container: FC<ContainerProps> = ({ children }) => {
  const { theme } = useTheme();

  return <main className={twMerge(container({ theme }))}>{children}</main>;
};

export default Container;
