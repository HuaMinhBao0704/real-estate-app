import Slider from '../../components/slider';
import Map from '../../components/map';
import './single.scss';
import { singlePostData, userData } from '../../libs/dummyData';

const Single = () => {
  return (
    <div className='single__page'>
      {/* Details of Property */}
      <div className='details'>
        <div className='wrapper'>
          <Slider images={singlePostData.images} />
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
      {/* Features of Property */}
      <div className='features'>
        <div className='wrapper'>
          <p className='title'>General</p>
          <div className='list__vertical'>
            <div className='feature'>
              <img src='/utility.png' alt='' />
              <div className='feature__text'>
                <span>Utilities</span>
                <p>Renter is responsible</p>
              </div>
            </div>
            <div className='feature'>
              <img src='/pet.png' alt='' />
              <div className='feature__text'>
                <span>Pet Policy</span>
                <p>Pet Allowed</p>
              </div>
            </div>
            <div className='feature'>
              <img src='/fee.png' alt='' />
              <div className='feature__text'>
                <span>Property Fees</span>
                <p>Must have 3x the rent in total household income</p>
              </div>
            </div>
          </div>
          <p className='title'>Room Sizes</p>
          <div className='sizes'>
            <div className='size'>
              <img src='/size.png' alt='' />
              <span>80 sqft</span>
            </div>
            <div className='size'>
              <img src='/bed.png' alt='' />
              <span>2 beds</span>
            </div>
            <div className='size'>
              <img src='/bath.png' alt='' />
              <span>1 bathroom</span>
            </div>
          </div>
          <p className='title'>Nearby Places</p>
          <div className='list__horizontal'>
            <div className='feature'>
              <img src='/school.png' alt='' />
              <div className='feature__text'>
                <span>School</span>
                <p>250m away</p>
              </div>
            </div>
            <div className='feature'>
              <img src='/pet.png' alt='' />
              <div className='feature__text'>
                <span>Bus Stop</span>
                <p>100m away</p>
              </div>
            </div>
            <div className='feature'>
              <img src='/fee.png' alt='' />
              <div className='feature__text'>
                <span>Restaurant</span>
                <p>200m away</p>
              </div>
            </div>
          </div>
          <p className='title'>Location</p>
          <div className='map__container'>
            <Map items={[singlePostData]} />
          </div>
          <div className='buttons'>
            <button>
              <img src='/chat.png' alt='' />
              Send a message
            </button>
            <button>
              <img src='/save.png' alt='' />
              Save the place
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Single;
