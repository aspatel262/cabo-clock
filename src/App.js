import logo from './logo.svg';
import './App.css';
import FlipClock from './FlipClock';
import './FlipClock.css';


const App = () => {
  return (
    <div>
      <FlipClock targetDateTime="2025-02-01T15:30:00" />
    </div>
  );
};

export default App;
