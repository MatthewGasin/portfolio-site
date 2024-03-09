import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { cva } from 'class-variance-authority';
import type { FC } from 'react';
import { useTheme } from 'contexts/DarkModeContext';
import { twMerge } from 'tailwind-merge';

interface FooterProps {
  content: string;
}

const footer = cva(['w-full', 'h-32', 'px-8', 'py-4', 'flex', 'justify-center'], {
  variants: {
    theme: {
      light: ['bg-gray-400'],
      dark: ['bg-gray-600'],
    },
  },
});

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

const footerContent = cva(['text-sm'], {
  variants: {
    theme: {
      light: ['text-gray-100'],
      dark: ['text-gray-100'],
    },
  },
});

const themeWrapper = cva(['flex', 'items-center', 'gap-2']);
const themeIcon = cva(['transition-all', 'duration-300', 'ease-in-out'], {
  variants: {
    isActive: {
      true: ['text-yellow-400'],
      false: ['text-gray-500'],
    },
  },
});

const checkboxWrapper = cva(['relative inline-flex cursor-pointer items-center']);
const checkboxInput = cva(['peer sr-only']);
const darkModeCheckbox = cva([
  "peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:start-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-4 peer-focus:ring-blue-300 rtl:peer-checked:after:-translate-x-full dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800",
]);

const Footer: FC<FooterProps> = ({ content, ...props }) => {
  const { theme, setTheme } = useTheme();

  return (
    <div className={twMerge(footer({ theme }))} {...props}>
      <div className={twMerge(footerWrapper())}>
        <p className={twMerge(footerContent({ theme }))}>{content}</p>
        <div className={twMerge(themeWrapper())}>
          <FontAwesomeIcon icon={faSun} className={twMerge(themeIcon({ isActive: theme === 'light' }))} />
          <label className={twMerge(checkboxWrapper())}>
            <input
              type="checkbox"
              value=""
              className={twMerge(checkboxInput())}
              checked={theme !== 'light'}
              onChange={() => {
                setTheme && setTheme(theme === 'light' ? 'dark' : 'light');
              }}
            />
            <div className={twMerge(darkModeCheckbox())}></div>
          </label>
          <FontAwesomeIcon icon={faMoon} className={twMerge(themeIcon({ isActive: theme === 'dark' }))} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
