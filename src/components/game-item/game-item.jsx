import GameCover from '../game-cover/game-cover';
import GameBuy from '../game-buy/game-buy';
import GameGenre from '../game-genre/game-genre';

import './game-item.css';

const GameItem = ({ game }) => {
  return (
    <div className='game-item'>
      <GameCover image={game.image} />
      <div className='game-item__details'>
        <span className='game-item__title'>{game.title}</span>
        <div className='genre'>
          {game.genres.map((genre) => (
            <GameGenre genre={genre} key={genre} />
          ))}
        </div>
        <div className='game-item__buy'>
          <GameBuy game={game} />
        </div>
      </div>
    </div>
  );
};

export default GameItem;
