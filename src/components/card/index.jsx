/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

import './card.scss';

// eslint-disable-next-line react/prop-types
const Card = ({ item }) => {
  return (
    <div className='card'>
      <Link to={`/${item.id}`} className='image__container'>
        <img src={item.img} alt='' />
      </Link>
      <div className='text__container'>
        <h2 className='title'>
          <Link to={`/${item.id}`}>{item.title}</Link>
        </h2>
        <p className='address'>
          <img src="/pin.png" alt="" />
          <span>{item.address}</span>
        </p>
        <p className='price'>$ {item.price}</p>
        <div className="bottom">
          <div className="features">
            <div className="feature">
              <img src="/bed.png" alt="" />
              <span>{item.bedroom} bedroom</span>
            </div>
            <div className="feature">
              <img src="/bath.png" alt="" />
              <span>{item.bathroom} bathroom</span>
            </div>
          </div>
          <div className="icons">
            <div className="icon">
              <img src="/save.png" alt="" />
            </div>
            <div className="icon">
              <img src="/chat.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
