/** @format */
import { Helmet } from 'react-helmet';
import Background from '../components/base/Background';
import Title from '../components/base/Title';
import food from '../assets/images/icon/icon_b_food.png';
import { Sidebar } from '../components/common/Sidebar';
const Addfood = () => {
  return (
    <>
      <Helmet>
        <title>밥</title>
      </Helmet>

      <div className=" container w-full h-full m-auto flex">
        <Sidebar></Sidebar>
        <div className="ml-8 w-full">
          <Background>
            <div className="flex justify-between mb-8 ">
              <div className="flex">
                <img
                  src={food}
                  alt="food"
                  className="w-[20px] h-[20px] self-center mr-3"
                />
                <Title name={'밥'} />
              </div>
            </div>
          </Background>
        </div>
      </div>
    </>
  );
};

export default Addfood;
