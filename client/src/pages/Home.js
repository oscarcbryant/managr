import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Player from '../components/showPlayers/showPlayers.js';
import Create from '../components/createPlayers/createPlayers.js';


// import TeamList from '../components/TeamList';

import { QUERY_PROFILES } from '../utils/queries';



const Home = () => {
  const { loading, data } = useQuery(QUERY_PROFILES);
  const profiles = data?.profiles || [];
const [showPlayer, setShowPlayer] = useState(false);

  const showPlayersClick = () => setShowPlayer(!showPlayer);

  const [showCreatePlayer, setShowCreatePlayer] = useState(false);

  const showCreateClick = () => setShowCreatePlayer(!showCreatePlayer);

  return (
    <main>
      <div className="flex-row justify-center">
        <div className="col-12 col-md-10 my-3">
        <h5>You are signed in!</h5>
        <p>What would you like to do?</p>
       
        {showPlayer ? <Player /> : null}
        {showCreatePlayer ? <Create /> : null}
        <button onClick={showPlayersClick}>
            
        { showPlayer ? 'Hide Players' : 'Show players'}
            </button>
        <button onClick={showCreateClick}>{showCreatePlayer ? 'Hide Create Player' : 'Show Create Player'}
        </button>
        </div>
      </div>
    </main>
  );
};

export default Home;
