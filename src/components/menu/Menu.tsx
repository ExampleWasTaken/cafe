import { Container } from '../util/Container';
import { MenuItem } from './MenuItem';

export const Menu = () => {
  return (
    <Container className='my-5'>
      <h1 className="font-light text-xl text-center">Menü</h1>
      <div className="mt-5 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <MenuItem
          name="YumYum"
          isVegetarian
          price="1,50"
          description="Legga"
        />
        <MenuItem
          name="YumYum"
          isVegan
          price="1,50"
          description="Legga"
        />
        <MenuItem
          name="YumYum"
          isVegetarian
          price="1,50"
          description="Legga"
        />
        <MenuItem
          name="YumYum"
          isVegetarian
          price="1,50"
          description="Legga"
        />
      </div>
    </Container>
  );
};
