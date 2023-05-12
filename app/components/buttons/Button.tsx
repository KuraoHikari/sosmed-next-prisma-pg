'use client';

import { IconType } from 'react-icons';

interface ButtonProps {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  icon?: IconType;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled,
  outline,
  small,
  icon: Icon,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`
        relative
        disabled:opacity-70
        disabled:cursor-not-allowed
        rounded-lg

        hover:opacity-80
        dark:hover:bg-slate-600

        dark:hover:border-rose-300
        transition
        w-full
        ${
          outline
            ? 'dark:bg-slate-800 bg-white'
            : 'dark:bg-slate-700 bg-rose-500'
        }
        ${
          outline
            ? 'dark:border-rose-400 border-black'
            : 'dark:border-slate-800 border-rose-500'
        }
        ${outline ? 'dark:text-white text-black' : 'dark:text-white text-white'}
        ${small ? 'text-sm' : 'text-md'}
        ${small ? 'py-1' : 'py-3'}
        ${small ? 'font-light' : 'font-semibold'}
        ${small ? 'border-[1px]' : 'border-2'}
      `}
    >
      {Icon && (
        <Icon
          size={24}
          className="
            absolute
            left-4
            top-3
          "
        />
      )}
      {label}
    </button>
  );
};

export default Button;
