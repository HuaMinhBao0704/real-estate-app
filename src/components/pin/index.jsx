/* eslint-disable react/prop-types */
import { Marker, Popup } from 'react-leaflet';
import { Link } from 'react-router-dom';

import './pin.scss';

// eslint-disable-next-line react/prop-types
const Pin = ({ item }) => {
  return (
    <Marker position={[item.latitude, item.longitude]} >
      <Popup>
        <div className='pin__popup-container'>
          <img src={item.img} alt="" />
          <div className='text__container'>
            <Link to={`/${item.id}`}>{item.title}</Link>
            <span className='bed'>{item.bedroom} bedroom</span>
            <b>$ {item.price}</b>
          </div>
        </div>
      </Popup>
    </Marker>
  );
};

export default Pin;
