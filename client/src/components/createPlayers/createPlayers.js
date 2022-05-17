import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { ADD_PLAYER } from '../../utils/mutations';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_PLAYERS } from '../../utils/queries';


const CreatePlayerForm = () => {
const [player, setPlayersState] = useState({

    firstname: '',
    surname: '',
    email: '',
    age: 0,
    position: ''

});

const [CreatePlayer, {error}] = useMutation(ADD_PLAYER, {
update(cache, { data: { addProfile }}) {
  try {
    const { players } = cache.readQuery({ query: QUERY_PLAYERS });

    cache.writeQuery({
      query: QUERY_PLAYERS,
      data: { players: [...players, CreatePlayer] },
    });
  }
  catch (e) {
    console.error(e);
  }
}
});

const handleFormSubmit = async () => {
  console.log(player);

  try {
    const { data } = CreatePlayer({
      variables: { ...player },
    })
  }

  catch (err) {
    console.error(err);
  }
};





return (
<>
<h2>Create Player</h2>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
        
      <TextField id="outlined-basic" label="Firstname" variant="outlined" value={player.firstname} 
      onChange={(event) => setPlayersState({ ...player, firstname: event.target.value})}/>
      <TextField id="outlined-basic" label="Surname" variant="outlined" value={player.surname}
      onChange={(event) => setPlayersState({ ...player, surname: event.target.value})}/>
      <TextField id="outlined-basic" label="Email" variant="outlined" value={player.email}
      onChange={(event) => setPlayersState({ ...player, email: event.target.value})}/>
      <TextField id="outlined-basic" label="Age" variant="outlined" value={player.age}
      onChange={(event) => setPlayersState({ ...player, age: event.target.value})}/>
      <TextField id="outlined-basic" label="Position" variant="outlined" value={player.position}
      onChange={(event) => setPlayersState({ ...player, position: event.target.value})}/>

      <Button variant="contained" onClick={()=>handleFormSubmit()}>Sign them up!
      </Button>
    </Box>
    </>
  );

    }

    export default CreatePlayerForm;
