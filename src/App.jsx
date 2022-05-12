import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/home-page/home-page';
import Header from './components/header/Header';

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
