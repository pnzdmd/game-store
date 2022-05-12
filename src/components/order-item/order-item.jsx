import React from 'react';
import { useDispatch } from 'react-redux';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import GameCover from '../game-cover/game-cover';
import { deleteItemFromCart } from '../../redux/cart/reduce';

import './order-item.css';

const OrderItem = ({ game }) => {
  const { id, image, price, title } = game;

  const dispatch = useDispatch();

  const hanldeClick = () => {
    dispatch(deleteItemFromCart(id));
  };

  return (
    <div className='order-item'>
      <div className='order-item__cover'>
        <GameCover image={image} />
      </div>
      <div className='order-item__title'>
        <span>{title}</span>
      </div>
      <div className='order-item__price'>
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

export default OrderItem;
