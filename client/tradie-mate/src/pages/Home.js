import React from 'react';
import { useQuery } from '@apollo/client';
import TradieList from '../components/tradieList';

import { QUERY_TRADIES } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_TRADIES);
  const tradies = data?.tradies || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div className="col-12 col-md-10 my-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <TradieList
              tradies={tradies}
              title="Here's the current roster of tradies..."
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;