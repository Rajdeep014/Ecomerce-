import React from 'react';
import { useProduct } from '../Context/ProductContext';
import { Link } from 'react-router-dom';

const CartIcon = () => {
  const { cart } = useProduct();
  const itemCount = cart.length;

  return (
    <Link to="/cart" className="relative flex items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 text-blue-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 3h2l.6 1.6L6.6 5H20a1 1 0 011 1v13a1 1 0 01-1 1H7.1a2 2 0 01-1.9-1.3L3 4H1v1m1-1h2l1.6 4.6L4.6 7h12.8l1.4-2.4M6 21a2 2 0 100-4 2 2 0 000 4zm12 0a2 2 0 100-4 2 2 0 000 4z"
        />
      </svg>
      {itemCount > 0 && (
        <span className="absolute top-0 right-0 -mt-1 -mr-1 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
          {itemCount}
        </span>
      )}
    </Link>
  );
};

export default CartIcon;
