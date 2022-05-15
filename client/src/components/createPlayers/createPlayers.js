import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


export default function CreatePlayer() {

const [player, setPlayers] = useState({

    firstname: '',
    surname: '',
    email: '',
    age: 0,
    position: ''

});

const createPlayer = () => {
console.log(player);
}


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
      onChange={(event) => setPlayers({ ...player, firstname: event.target.value})}/>
      <TextField id="outlined-basic" label="Surname" variant="outlined" value={player.surname}
      onChange={(event) => setPlayers({ ...player, surname: event.target.value})}/>
      <TextField id="outlined-basic" label="Email" variant="outlined" value={player.email}
      onChange={(event) => setPlayers({ ...player, email: event.target.value})}/>
      <TextField id="outlined-basic" label="Age" variant="outlined" value={player.age}
      onChange={(event) => setPlayers({ ...player, age: event.target.value})}/>
      <TextField id="outlined-basic" label="Position" variant="outlined" value={player.position}
      onChange={(event) => setPlayers({ ...player, position: event.target.value})}/>

      <Button variant="contained" onClick={createPlayer}>Sign them up!
      </Button>
    </Box>
    </>
  );

    }
