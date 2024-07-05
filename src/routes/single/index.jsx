import Slider from '../../components/slider';
import './single.scss';
import { singlePostData, userData } from '../../libs/dummyData';

const Single = () => {
  return (
    <div className='single__page'>
      <div className='details'>
        <div className='wrapper'>
          <Slider />
          <div className='info'>
            <div className='top'>
              {/* Post Information */}
              <div className='post'>
                <h1>{singlePostData.title}</h1>
                <div className='address'>
                  <img src='/pin.png' alt='' />
                  <span>{singlePostData.address}</span>
                </div>
                <div className='price'>$ {singlePostData.price}</div>
              </div>
              {/* Owner Information */}
              <div className='user'>
                <img src={userData.img} alt='' />
                <span>{userData.name}</span>
              </div>
            </div>
            <div className='bottom'>{singlePostData.description}</div>
          </div>
        </div>
      </div>
      <div className='features'>
        <div className='wrapper'>Features</div>
      </div>
    </div>
  );
};

export default Single;
