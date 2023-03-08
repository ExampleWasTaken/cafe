import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
}

export const Logo = ({ className }: LogoProps) => {
  return (
    <Link to="/">
      <h1 className={`bg-gradient-to-br from-startColor to-endColor text-transparent bg-clip-text font-extrabold text-2xl ${className}`}>SchülerCAFÉ</h1>
    </Link>
  );
};
