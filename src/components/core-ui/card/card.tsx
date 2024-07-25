import twc from 'tw-classnames';

import { ICardProps } from './ICard';

function Card({ className, heading = '', children, headingClassName, ...rest }: ICardProps) {
  return (
    <div className={twc('bg-gray-white w-max text-secondary rounded-md', className)} {...rest}>
      {children}
      {heading && (
        <h2 className={twc('md:py-6 py-4 text-xl md:leading-[56px] leading-9', headingClassName)}>{heading}</h2>
      )}
    </div>
  );
}

export default Card;
