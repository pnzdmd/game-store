import React from 'react';
import { BiCartAlt } from 'react-icons/bi';
import './cart-block.css';

const CartBlock = () => {
  return (
    <div className='cart-block'>
      <BiCartAlt size={25} className='cart-block__icon' />
      <span className='cart-block__total-price'>2323 руб.</span>
    </div>
  );
};

export default CartBlock;
