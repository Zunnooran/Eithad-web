interface Props {
  children: React.ReactNode;
}

function Container({ children }: Props) {
  return <div className='mx-auto max-w-screen-xxl md:px-20 px-16 '>{children}</div>;
}

export default Container;
