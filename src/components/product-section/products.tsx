import AntCard from 'components/core-ui/card/ant-card';
import Heading from 'components/core-ui/heading/heading';

import Img1 from 'assets/images/himalayan-salt-wooden-spoon.jpg';
import Img2 from 'assets/images/himalayan-salt-wooden-spoon.jpg';
import Img3 from 'assets/images/pexels-karolina-grabowska-4871083.jpg';
import Img4 from 'assets/images/stephan-hinni-5sCg399_BWY-unsplash.jpg';

const products = [
  {
    title: 'pinkSalt',
    desc: 'pink salt Eatable',
    imgUrl: Img1,
  },
  {
    title: 'pinkSalt',
    desc: 'PInk Salt Bricks',
    imgUrl: Img2,
  },
  {
    title: 'pink salt',
    desc: 'pin Salt soaps',
    imgUrl: Img3,
  },
  {
    title: 'pink salt',
    desc: 'pin Salt soaps',
    imgUrl: Img4,
  },
];

function Products() {
  return (
    <div id='product' className='mt-12 md:pt-5 md:pb-15'>
      <center>
        <Heading heading='Products' />
      </center>
      <div className=' grid grid-cols-12 gap-4 mt-10                                                                                                                                                                                       '>
        {products.map((product) => (
          <div className='md:col-span-6 col-span-12 flex justify-center'>
            <AntCard key={product.title} title={product.title} desc={product.desc} imgUrl={product.imgUrl} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
