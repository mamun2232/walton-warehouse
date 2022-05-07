import React from 'react';
import Review from '../../Utilitis/Review/Review';
import Banner from '../Banner/Banner';

import Delivary from '../Delivary/Delivary';
import NewBanner from '../NewBanner/NewBanner';

import Products from '../Products/Products';

const Home = () => {
      return (
            <div>
                  <Banner></Banner>
                  <Products></Products>
                  <NewBanner></NewBanner>
                  <Review></Review>
                
                  <Delivary></Delivary>
                  
            </div>
      );
};

export default Home;