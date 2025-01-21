import logo from './logo.svg';
import './App.css';
import FlipClock from './FlipClock';
import './FlipClock.css';


const App = () => {
  return (
    <div>
      <FlipClock targetDateTime="2025-03-03T08:55:00-05:00" />
    </div>
  );
};

export default App;
