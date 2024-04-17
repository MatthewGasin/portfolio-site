import { cva } from 'class-variance-authority';
import { FC } from 'react';
import { useTheme } from 'contexts/DarkModeContext';
import { twMerge } from 'tailwind-merge';

export interface ListProps {
  heading: string;
  items: string[];
}

const listContainer = cva(['flex', 'flex-col', 'gap-4', 'lg:gap-12', 'justify-center']);
const listHeading = cva(['text-4xl', 'text-center'], {
  variants: {
    theme: {
      light: ['text-gray-800'],
      dark: ['text-gray-100'],
    },
  },
});
const listItemContainer = cva(['flex', 'flex-col', 'gap-1']);
const listRow = cva(['flex', 'flex-row', 'justify-center', 'gap-1']);
const listItem = cva(
  [
    'text-md',
    'md:text-lg',
    'w-fit',
    'h-fit',
    'rounded-md',
    'py-1',
    'px-2',
    'hover:px-4',
    'transition-all',
    'duration-300',
    'ease-in-out',
  ],
  {
    variants: {
      theme: {
        light: ['bg-gray-400', 'text-white'],
        dark: ['bg-gray-400', 'text-white'],
      },
    },
  },
);

const List: FC<ListProps> = ({ heading, items }) => {
  const { theme } = useTheme();
  const gridPattern = [3, 4, 5, 4];
  const buckets: string[][] = [];
  let curBucket: string[] = [];
  items.forEach(item => {
    curBucket.push(item);
    if (curBucket.length >= gridPattern[buckets.length % gridPattern.length]) {
      buckets.push(curBucket);
      curBucket = [];
    }
  });

  return (
    <div className={twMerge(listContainer())}>
      {heading && <h2 className={twMerge(listHeading({ theme }))}>{heading}</h2>}
      <div className={twMerge(listItemContainer())}>
        {buckets.map((bucket, index) => (
          <div key={index} className={twMerge(listRow())}>
            {bucket.map(item => (
              <p key={item} className={twMerge(listItem({ theme }))}>
                {item}
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
