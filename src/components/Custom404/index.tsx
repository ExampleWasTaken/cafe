import { Link } from 'react-router-dom';

export const Custom404 = () => {
  return (
    <div className="">
      Couldn&apos;t find requested site! <br />
      <Link to="/">Home page</Link>
    </div>
  );
};
