import GameCover from '../game-cover/game-cover';

import './game-item.css';

const GameItem = ({ game }) => {
  return (
    <div className='game-item'>
      <GameCover />
      <div className='game-item__details'>
        <span className='game-item__title'>{game.title}</span>
        <div className='genre'>{game.genres.map((genre) => genre)}</div>
        <div className='game-items__buy'>buy</div>
      </div>
    </div>
  );
};

export default GameItem;
