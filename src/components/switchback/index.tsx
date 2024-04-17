import { VariantProps, cva } from 'class-variance-authority';
import { FC } from 'react';
import { twMerge } from 'tailwind-merge';
import Image from 'components/image';
import { useTheme } from 'contexts/DarkModeContext';
import { multilineText } from 'utils/parsers/parseText';

export interface SwitchbackProps {
  heading: string;
  subhead: string;
  assets: string[];
  reverse?: boolean;
}

const switchbackContainer = cva(['flex', 'flex-col', 'md:flex-row', 'gap-2'], {
  variants: {
    reverse: {
      true: ['flex-col-reverse'],
      false: [],
    },
  },
});
const switchbackColumn = cva(['relative'], {
  variants: {
    type: {
      content: ['basis-full', 'flex', 'flex-col', 'gap-4'],
      asset: ['basis-full', 'flex', 'flex-wrap', 'justify-center'],
    },
  },
});
const switchbackImage = cva(['rounded-3xl', 'aspect-square', 'border-4', 'w-fit', 'h-fit', 'shadow-md'], {
  variants: {
    type: {
      1: ['z-10', 'scale-100'],
      2: ['z-20', 'scale-75'],
      3: ['z-30', 'scale-125'],
    },
    theme: {
      light: ['border-gray-400'],
      dark: ['border-gray-100'],
    },
  },
});

const switchbackHeader = cva(['text-4xl', 'font-semibold'], {
  variants: {
    theme: {
      light: ['text-gray-800'],
      dark: ['text-white'],
    },
  },
});
const switchbackSubhead = cva(['text-md', 'font-normal', 'flex', 'flex-col', 'gap-4'], {
  variants: {
    theme: {
      light: ['text-gray-700'],
      dark: ['text-gray-100'],
    },
  },
});

const Switchback: FC<SwitchbackProps> = ({ heading, subhead, assets, reverse }) => {
  const { theme } = useTheme();

  return (
    <div className={twMerge(switchbackContainer({ reverse }))}>
      <div className={twMerge(switchbackColumn({ type: 'content' }))}>
        <h2 className={twMerge(switchbackHeader({ theme }))}>{heading}</h2>
        <div className={twMerge(switchbackSubhead({ theme }))}>{multilineText(subhead)}</div>
      </div>
      <div className={twMerge(switchbackColumn({ type: 'asset' }))}>
        {assets?.map((asset, i) => (
          <Image
            src={asset}
            alt="portrait"
            key={asset}
            width={256}
            height={256}
            className={twMerge(switchbackImage({ type: i as VariantProps<typeof switchbackImage>['type'], theme }))}
          />
        ))}
      </div>
    </div>
  );
};

export default Switchback;
