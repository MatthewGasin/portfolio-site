import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTheme } from 'contexts/DarkModeContext';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const widgetStyles = cva(['w-8', 'h-8', 'md:w-16', 'md:h-16', 'fixed', 'bottom-4', 'right-4', 'rounded-full'], {
  variants: {
    theme: {
      light: ['bg-yellow-50'],
      dark: ['bg-blue-800'],
    },
  },
});

const iconContainer = cva(['relative', 'w-full', 'h-full']);

const themeIcon = cva(
  [
    'transition-all',
    'duration-300',
    'ease-in-out',
    'absolute',
    'left-1/2',
    'top-1/2',
    '-translate-x-1/2',
    '-translate-y-1/2',
  ],
  {
    variants: {
      isActive: {
        true: ['opacity-100'],
        false: ['opacity-0'],
      },
      type: {
        sun: ['text-yellow-400'],
        moon: ['text-gray-500'],
      },
    },
  },
);

const Widget = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      className={twMerge(widgetStyles({ theme }))}
      onClick={() => {
        setTheme && setTheme(theme === 'light' ? 'dark' : 'light');
      }}
    >
      <div className={twMerge(iconContainer())}>
        <FontAwesomeIcon icon={faSun} className={twMerge(themeIcon({ isActive: theme === 'light', type: 'sun' }))} />
        <FontAwesomeIcon icon={faMoon} className={twMerge(themeIcon({ isActive: theme === 'dark', type: 'moon' }))} />
      </div>
    </button>
  );
};

export default Widget;
