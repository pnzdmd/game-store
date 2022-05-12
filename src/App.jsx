import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux';
import HomePage from './pages/home-page/home-page';
import GamePage from './pages/game-page/game-page';
import OrderPage from './pages/order-page/order-page';
import Header from './components/header/Header';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className='App'>
          <Header />
          <Routes>
            <Route exact path='/' element={<HomePage />} />
            <Route path='/app/:title' element={<GamePage />} />
            <Route path='/order' element={<OrderPage />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
