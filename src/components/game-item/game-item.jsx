import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import GameCover from '../game-cover/game-cover';
import GameBuy from '../game-buy/game-buy';
import GameGenre from '../game-genre/game-genre';
import { setCurrentGame } from '../../redux/games/reduce';

import './game-item.css';

const GameItem = ({ game }) => {
  const { title, image, genres } = game;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setCurrentGame(game));
    navigate(`/app/${title}`);
  };

  return (
    <div className='game-item' onClick={handleClick}>
      <GameCover image={image} />
      <div className='game-item__details'>
        <span className='game-item__title'>{title}</span>
        <div className='genre'>
          {genres.map((genre) => (
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
