import React from 'react';
import { useDispatch } from 'react-redux';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import GameCover from '../game-cover/game-cover';
import { deleteItemFromCart } from '../../redux/cart/reduce';

import './order-item.css';

const OrderItem = ({ game }) => {
  const dispatch = useDispatch();

  const hanldeClick = () => {
    dispatch(deleteItemFromCart(game.id));
  };

  return (
    <div className='order-item'>
      <div className='order-item__cover'>
        <GameCover image={game.image} />
      </div>
      <div className='order-item__title'>
        <span>{game.title}</span>
      </div>
      <div className='order-item__price'>
        <span>{game.price} руб.</span>
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
