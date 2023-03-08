import { Navbar } from '../util/Navbar/Navbar';
import { Container } from '../util/Container';

export const About = () => {
  return (
    <>
      <Navbar />
      <Container>
        <img
          className='mt-5 border-slate-500 border'
          src="./assets/img/harold.jpg"
          alt="Harold"
        />
      </Container>
    </>
  );
};
