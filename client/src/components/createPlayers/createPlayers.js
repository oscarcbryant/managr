import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


export default function CreatePlayers() {

const [player, setPlayers] = useState({

    Firstname: '',
    Surname: '',
    email: '',
    Age: 0,
    Position: ''

});

const createPlayers = () => {

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
        
      <TextField id="outlined-basic" label="Firstname" variant="outlined" value={player.Firstname} 
      onChange={(event) => setPlayers({ ...player, Firstname: event.target.value})}/>
      <TextField id="outlined-basic" label="Surname" variant="outlined" value={player.Surname}
      onChange={(event) => setPlayers({ ...player, Surname: event.target.value})}/>
      <TextField id="outlined-basic" label="Email" variant="outlined" value={player.email}
      onChange={(event) => setPlayers({ ...player, Email: event.target.value})}/>
      <TextField id="outlined-basic" label="Age" variant="outlined" value={player.Age}
      onChange={(event) => setPlayers({ ...player, Age: event.target.value})}/>
      <TextField id="outlined-basic" label="Position" variant="outlined" value={player.Position}
      onChange={(event) => setPlayers({ ...player, Position: event.target.value})}/>

      <Button variant="contained" onClick={createPlayers}>Sign them up!
      </Button>
    </Box>
    </>
  );
}