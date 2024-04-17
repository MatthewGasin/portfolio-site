import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { IconDefinition, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { cva } from 'class-variance-authority';
import { FC } from 'react';
import Link, { LinkProps } from 'components/link';
import { twMerge } from 'tailwind-merge';
import ParseText from 'utils/parsers/parseText';
import { useTheme } from 'contexts/DarkModeContext';

type HeroIconType = 'github' | 'linkedin' | 'instagram' | 'star';

export interface HeroProps {
  eyebrow: string;
  heading: string;
  subhead: string;
  links: LinkProps[];
  icons: HeroIconType[];
}

interface HeroIcon {
  link: LinkProps;
  icon: HeroIconType;
}

const heroContainer = cva(['flex', 'flex-col', 'gap-2'], {
  variants: {
    theme: {
      light: ['bg-gray-200'],
      dark: ['bg-gray-600'],
    },
  },
});

const heroHeading = cva(['text-4xl', 'md:text-7xl', 'z-20']);
const heroEyebrow = cva(['text-2xl', 'z-20'], {
  variants: {
    theme: {
      light: ['text-gray-600'],
      dark: ['text-gray-200'],
    },
  },
});

const heroSubhead = cva(['text-3xl', 'md:text-6xl', 'z-20'], {
  variants: {
    theme: {
      light: ['text-gray-700'],
      dark: ['text-gray-200'],
    },
  },
});

const iconRow = cva(['flex', 'flex-row', 'gap-8', 'h-12', 'pt-6', 'z-20']);

const heroIcon = cva(['transition-all', 'duration-300', 'ease-in-out', 'w-8', 'h-8', 'hover:scale-150'], {
  variants: {
    theme: {
      light: ['text-gray-500', 'hover:text-black'],
      dark: ['text-gray-400', 'hover:text-white'],
    },
  },
});

const heroGradient = cva(['absolute', 'blur-3xl', 'rounded-full', 'z-10', 'opacity-50'], {
  variants: {
    location: {
      bottomLeft: ['bottom-0', 'left-24', 'h-32', 'md:h-96', 'w-[40vw]'],
      bottomRight: ['bottom-24', 'left-64', 'md:left-96', 'h-32', 'md:h-96', 'w-[40vw]'],
      topCenter: ['-top-64', 'left-1/2', '-translate-x-1/2', 'h-96', 'w-screen'],
    },
  },
});

const heroGradientMagenta = cva([], {
  variants: {
    theme: {
      light: ['bg-magenta-100'],
      dark: ['bg-magenta-300'],
    },
  },
});
const heroGradientSapphire = cva([], {
  variants: {
    theme: {
      light: ['bg-sapphire-100'],
      dark: ['bg-sapphire-300'],
    },
  },
});

const heroGradientPrimary = cva([], {
  variants: {
    theme: {
      light: ['bg-blue-300'],
      dark: ['bg-gray-700'],
    },
  },
});

const Hero: FC<HeroProps> = ({ eyebrow, heading, subhead, links, icons }) => {
  const { theme } = useTheme();

  const heroIcons: HeroIcon[] = links.map(
    (link, i) => ({ link, icon: icons.length > i ? icons[i] : 'star' } as HeroIcon),
  );

  const iconMap = new Map<HeroIconType, IconDefinition>([
    ['star', faStar],
    ['github', faGithub],
    ['linkedin', faLinkedin],
    ['instagram', faInstagram],
  ]);

  return (
    <div className={twMerge(heroContainer())}>
      <p className={twMerge(heroEyebrow({ theme }))}>{eyebrow}</p>
      <h1 className={twMerge(heroHeading())}>{ParseText(heading)}</h1>
      <p className={twMerge(heroSubhead({ theme }))}>{subhead}</p>
      <div className={twMerge(iconRow())}>
        {heroIcons &&
          heroIcons.map(({ link, icon }) => (
            <Link key={icon} {...link}>
              <FontAwesomeIcon icon={iconMap.get(icon) || faStar} className={twMerge(heroIcon({ theme }))} />
            </Link>
          ))}
      </div>
      <div className={twMerge(heroGradient({ location: 'bottomLeft' }), heroGradientSapphire({ theme }))} />
      <div className={twMerge(heroGradient({ location: 'bottomRight' }), heroGradientMagenta({ theme }))} />
      <div className={twMerge(heroGradient({ location: 'topCenter' }), heroGradientPrimary({ theme }))} />
    </div>
  );
};

export default Hero;
