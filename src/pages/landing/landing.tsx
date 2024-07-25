import { Team } from 'components/Team/team';
import { About } from 'components/about/about';
import ContactUs from 'components/contact/contact';
import Container from 'components/core-ui/container/container';
import Hero from 'components/hero-section/hero';
import Products from 'components/product-section/products';

function Landing() {
  return (
    <>
      <Hero />
      <Container>
        <Products />
        <Team />
        <About />
        <ContactUs />
      </Container>
    </>
  );
}

export default Landing;
