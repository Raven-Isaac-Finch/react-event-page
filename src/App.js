import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './components/pages/LandingPage';
import EventPage from './components/pages/EventPage';
import CreatePage from './components/pages/CreatePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<LandingPage />} />
          <Route path='event' element={<EventPage />} />
          <Route path='create' element={<CreatePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
