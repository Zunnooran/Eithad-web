import { Card } from 'antd';
import Meta from 'antd/es/card/Meta';

import Button from '../button/button';
import { IAntCardProps } from './ICard';

function AntCard({ imgUrl, btnText, title, desc }: IAntCardProps) {
  console.log(imgUrl);
  return (
    <Card
      hoverable
      style={{ width: 280 }}
      cover={<img className='h-[200px]' alt='example' src={imgUrl} />}
      actions={[<Button className='py-2'>{btnText ? btnText : 'Enquire Now'}</Button>]}
    >
      <Meta title={title} description={desc} />
    </Card>
  );
}

export default AntCard;
