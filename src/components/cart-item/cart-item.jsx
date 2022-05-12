import React from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { deleteItemFromCart } from '../../redux/cart/reduce';

import './cart-item.css';

const CartItem = ({ game }) => {
  const { title, price, id } = game;

  const dispatch = useDispatch();

  const hanldeClick = () => {
    dispatch(deleteItemFromCart(game.id));
  };

  return (
    <div className='cart-item'>
      <span>{title}</span>
      <div className='cart-item__price'>
        <span>{price} руб.</span>
        <AiOutlineCloseCircle
          size={25}
          className='cart-item__delete-icon'
          onClick={hanldeClick}
        />
      </div>
    </div>
  );
};

export default CartItem;
