import Button from 'components/core-ui/button/button';
import Container from 'components/core-ui/container/container';

function Hero() {
  return (
    <div id='home' className='intro '>
      <Container>
        <div className='h-[85vh] my-auto flex items-center'>
          <div>
            <h1 className='text-white md:font-bold font-semibold md:text-5xl text-2xl md:max-w-lg text-center'>
              ProFessional Import Exports and CHA
            </h1>
            <center>
              <Button className='py-2 mt-2 hover:bg-sky-700'>Enquire Now</Button>
            </center>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Hero;
