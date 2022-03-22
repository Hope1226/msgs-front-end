import './assets/stylesheets/App.css';
import Messages from './components/Messages';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>Wellcome to the messages app</h1>
        <Routes>
          <Route path='/' exact element={<Messages />} />
          <Route path='/home' exact element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
