import Card from '../card';
import { listData } from '../../libs/dummyData';
import './properties.scss';

const Properties = () => {
  return (
    <div className='properties'>
      {listData.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Properties;
