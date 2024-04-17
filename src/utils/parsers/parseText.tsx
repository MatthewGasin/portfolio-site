import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';
import { useTheme } from 'contexts/DarkModeContext';

const highlightSegment = cva(['transition-all', 'duration-300', 'ease-in-out', 'highlight-text'], {
  variants: {
    theme: {
      light: [
        'inline-block bg-gradient-to-r from-sapphire-300 via-primary-300 to-magenta-300 bg-clip-text text-transparent',
      ],
      dark: [
        'inline-block bg-gradient-to-r from-sapphire-300 via-primary-100 to-magenta-300 bg-clip-text text-transparent',
      ],
    },
  },
});

const standardSegment = cva([], {
  variants: {
    theme: {
      light: ['text-gray-700'],
      dark: ['text-gray-100'],
    },
  },
});

const ParseText = (text: string) => {
  const { theme } = useTheme();
  const segments = text.split('*');

  return (
    <p>
      {segments.map((seg, i) =>
        i % 2 !== 0 ? (
          <span key={seg} className={twMerge(highlightSegment({ theme }))}>
            {seg}
          </span>
        ) : (
          <span key={seg} className={twMerge(standardSegment({ theme }))}>
            {seg}
          </span>
        ),
      )}
    </p>
  );
};

export const multilineText = (text: string) => {
  const segments = text.split('<br>');

  return (
    <>
      {segments.map((i, key) => (
        <p key={key}>{i}</p>
      ))}
    </>
  );
};

export default ParseText;
