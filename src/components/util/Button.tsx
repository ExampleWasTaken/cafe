import { ReactNode } from 'react';

interface ButtonProps {
  onClick: () => void;
  className: string;
  children: ReactNode;
}

export const Button = ({ onClick, className, children }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`rounded px-4 py-2 ${className}`}
    >
      {children}
    </button>
  );
};
