import { cva } from 'class-variance-authority';
import type { FC } from 'react';
import { useTheme } from 'contexts/DarkModeContext';
import { twMerge } from 'tailwind-merge';

interface FooterProps {
  content: string;
}

const footer = cva(
  ['w-full', 'h-32', 'px-8', 'py-4', 'flex', 'justify-center', 'transition-all', 'duration-300', 'ease-in-out'],
  {
    variants: {
      theme: {
        light: ['bg-primary-50'],
        dark: ['bg-gray-800'],
      },
    },
  },
);

const footerWrapper = cva([
  'container',
  'w-full',
  'max-w-7xl',
  'flex',
  'flex-col',
  'sm:flex-row',
  'justify-between',
  'items-center',
]);

const footerContent = cva(['w-full', 'text-sm', 'font-light', 'text-center'], {
  variants: {
    theme: {
      light: ['text-gray-600'],
      dark: ['text-gray-200'],
    },
  },
});

const Footer: FC<FooterProps> = ({ content, ...props }) => {
  const { theme } = useTheme();

  return (
    <div className={twMerge(footer({ theme }))} {...props}>
      <div className={twMerge(footerWrapper())}>
        <p className={twMerge(footerContent({ theme }))}>{content}</p>
      </div>
    </div>
  );
};

export default Footer;
