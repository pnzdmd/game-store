import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteItemFromCart, setItemInCart } from '../../redux/cart/reduce';
import Button from '../button/button';

import './game-buy.css';

const GameBuy = ({ game }) => {
  const { id, price } = game;
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.itemsInCart);
  const isItemInCart = items.some((item) => item.id === id);

  const handleClick = (e) => {
    e.stopPropagation();
    if (isItemInCart) {
      dispatch(deleteItemFromCart(id));
    } else {
      dispatch(setItemInCart(game));
    }
  };

  return (
    <div className='game-buy'>
      <span className='game-buy__price'>{price} руб.</span>
      <Button
        type={isItemInCart ? 'secondary' : 'primary'}
        onClick={handleClick}
      >
        {isItemInCart ? 'Убрать из корзину' : 'В корзину'}
      </Button>
    </div>
  );
};

export default GameBuy;
