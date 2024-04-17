import { cva } from 'class-variance-authority';
import { FC, ReactNode, useEffect, useState } from 'react';
import { useTheme } from 'contexts/DarkModeContext';
import { twMerge } from 'tailwind-merge';

interface HeaderProps {
  children?: ReactNode;
}

const header = cva(
  [
    'fixed',
    'top-0',
    'w-full',
    'px-8',
    'py-4',
    'shadow-sm',
    'flex',
    'z-50',
    'justify-center',
    'transition-opacity',
    'duration-300',
    'ease-in-out',
  ],
  {
    variants: {
      theme: {
        light: ['bg-gray-200'],
        dark: ['bg-gray-600'],
      },
      hidden: {
        true: ['opacity-0'],
        false: ['opacity-100'],
      },
    },
  },
);

const headerRow = cva(['flex', 'flex-row', 'gap-4', 'md:gap-12', 'flex-wrap']);

const headerEntry = cva(
  [
    'font-normal',
    'text-xl',
    'capitalize',
    'relative',
    'after:content-[ ]',
    'after:origin-left',
    'after:h-1',
    'after:rounded-xl',
    'after:w-full',
    'after:absolute',
    'after:left-0',
    'after:-bottom-1',
    'after:transition-transform',
    'after:duration-300',
    'after:ease-in-out',
  ],
  {
    variants: {
      theme: {
        light: ['text-gray-700', 'hover:gray-800', 'after:bg-gray-800'],
        dark: ['text-gray-100', 'hover:text-white', 'after:bg-white'],
      },
      isActive: {
        true: ['after:scale-x-100'],
        false: ['after:scale-x-0'],
      },
      hidden: {
        true: ['hidden'],
        false: ['visible'],
      },
    },
  },
);

const Header: FC<HeaderProps> = ({ ...props }) => {
  const { theme } = useTheme();

  const [navItems, setNavItems] = useState<string[]>([]);
  const [active, setActive] = useState<string>();
  const [hidden, setHidden] = useState(true);

  const hiddenThreshold = 64;
  const handleScroll = () => {
    setNavItems([...document.querySelectorAll('section')].map(node => node.id));
    setActive(document.querySelector('.active')?.getAttribute('id') || '');
    setHidden(window.scrollY < hiddenThreshold);
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const focusSection = (sectionId: string) => {
    document.querySelector(`#${sectionId}`)?.scrollIntoView();
  };

  return (
    <header className={twMerge(header({ theme, hidden }))} aria-hidden={hidden} {...props}>
      <nav>
        <ul className={twMerge(headerRow())}>
          {navItems.map(entry => (
            <li key={entry} className={twMerge(headerEntry({ theme, isActive: active === entry, hidden }))}>
              <a
                href="#"
                onClick={e => {
                  e.preventDefault();
                  focusSection(entry);
                  handleScroll();
                }}
              >
                {entry}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
