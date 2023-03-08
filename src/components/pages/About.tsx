import { Navbar } from '../util/navbar/Navbar';
import { Container } from '../util/Container';

export const About = () => {
  return (
    <>
      <Navbar />
      <Container>
        <img
          className='mt-5 border-black border'
          src="./assets/img/harold.jpg"
          alt="Harold"
        />
      </Container>
    </>
  );
};
