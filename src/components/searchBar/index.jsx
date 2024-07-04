import { useState } from 'react';
import './searchBar.scss';

const types = ['buy', 'rent'];

const SearchBar = () => {
  const [query, setQuery] = useState({
    type: 'buy',
    location: '',
    min_price: 0,
    max_price: 0,
  });

  const switchType = (value) => {
    setQuery((prevState) => ({ ...prevState, type: value }));
  };

  return (
    <div className='search__bar'>
      <div className='type'>
        {types.map((type) => (
          <button
            key={type}
            onClick={() => switchType(type)}
            className={query.type === type ? 'active' : ''}
          >
            {type}
          </button>
        ))}
      </div>
      <form>
        <input type='text' name='location' placeholder='City Location' />
        <input
          type='number'
          name='min_price'
          min={0}
          max={10000000}
          placeholder='Min Price'
        />
        <input
          type='number'
          name='max_price'
          min={0}
          max={10000000}
          placeholder='Max Price'
        />
        <button>
          <img src='/search.png' alt='' />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
