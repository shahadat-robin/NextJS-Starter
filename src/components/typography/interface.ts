import type { ClassValue } from 'clsx';
import type { PropsWithChildren } from 'react';

// the possible heading, paragraph, and other sizes.
type Heading = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
type Paragraph = 'p';

interface ITypography extends PropsWithChildren {
  variant?: Heading | Paragraph | 'span';
  className?: ClassValue;
}

export default ITypography;
