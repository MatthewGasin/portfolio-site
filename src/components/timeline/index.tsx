import { cva } from 'class-variance-authority';
import { FC } from 'react';
import { useTheme } from 'contexts/DarkModeContext';
import { twMerge } from 'tailwind-merge';

export interface TimelineEntry {
  date: string;
  title: string;
  location: string;
  description: string;
  gap?: number;
}

interface TimelineProps {
  heading: string;
  entries: TimelineEntry[];
}

const timelineContainer = cva(['flex', 'flex-col', 'gap-8', 'justify-center']);
const timelineEntryContainer = cva(['flex', 'flex-col', 'relative', 'gap-24']);

const timelineHeading = cva(['text-4xl', 'font-semibold', 'text-center'], {
  variants: {
    theme: {
      light: ['text-gray-800'],
      dark: ['text-gray-100'],
    },
  },
});

const timelineBar = cva(['absolute', 'left-1/2', 'mr-0.5', 'w-1', 'h-full', 'rounded-full'], {
  variants: {
    theme: {
      light: ['bg-blue-700'],
      dark: ['bg-blue-300'],
    },
  },
});

const timelineEntryRow = cva(['grid', 'grid-cols-2', 'gap-8']);

const timelineEntryColumn = cva(['block', 'p-4'], {
  variants: {
    isReversed: {
      true: ['order-1'],
      false: ['order-2'],
    },
    type: {
      date: ['flex', 'items-center', 'md:block'],
      desc: ['rounded-lg', 'border-2', 'shadow-md'],
    },
  },
});

const timelineContentColumn = cva([], {
  variants: {
    theme: {
      light: ['bg-gray-100', 'border-blue-100'],
      dark: ['bg-gray-600', 'border-blue-600'],
    },
  },
});

const timelineDateContainer = cva(['w-full', 'flex'], {
  variants: {
    isReversed: {
      true: ['justify-end'],
      false: ['justify-start'],
    },
  },
});
const timelineDate = cva(['text-lg', 'relative', 'font-semibold', 'w-fit'], {
  variants: {
    theme: {
      light: ['text-gray-800'],
      dark: ['text-gray-100'],
    },
  },
});

const dateUnderline = cva(['absolute', 'w-full', 'rounded-2xl', 'h-1'], {
  variants: {
    theme: {
      light: ['bg-gray-700'],
      dark: ['bg-gray-100'],
    },
  },
});

const timelineEntryContent = cva([], {
  variants: {
    theme: {
      light: ['text-gray-700'],
      dark: ['text-gray-100'],
    },
    type: {
      title: ['text-xl', 'font-semibold'],
      location: ['text-lg', 'font-normal', 'italic'],
      description: ['text-md'],
    },
  },
});

const Timeline: FC<TimelineProps> = ({ heading, entries }) => {
  const { theme } = useTheme();

  return (
    <div className={twMerge(timelineContainer())}>
      <h2 className={twMerge(timelineHeading({ theme }))}>{heading}</h2>
      <ul className={twMerge(timelineEntryContainer())}>
        <div className={twMerge(timelineBar({ theme }))} />
        {entries.map((entry, i) => {
          const { date, title, location, description, gap } = entry;
          const isReversed = i % 2 === 0;

          return (
            <>
              <li key={title} className={twMerge(timelineEntryRow())}>
                <div className={twMerge(timelineEntryColumn({ isReversed, type: 'date' }))}>
                  <div className={twMerge(timelineDateContainer({ isReversed }))}>
                    <div className={twMerge(timelineDate({ theme }))}>
                      {date}
                      <div className={twMerge(dateUnderline({ theme }))} />
                    </div>
                  </div>
                </div>
                <div
                  className={twMerge(
                    timelineEntryColumn({ isReversed: !isReversed, type: 'desc' }),
                    timelineContentColumn({ theme }),
                  )}
                >
                  <h3 className={twMerge(timelineEntryContent({ theme, type: 'title' }))}>{title}</h3>
                  <h4 className={twMerge(timelineEntryContent({ theme, type: 'location' }))}>{location}</h4>
                  <p className={twMerge(timelineEntryContent({ theme, type: 'description' }))}>{description}</p>
                </div>
              </li>
              {gap &&
                Array(gap)
                  .fill(gap)
                  .map((e, index) => <div key={`${e}${index}`}></div>)}
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default Timeline;
