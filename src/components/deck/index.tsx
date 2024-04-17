import { cva } from 'class-variance-authority';
import { FC } from 'react';
import { useTheme } from 'contexts/DarkModeContext';
import { twMerge } from 'tailwind-merge';
import Image from 'components/image';

interface Card {
  image: string;
  heading: string;
  subhead: string;
}

interface DeckProps {
  heading: string;
  cards: Card[];
}

const deckContainer = cva(['relative', 'flex', 'flex-col', 'gap-4', 'overflow-x-hidden']);
const deckHeading = cva(['text-4xl', 'font-semibold'], {
  variants: {
    theme: {
      light: ['text-gray-800'],
      dark: ['text-gray-100'],
    },
  },
});
const cardContainer = cva(['flex', 'flex-row', 'gap-4', 'flex-wrap']);
const cardStyles = cva(
  [
    'flex',
    'flex-col',
    'w-full',
    'h-full',
    'rounded-lg',
    'overflow-hidden',
    'border-4',
    'shadow-md',
    'max-w-full',
    'md:max-w-72',
  ],
  {
    variants: {
      theme: {
        light: ['bg-gray-100', 'border-gray-400'],
        dark: ['bg-gray-600', 'border-gray-500'],
      },
    },
  },
);
const cardImage = cva(['w-full', 'h-32', 'object-center', 'object-cover', 'border-b-4'], {
  variants: {
    theme: {
      light: ['border-gray-400'],
      dark: ['border-gray-500'],
    },
  },
});
const cardContentContainer = cva(['p-4', 'flex', 'flex-col', 'gap-2']);
const cardHeadingStyles = cva(['text-2xl', 'font-bold'], {
  variants: {
    theme: {
      light: ['text-gray-700'],
      dark: ['text-gray-100'],
    },
  },
});
const cardSubheadStyles = cva(['text-md', 'font-normal'], {
  variants: {
    theme: {
      light: ['text-gray-600'],
      dark: ['text-gray-200'],
    },
  },
});

const Deck: FC<DeckProps> = ({ heading, cards }) => {
  const { theme } = useTheme();

  return (
    <div className={twMerge(deckContainer())}>
      <h2 className={twMerge(deckHeading({ theme }))}>{heading}</h2>
      <div className={twMerge(cardContainer())}>
        {cards.map(card => {
          const { heading: cardHeading, subhead, image } = card;

          return (
            <div key={cardHeading} className={twMerge(cardStyles({ theme }))}>
              <Image src={image} alt={cardHeading} width={300} height={300} className={twMerge(cardImage({ theme }))} />
              <div className={twMerge(cardContentContainer())}>
                <h3 className={twMerge(cardHeadingStyles({ theme }))}>{cardHeading}</h3>
                <p className={twMerge(cardSubheadStyles({ theme }))}>{subhead}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Deck;
