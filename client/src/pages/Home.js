import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';

// import TeamList from '../components/TeamList';

import { QUERY_PROFILES } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_PROFILES);
  const profiles = data?.profiles || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div className="col-12 col-md-10 my-3">
        <h5>You are signed in!</h5>
        <p>What would you like to do?</p>
        <button>The Bootcamp XI</button>
        <button>Create New Team!</button>
        </div>
      </div>
    </main>
  );
};

export default Home;
