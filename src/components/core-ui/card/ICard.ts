export interface ICardProps extends React.HTMLAttributes<HTMLDivElement> {
  heading?: string;
  headingClassName?: string;
  children?: React.ReactNode;
}
export interface IAntCardProps {
  title?: string;
  btnText?: string;
  imgUrl?: string;
  desc?: string;
}
