import SearchBar from '../../components/searchBar';
import './home.scss';

const Home = () => {
  return (
    <div className='homepage'>
      <div className='text__container'>
        <div className='wrapper'>
          <h1 className='title'>Find Real Estate & Get Your Dream Place</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
            aliquid natus doloremque illo nostrum repudiandae consequatur
            tempore nihil, modi velit laboriosam accusamus aspernatur explicabo
            rerum architecto sapiente porro fugiat eos?
          </p>
          <SearchBar />
          <div className='boxes'>
            <div className='box'>
              <h1>16+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className='box'>
              <h1>200</h1>
              <h2>Award Gained</h2>
            </div>
            <div className='box'>
              <h1>2000+</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className='img__container'>
        <img src='/bg.png' alt='' />
      </div>
    </div>
  );
};

export default Home;
