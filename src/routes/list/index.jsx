import Filter from '../../components/filter';
import Card from '../../components/card';
import { listData } from '../../libs/dummyData';
import './list.scss';
import Map from '../../components/map';

const List = () => {
  return (
    <div className='list__page'>
      <div className='list__container'>
        <div className='wrapper'>
          <Filter />
          {listData.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
      <div className='map__container'>
        <Map items={listData} />
      </div>
    </div>
  );
};

export default List;
