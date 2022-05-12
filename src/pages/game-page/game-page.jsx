import React from 'react';
import { useSelector } from 'react-redux';
import GameBuy from '../../components/game-buy/game-buy';
import GameCover from '../../components/game-cover/game-cover';
import GameGenre from '../../components/game-genre/game-genre';

import './game-page.css';

const GamePage = () => {
  const game = useSelector((state) => state.game.currentGame);

  const { title, video, image, genres, description } = game;

  if (!game) {
    return null;
  }

  return (
    <div className='game-page'>
      <h1 className='game-page__title'>{title}</h1>
      <div className='game-page__content'>
        <div className='game-page__left'>
          <iframe
            src={video}
            title='Yotube Video Player'
            frameBorder='0'
            width='90%'
            height='400px'
          ></iframe>
        </div>
        <div className='game-page__right'>
          <GameCover image={image} />
          <p>{description}</p>
          <p className='secondary-text'>Популярные метки этого продукта:</p>
          {genres.map((genre) => (
            <GameGenre key={genre} genre={genre} />
          ))}
          <div className='game-page__buy-game'>
            <GameBuy game={game} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamePage;
