import twc from 'tw-classnames';

import { IHeadingProps } from './IHeading';

function Heading({ className, heading = '', ...rest }: IHeadingProps) {
  return (
    <h1
      className={twc(
        'tracking-wider uppercase font-bold md:text-[48px] text-2xl md:leading-[56px] leading-7 text-secondary',
        className
      )}
      {...rest}
    >
      {heading}
    </h1>
  );
}

export default Heading;
