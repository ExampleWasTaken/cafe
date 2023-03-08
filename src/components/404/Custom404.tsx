import { useNavigate } from 'react-router-dom';
import { Button } from '../util/Button';
import { Container } from '../util/Container';
import { Navbar } from '../util/Navbar/Navbar';

export const Custom404 = () => {

  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="px-10 flex flex-col items-center">
        <div className="fixed h-screen flex flex-col justify-evenly items-center">
          <h1 className="text-7xl font-semibold">UPPS!</h1>
          <p className='text-center'>Die gewünschte Seite ist leider nicht verfügbar.</p>
          <Button
            onClick={() => navigate('/')}
            className='bg-black text-white rounded-full'
          >
          Zur Startseite
          </Button>
        </div>
      </div>
    </>
  );
};
