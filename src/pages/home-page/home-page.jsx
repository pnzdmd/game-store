import GameItem from '../../components/game-item/game-item';
import { initialCards } from '../../initialCards';

import './home-page.css';

const HomePage = () => {
  return (
    <div className='home-page'>
      {initialCards.map((game) => (
        <GameItem key={game.id} game={game} />
      ))}
    </div>
  );
};

export default HomePage;
