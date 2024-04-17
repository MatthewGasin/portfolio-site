import { VariantProps, cva } from 'class-variance-authority';
import type { FC, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';
import { useTheme } from 'contexts/DarkModeContext';
import { useIntersectionObserver } from 'usehooks-ts';

interface SectionProps {
  id: string;
  index: number;
  background?: string;
  size?: string;
  children?: ReactNode;
}

const sectionStyles = cva(['w-full', 'flex', 'justify-center', 'overflow-x-hidden'], {
  variants: {
    background: {
      magentalight: ['bg-magenta-50'],
      magentadark: ['bg-magenta-800'],
      primarylight: ['bg-primary-50'],
      priamrydark: ['bg-primary-800'],
      sapphirelight: ['bg-sapphire-50'],
      sapphiredark: ['bg-sapphire-800'],
    },
    isActive: {
      true: ['active'],
      false: [],
    },
    size: {
      full: ['py-32', 'h-screen'],
      lg: ['py-32'],
      md: ['py-16'],
      sm: ['py-0'],
    },
    transition: {
      odd: ['section-odd'],
      even: ['section-even'],
    },
    isFirst: {
      true: ['section-first'],
      false: [],
    },
  },
});

const sectionContainer = cva(['container', 'max-w-screen-lg', 'px-2', 'lg:px-0', 'relative']);

const Section: FC<SectionProps> = ({ id, index, background = 'primarylight', size = 'lg', children }) => {
  const { theme } = useTheme();
  const bg = (`${background}${theme}` as VariantProps<typeof sectionStyles>['background']) || 'primarylight';
  const s = (size as VariantProps<typeof sectionStyles>['size']) || 'lg';
  const { isIntersecting, ref } = useIntersectionObserver({
    threshold: 0.1,
  });

  const transition = index % 2 === 0 ? 'odd' : 'even';

  return (
    <section
      id={id}
      key={id}
      ref={ref}
      className={twMerge(
        sectionStyles({ background: bg, isActive: isIntersecting, size: s, transition, isFirst: index === 0 }),
      )}
    >
      <div className={twMerge(sectionContainer())}>{children}</div>
    </section>
  );
};

export default Section;
