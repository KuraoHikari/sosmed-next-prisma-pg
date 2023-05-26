'use client';

interface MenuItemProps {
  onClick: () => void;
  label: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ onClick, label }) => {
  return (
    <div
      onClick={onClick}
      className="
      border-b-2 
      border-transparent 
      cursor-pointer
      mx-1.5

      dark:hover:text-gray-200
      
      hover:text-gray-800 
      hover:border-blue-500  
      
      sm:mx-6"
    >
      {label}
    </div>
  );
};

export default MenuItem;
