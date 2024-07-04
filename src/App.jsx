import Navbar from './components/Navbar';
import Home from './routes/home';
import './layout.scss';

const App = () => {
  return (
    <div className='layout'>
      <div className='navbar'>
        <Navbar />
      </div>
      <div className='content'>
        <Home />
      </div>
    </div>
  );
};

export default App;
