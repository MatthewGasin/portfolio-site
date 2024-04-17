import type { FC, HTMLAttributes, ReactNode } from 'react';
import NextLink from 'next/link';

export interface LinkProps extends HTMLAttributes<HTMLAnchorElement> {
  id?: string;
  href: string;
  children?: ReactNode;
  isInternalLink: boolean;
}

const Link: FC<LinkProps> = ({ href, isInternalLink, children, ...props }) => (
  <>
    {isInternalLink && (
      <NextLink href={href} {...props}>
        {children}
      </NextLink>
    )}
    {!isInternalLink && (
      <a href={href} rel="noreferrer noopener" target="_blank" {...props}>
        {children}
      </a>
    )}
  </>
);

export default Link;
