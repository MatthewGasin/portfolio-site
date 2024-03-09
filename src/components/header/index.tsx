import { cva } from 'class-variance-authority';
import type { FC } from 'react';
import { useTheme } from 'contexts/DarkModeContext';
import { twMerge } from 'tailwind-merge';
import type { LinkProps } from 'components/link';
import Link from 'components/link';

interface HeaderProps {
  links: LinkProps[];
}

const header = cva(['sticky', 'top-0', 'w-full', 'px-8', 'py-4', 'shadow-sm', 'flex', 'justify-center'], {
  variants: {
    theme: {
      light: ['bg-gray-200'],
      dark: ['bg-gray-600'],
    },
  },
});

const headerWrapper = cva([
  'container',
  'w-full',
  'max-w-7xl',
  'flex',
  'flex-col',
  'sm:flex-row',
  'justify-between',
  'items-center',
]);

const headerLink = cva(['flex', 'gap-4', 'items-center']);
const headerLinkContent = cva(['transition-all', 'duration-300', 'ease-in-out'], {
  variants: {
    type: {
      title: ['text-3xl'],
      standard: ['text-md'],
    },
    theme: {
      light: ['text-gray-700', 'hover:text-yellow-800'],
      dark: ['text-gray-100', 'hover:text-yellow-100'],
    },
  },
});
const linkWrapper = cva(['flex', 'gap-8']);

const Header: FC<HeaderProps> = ({ links, ...props }) => {
  const { theme } = useTheme();

  return (
    <header className={twMerge(header({ theme }))} {...props}>
      <div className={twMerge(headerWrapper())}>
        <Link className={twMerge(headerLink())} href="/" isInternalLink={true}>
          <p className={twMerge(headerLinkContent({ theme, type: 'title' }))}>Shot Calculator</p>
        </Link>
        <div className={twMerge(linkWrapper())}>
          {links &&
            links.map(link => (
              <Link {...link} key={link.id} className={twMerge(headerLinkContent({ theme, type: 'standard' }))}>
                {link.children}
              </Link>
            ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
